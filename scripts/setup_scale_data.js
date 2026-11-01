const { Pool } = require("pg");

const rawUrl =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_8xlYn1ZtijPU@ep-purple-mountain-ba58xs09-pooler.c-8.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const pool = new Pool({
  connectionString: rawUrl,
  ssl: { rejectUnauthorized: false },
});

const scaleProducts = [
  {
    scaleItemCode: "00001",
    nameAr: "طماطم بلدي فرز أول (بالكيلو)",
    brand: "مزارع المرواني",
    category: "خضروات وفواكه طازجة",
    unit: "بالكيلو",
    basePrice: 16.0,
    costPrice: 12.0,
    isWeighted: true,
    shelfLifeDays: 4,
    scaleTareWeight: 10,
    stockQty: 250,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80",
    description: "طماطم بلدي طازجة فرز أول حمراء صلبة ومثالية للسلطة والطبخ",
  },
  {
    scaleItemCode: "00002",
    nameAr: "بطاطس تحمير جيدة (بالكيلو)",
    brand: "مزارع المرواني",
    category: "خضروات وفواكه طازجة",
    unit: "بالكيلو",
    basePrice: 18.0,
    costPrice: 13.5,
    isWeighted: true,
    shelfLifeDays: 14,
    scaleTareWeight: 10,
    stockQty: 400,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80",
    description: "بطاطس تحمير سبونتا بلدي جودة ممتازة خالية من الطين ومقرمشة",
  },
  {
    scaleItemCode: "00003",
    nameAr: "بصل أحمر بلدي ناشف (بالكيلو)",
    brand: "مزارع المرواني",
    category: "خضروات وفواكه طازجة",
    unit: "بالكيلو",
    basePrice: 20.0,
    costPrice: 15.0,
    isWeighted: true,
    shelfLifeDays: 30,
    scaleTareWeight: 10,
    stockQty: 300,
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=80",
    description: "بصل أحمر بلدي صعيدي ناشف تخزين وحجم متجانس",
  },
  {
    scaleItemCode: "00004",
    nameAr: "خيار بلدي طازج (بالكيلو)",
    brand: "مزارع المرواني",
    category: "خضروات وفواكه طازجة",
    unit: "بالكيلو",
    basePrice: 16.0,
    costPrice: 11.0,
    isWeighted: true,
    shelfLifeDays: 5,
    scaleTareWeight: 10,
    stockQty: 180,
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&auto=format&fit=crop&q=80",
    description: "خيار صوب بلدي مقرمش وطازج يومياً لفرع المعادي",
  },
  {
    scaleItemCode: "00005",
    nameAr: "موز بلدي فاخر طازج (بالكيلو)",
    brand: "مزارع المرواني",
    category: "خضروات وفواكه طازجة",
    unit: "بالكيلو",
    basePrice: 28.0,
    costPrice: 21.0,
    isWeighted: true,
    shelfLifeDays: 3,
    scaleTareWeight: 10,
    stockQty: 220,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=80",
    description: "موز بلدي ويليامز فاخر ناضج ومسكر ومستورد من المزرعة مباشرة",
  },
  {
    scaleItemCode: "00006",
    nameAr: "تفاح أحمر سكري مستورد (بالكيلو)",
    brand: "مستورد درجة أولى",
    category: "خضروات وفواكه طازجة",
    unit: "بالكيلو",
    basePrice: 80.0,
    costPrice: 65.0,
    isWeighted: true,
    shelfLifeDays: 10,
    scaleTareWeight: 10,
    stockQty: 150,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80",
    description: "تفاح أحمر إيطالي سكري ممتاز عالي الحلاوة ومقرمش",
  },
  {
    scaleItemCode: "00007",
    nameAr: "جبنة رومي قديمة فاخرة (بالكيلو)",
    brand: "مزارع دينا",
    category: "ألبان وأجبان",
    unit: "بالكيلو",
    basePrice: 340.0,
    costPrice: 280.0,
    isWeighted: true,
    shelfLifeDays: 60,
    scaleTareWeight: 25,
    stockQty: 85,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&auto=format&fit=crop&q=80",
    description: "جبنة رومي بلدي معتقة حادة المذاق وقوام متماسك ممتاز للتقطيع",
  },
  {
    scaleItemCode: "00008",
    nameAr: "جبنة فيتا دومتي نباتي الدهن (بالكيلو)",
    brand: "دومتي",
    category: "ألبان وأجبان",
    unit: "بالكيلو",
    basePrice: 110.0,
    costPrice: 90.0,
    isWeighted: true,
    shelfLifeDays: 14,
    scaleTareWeight: 25,
    stockQty: 120,
    image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=600&auto=format&fit=crop&q=80",
    description: "جبنة فيتا بيضاء ناعمة وكريمية وزن ميزان طازج يومياً",
  },
  {
    scaleItemCode: "00009",
    nameAr: "جبنة بيضاء إسطنبولي عبور لاند (بالكيلو)",
    brand: "عبور لاند",
    category: "ألبان وأجبان",
    unit: "بالكيلو",
    basePrice: 125.0,
    costPrice: 102.0,
    isWeighted: true,
    shelfLifeDays: 20,
    scaleTareWeight: 25,
    stockQty: 95,
    image: "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?w=600&auto=format&fit=crop&q=80",
    description: "جبنة إسطنبولي طبيعية بالفلفل الأخضر بلبن طبيعي ممتاز",
  },
  {
    scaleItemCode: "00010",
    nameAr: "بسطرمة بلدي فاخرة بدون ثوم (بالكيلو)",
    brand: "حلواني إخوان",
    category: "لحوم ودواجن ومصنعات",
    unit: "بالكيلو",
    basePrice: 580.0,
    costPrice: 490.0,
    isWeighted: true,
    shelfLifeDays: 45,
    scaleTareWeight: 25,
    stockQty: 45,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    description: "بسطرمة بلدي صافي من أجود أنواع اللحوم البقرية بدون ريحة ثوم قوية",
  },
  {
    scaleItemCode: "00011",
    nameAr: "لانشون لحم بقري حلواني (بالكيلو)",
    brand: "حلواني إخوان",
    category: "لحوم ودواجن ومصنعات",
    unit: "بالكيلو",
    basePrice: 220.0,
    costPrice: 175.0,
    isWeighted: true,
    shelfLifeDays: 21,
    scaleTareWeight: 25,
    stockQty: 70,
    image: "https://images.unsplash.com/photo-1628268909376-e8c44bb30522?w=600&auto=format&fit=crop&q=80",
    description: "لانشون بقري صافي سادة متبل فاخر تقطيع ميزان حسب الطلب",
  },
  {
    scaleItemCode: "00012",
    nameAr: "لحم بقري بلدي مفروم طازج (بالكيلو)",
    brand: "جزارة المرواني",
    category: "لحوم ودواجن ومصنعات",
    unit: "بالكيلو",
    basePrice: 380.0,
    costPrice: 320.0,
    isWeighted: true,
    shelfLifeDays: 2,
    scaleTareWeight: 25,
    stockQty: 80,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&auto=format&fit=crop&q=80",
    description: "مفروم بلدي كندوز طازج نسبة دهن 10% ذبح اليوم بفرع المعادي",
  },
];

