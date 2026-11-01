const { Pool } = require("pg");

const rawUrl =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_8xlYn1ZtijPU@ep-purple-mountain-ba58xs09-pooler.c-8.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const pool = new Pool({
  connectionString: rawUrl,
  ssl: { rejectUnauthorized: false },
});

async function seedERP() {
  const client = await pool.connect();
  try {
    console.log("Seeding ERP data (Suppliers, Inventory, Purchases, Customers, Treasury)...");

    // 1. Update Product costPrice and openingStock if 0
    await client.query(`
      UPDATE "Product"
      SET "costPrice" = ROUND(CAST("basePrice" * 0.80 AS numeric), 2),
          "minStockQty" = 15,
          "openingStock" = "stockQty"
      WHERE "costPrice" IS NULL OR "costPrice" = 0;
    `);
    console.log("✔ Products cost price and opening stock updated");

    // 2. Suppliers
    const suppliers = [
      {
        name: "شركة جهينة للصناعات الغذائية",
        contactPerson: "أ. أحمد فتحي (مندوب المعادي)",
        phone: "01011223344",
        address: "المنطقة الصناعية - 6 أكتوبر / فرع توزيع المعادي",
        category: "ألبان وعصائر",
        openingBalance: 12500,
        currentBalance: 12500,
        notes: "توريد أسبوعي كل يوم أحد وثلاثاء - سداد بشيكات أو كاش",
      },
      {
        name: "شركة دومتي (الصناعات الغذائية العربية)",
        contactPerson: "أ. كابتن حسام",
        phone: "01122334466",
        address: "طريق مصر الإسماعيلية الصحراوي",
        category: "أجبان وألبان",
        openingBalance: 8400,
        currentBalance: 8400,
        notes: "خصم 3% عند السداد النقدي الفوري",
      },
      {
        name: "شركة الضحى للأغذية والحبوب الفاخرة",
        contactPerson: "أ. محمد عبد الله",
        phone: "01233445566",
        address: "مدينة العبور - المنطقة الصناعية",
        category: "أرز وبقوليات وسكر",
        openingBalance: 15200,
        currentBalance: 15200,
        notes: "توريد شهري بالأطنان - أجود حبوب مصرية",
      },
      {
        name: "مزارع الوادي الأخضر للخضروات والفاكهة",
        contactPerson: "الحاج سيد الخضري",
        phone: "01055667788",
        address: "سوق العبور / تسليم يومي فرع المعادي 6 صباحاً",
        category: "خضار وفاكهة طازجة",
        openingBalance: 3200,
        currentBalance: 3200,
        notes: "توريد يومي طازج - سداد يومي مع الاستلام",
      },
      {
        name: "شركة المتحدة للمنظفات (وكيل بروكتر وفيري)",
        contactPerson: "أ. مصطفى الشريف",
        phone: "01188990011",
        address: "المعادي - طريق الأوتوستراد",
        category: "منظفات وعناية منزلية",
        openingBalance: 9800,
        currentBalance: 9800,
        notes: "توريد منتجات أريال وفيري وفاين وداوني",
      },
    ];

    for (const sup of suppliers) {
      await client.query(
        `
        INSERT INTO "Supplier" ("id", "name", "contactPerson", "phone", "address", "category", "openingBalance", "currentBalance", "isActive", "notes", "createdAt")
        VALUES (gen_random_uuid()::text, $1, $2, $3, $4, $5, $6, $7, true, $8, NOW())
        ON CONFLICT ("phone") DO UPDATE
        SET "name" = EXCLUDED."name",
            "contactPerson" = EXCLUDED."contactPerson",
            "category" = EXCLUDED."category",
            "openingBalance" = EXCLUDED."openingBalance",
            "currentBalance" = EXCLUDED."currentBalance";
      `,
        [
          sup.name,
          sup.contactPerson,
          sup.phone,
          sup.address,
          sup.category,
          sup.openingBalance,
          sup.currentBalance,
          sup.notes,
        ]
      );
    }
    console.log("✔ Suppliers seeded");

    // 3. Customers
    const customers = [
      {
        name: "د. أحمد منصور",
        phone: "01001234567",
        address: "شارع 216، دجلة، عمارة 14، شقة 5",
        zone: "المعادي القديمة ودجلة",
        totalOrders: 8,
        totalSpend: 3650,
      },
      {
        name: "م. نورهان الشاذلي",
        phone: "01112345678",
        address: "شارع النصر، أمام مطعم كاستن، برج المعادي ستار، دور 4",
        zone: "شارع النصر واللاسلكي",
        totalOrders: 14,
        totalSpend: 6820,
      },
      {
        name: "أ. كريم العطار",
        phone: "01223456789",
        address: "زهراء المعادي، الشطر العاشر، عمارة 58",
        zone: "زهراء المعادي والشطر العاشر",
        totalOrders: 5,
        totalSpend: 2450,
      },
      {
        name: "مدام منى زكي",
        phone: "01098765432",
        address: "سرايات المعادي، ميدان بورسعيد، فيلا 12",
        zone: "سرايات المعادي وميدان الحرية",
        totalOrders: 11,
        totalSpend: 5400,
      },
    ];

    for (const c of customers) {
      await client.query(
        `
        INSERT INTO "Customer" ("id", "name", "phone", "address", "zone", "totalOrders", "totalSpend", "createdAt")
        VALUES (gen_random_uuid()::text, $1, $2, $3, $4, $5, $6, NOW())
        ON CONFLICT ("phone") DO UPDATE
        SET "name" = EXCLUDED."name",
            "address" = EXCLUDED."address",
            "zone" = EXCLUDED."zone",
            "totalOrders" = EXCLUDED."totalOrders",
            "totalSpend" = EXCLUDED."totalSpend";
      `,
        [c.name, c.phone, c.address, c.zone, c.totalOrders, c.totalSpend]
      );
    }
    console.log("✔ Customers seeded");

    // 4. Initial Treasury Transactions
    const treasuryCount = await client.query('SELECT count(*) FROM "TreasuryTransaction"');
    if (parseInt(treasuryCount.rows[0].count) === 0) {
      await client.query(`
        INSERT INTO "TreasuryTransaction" ("id", "type", "category", "amount", "balanceAfter", "description", "recordedBy", "createdAt")
        VALUES 
          (gen_random_uuid()::text, 'in', 'رصيد افتتاح', 25000, 25000, 'رصيد افتتاح الخزينة النقدية لبداية التشغيل', 'maestro (المالك)', NOW() - INTERVAL '3 days'),
          (gen_random_uuid()::text, 'in', 'مبيعات كاشير', 4850, 29850, 'إيراد مبيعات الكاشير والـ POS شيفت الصباح', 'cashier1', NOW() - INTERVAL '2 days'),
          (gen_random_uuid()::text, 'in', 'مبيعات دليفري', 3920, 33770, 'تحصيل طلبات خدمة الدليفري والسريع', 'محمود طيارة', NOW() - INTERVAL '1 day'),
          (gen_random_uuid()::text, 'out', 'سداد مورد', 5000, 28770, 'دفعة نقدية تحت الحساب لشركة جهينة', 'manager', NOW() - INTERVAL '1 day'),
          (gen_random_uuid()::text, 'out', 'مصروف تشغيلي', 850, 27920, 'فاتورة صيانة ثلاجة العرض وسداد كهرباء', 'manager', NOW() - INTERVAL '12 hours');
      `);
      console.log("✔ Initial treasury transactions recorded");
    }

    // 5. Initial Stock Movements (Opening Balances)
    const stockMoveCount = await client.query('SELECT count(*) FROM "StockMovement"');
    if (parseInt(stockMoveCount.rows[0].count) === 0) {
      await client.query(`
        INSERT INTO "StockMovement" ("id", "productId", "productName", "movementType", "quantity", "balanceAfter", "unitCost", "reference", "notes", "performedBy", "createdAt")
        SELECT 
          gen_random_uuid()::text,
          id,
          "nameAr",
          'opening',
          "stockQty",
          "stockQty",
          "costPrice",
          'INIT-STOCK',
          'تسجيل رصيد أول المدة عند افتتاح السيستم',
          'maestro (المالك)',
          NOW() - INTERVAL '3 days'
        FROM "Product"
        LIMIT 15;
      `);
      console.log("✔ Initial stock movement records created");
    }

    console.log("ERP Seed completed successfully!");
  } catch (err) {
    console.error("Error seeding ERP:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

seedERP();