async function main() {
  const client = await pool.connect();
  try {
    console.log("Upserting scale weighted products into database...");
    for (const item of scaleProducts) {
      const res = await client.query(
        `SELECT id FROM "Product" WHERE "scaleItemCode" = $1 OR "nameAr" = $2 LIMIT 1`,
        [item.scaleItemCode, item.nameAr]
      );

      if (res.rows.length > 0) {
        await client.query(
          `UPDATE "Product"
           SET "scaleItemCode" = $1, "isWeighted" = true, "basePrice" = $2, "unit" = $3,
               "shelfLifeDays" = $4, "scaleTareWeight" = $5, "image" = $6, "category" = $7
           WHERE id = $8`,
          [
            item.scaleItemCode,
            item.basePrice,
            item.unit,
            item.shelfLifeDays,
            item.scaleTareWeight,
            item.image,
            item.category,
            res.rows[0].id,
          ]
        );
        console.log(`Updated product: ${item.nameAr} [PLU: ${item.scaleItemCode}]`);
      } else {
        const newId = "prod_scale_" + item.scaleItemCode;
        await client.query(
          `INSERT INTO "Product" (
            id, "nameAr", brand, category, unit, "basePrice", "costPrice",
            "isOffer", "isExpress", "isWeighted", "scaleItemCode", "shelfLifeDays", "scaleTareWeight",
            "inStock", "stockQty", "minStockQty", "openingStock", image, description, "createdAt"
          ) VALUES (
            $1, $2, $3, $4, $5, $6, $7,
            false, true, true, $8, $9, $10,
            true, $11, 10, $11, $12, $13, NOW()
          )`,
          [
            newId,
            item.nameAr,
            item.brand,
            item.category,
            item.unit,
            item.basePrice,
            item.costPrice,
            item.scaleItemCode,
            item.shelfLifeDays,
            item.scaleTareWeight,
            item.stockQty,
            item.image,
            item.description,
          ]
        );
        console.log(`Inserted product: ${item.nameAr} [PLU: ${item.scaleItemCode}]`);
      }
    }

    // Upsert SystemSettings
    await client.query(`
      INSERT INTO "SystemSettings" (
        id, "storeName", "taxNumber", "commercialReg", "weightPrefixes", "pricePrefixes", "pluDigits",
        address, phone, hotlines, "updatedAt"
      ) VALUES (
        'default', 'سوبرماركت المرواني', '684-219-450', '148920', '20,21', '22,23', 5,
        'شارع النصر، تقاطع شارع 261، دجلة، المعادي - القاهرة', '01009988771', '01009988771 | 01122334455 | 01234567890', NOW()
      )
      ON CONFLICT (id) DO UPDATE SET
        "taxNumber" = EXCLUDED."taxNumber",
        "commercialReg" = EXCLUDED."commercialReg",
        "weightPrefixes" = EXCLUDED."weightPrefixes",
        "pricePrefixes" = EXCLUDED."pricePrefixes",
        "pluDigits" = EXCLUDED."pluDigits",
        address = EXCLUDED.address,
        "updatedAt" = NOW();
    `);

    console.log("✔ Scale products & SystemSettings configured successfully!");
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
