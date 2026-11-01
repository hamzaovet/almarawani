const { Pool } = require('pg');

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_8xlYn1ZtijPU@ep-purple-mountain-ba58xs09-pooler.c-8.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

async function seed() {
  console.log('⚡ Starting Al Marawani Supermarket Database Seeding...');
  const client = await pool.connect();

  try {
    // 1. Seed System Settings
    await client.query(`
      INSERT INTO "SystemSettings" (
        "id", "storeName", "tagline", "mainBranch", "phone", "hotlines", "whatsapp",
        "address", "freeDeliveryThreshold", "expressDeliveryEnabled", "expressMinutes",
        "isLockedDown", "bannerNotice", "updatedAt"
      ) VALUES (
        'default',
        'سوبرماركت المرواني',
        'سلسلة سوبرماركت المرواني — أسعار الجملة وجودة الطازج حتى باب بيتك',
        'فرع المعادي الرئيسي (شارع النصر / دجلة)',
        '01009988771',
        '01009988771 | 01122334455 | 01234567890',
        '01009988771',
        'شارع النصر، تقاطع شارع 261، دجلة، المعادي - القاهرة',
        400,
        true,
        60,
        false,
        '⚡ خدمة المرواني ناو للتوصيل السوبر سريع خلال 60 دقيقة في المعادي وضواحيها — اطلب الآن واستفد من عروض الأسبوع!',
        NOW()
      )
      ON CONFLICT ("id") DO UPDATE SET
        "storeName" = EXCLUDED."storeName",
        "tagline" = EXCLUDED."tagline",
        "mainBranch" = EXCLUDED."mainBranch",
        "phone" = EXCLUDED."phone",
        "hotlines" = EXCLUDED."hotlines",
        "whatsapp" = EXCLUDED."whatsapp",
        "address" = EXCLUDED."address",
        "bannerNotice" = EXCLUDED."bannerNotice",
        "updatedAt" = NOW();
    `);
    console.log('✅ SystemSettings seeded.');

    // 2. Seed Default Branch
    await client.query(`
      INSERT INTO "Branch" ("id", "code", "name", "address", "phone", "isOpen", "deliveryActive", "createdAt")
      VALUES 
        ('b_maadi', 'MAADI', 'فرع المعادي الرئيسي', 'شارع النصر، تقاطع شارع 261، دجلة، المعادي - القاهرة', '01009988771', true, true, NOW())
      ON CONFLICT ("code") DO NOTHING;
    `);
    console.log('✅ Branch seeded.');

    // 3. Seed Users
    const users = [
      {
        id: 'u_owner',
        name: 'المعلم المايسترو (المالك)',
        username: 'maestro',
        phone: '01009988771',
        passwordHash: '123456789',
        pin: '157230',
        role: 'owner',
        branch: 'المعادي'
      },
      {
        id: 'u_manager',
        name: 'أحمد المرواني (مدير الفرع)',
        username: 'manager',
        phone: '01009988772',
        passwordHash: '123456',
        pin: '123456',
        role: 'manager',
        branch: 'المعادي'
      },
      {
        id: 'u_cashier1',
        name: 'كاشير 1 - وردية صباحية',
        username: 'cashier1',
        phone: '01009988773',
        passwordHash: '123456',
        pin: '111111',
        role: 'cashier',
        branch: 'المعادي'
      },
      {
        id: 'u_cashier2',
        name: 'كاشير 2 - وردية مسائية',
        username: 'cashier2',
        phone: '01009988774',
        passwordHash: '123456',
        pin: '222222',
        role: 'cashier',
        branch: 'المعادي'
      },
      {
        id: 'u_delivery',
        name: 'محمود طيارة (كابتن التوصيل)',
        username: 'delivery',
        phone: '01009988775',
        passwordHash: '123456',
        pin: '333333',
        role: 'delivery',
        branch: 'المعادي'
      },
      {
        id: 'u_picker',
        name: 'سامح التجميع (استلامات وطلبات)',
        username: 'picker',
        phone: '01009988776',
        passwordHash: '123456',
        pin: '444444',
        role: 'staff',
        branch: 'المعادي'
      }
    ];

    for (const u of users) {
      await client.query(`
        INSERT INTO "User" ("id", "name", "username", "phone", "passwordHash", "pin", "role", "branch", "isActive", "createdAt")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, true, NOW())
        ON CONFLICT ("phone") DO UPDATE SET
          "name" = EXCLUDED."name",
          "username" = EXCLUDED."username",
          "passwordHash" = EXCLUDED."passwordHash",
          "pin" = EXCLUDED."pin",
          "role" = EXCLUDED."role",
          "branch" = EXCLUDED."branch",
          "isActive" = true;
      `, [u.id, u.name, u.username, u.phone, u.passwordHash, u.pin, u.role, u.branch]);
    }
    console.log(`✅ ${users.length} Users seeded (Owner, Manager, 2 Cashiers, Delivery, Picker).`);

    // 4. Seed Delivery Captains
    const captains = [
      { id: 'c_1', name: 'محمود طيارة', phone: '01009988775', vehicle: 'سكوتر هوندا دليفري سريع', zone: 'المعادي ودجلة' },
      { id: 'c_2', name: 'إسلام نينجا', phone: '01155443322', vehicle: 'موتوسيكل بوكسر 150', zone: 'زهراء المعادي' },
      { id: 'c_3', name: 'عمر السريع', phone: '01277665544', vehicle: 'دراجة هوائية سريعة', zone: 'سرايات المعادي' }
    ];

    for (const c of captains) {
      await client.query(`
        INSERT INTO "Captain" ("id", "name", "phone", "vehicle", "zone", "isActive", "createdAt")
        VALUES ($1, $2, $3, $4, $5, true, NOW())
        ON CONFLICT ("phone") DO UPDATE SET
          "name" = EXCLUDED."name",
          "vehicle" = EXCLUDED."vehicle",
          "zone" = EXCLUDED."zone";
      `, [c.id, c.name, c.phone, c.vehicle, c.zone]);
    }
    console.log(`✅ ${captains.length} Captains seeded.`);

    // 5. Seed Delivery Zones (Maadi)
    const zones = [
      { nameAr: 'المعادي القديمة ودجلة', fee: 15, timeMinutes: 35, minOrder: 100 },
      { nameAr: 'سرايات المعادي وميدان الحرية', fee: 15, timeMinutes: 35, minOrder: 100 },
      { nameAr: 'شارع النصر واللاسلكي والعروبة', fee: 15, timeMinutes: 30, minOrder: 100 },
      { nameAr: 'زهراء المعادي والشطر العاشر', fee: 20, timeMinutes: 45, minOrder: 150 },
      { nameAr: 'كورنيش المعادي وأبراج عثمان', fee: 20, timeMinutes: 45, minOrder: 150 },
      { nameAr: 'المقطم وطريق الأوتوستراد', fee: 25, timeMinutes: 55, minOrder: 200 }
    ];

    for (const z of zones) {
      await client.query(`
        INSERT INTO "DeliveryZone" ("id", "nameAr", "fee", "timeMinutes", "minOrder", "isActive", "createdAt")
        VALUES (gen_random_uuid(), $1, $2, $3, $4, true, NOW())
        ON CONFLICT ("nameAr") DO UPDATE SET
          "fee" = EXCLUDED."fee",
          "timeMinutes" = EXCLUDED."timeMinutes",
          "minOrder" = EXCLUDED."minOrder";
      `, [z.nameAr, z.fee, z.timeMinutes, z.minOrder]);
    }
    console.log(`✅ ${zones.length} Delivery Zones seeded.`);

    // 6. Seed Categories
    const categories = [
      { nameAr: 'ألبان وأجبان', nameEn: 'Dairy & Cheese', icon: '🥛', badge: 'خصومات 20%', sortOrder: 1 },
      { nameAr: 'خضروات وفواكه طازجة', nameEn: 'Fresh Produce', icon: '🥦', badge: 'طازج يومياً', sortOrder: 2 },
      { nameAr: 'لحوم ودواجن ومصنعات', nameEn: 'Meat & Poultry', icon: '🥩', badge: 'مضمون 100%', sortOrder: 3 },
      { nameAr: 'أرز ومكرونة وبقوليات', nameEn: 'Rice & Pasta', icon: '🍚', badge: 'أسعار جملة', sortOrder: 4 },
      { nameAr: 'زيوت وسمن وصلصات', nameEn: 'Oils & Ghee', icon: '🫒', badge: 'أفضل توفير', sortOrder: 5 },
      { nameAr: 'مياه ومشروبات وعصائر', nameEn: 'Beverages', icon: '🧃', badge: 'منعش وبارد', sortOrder: 6 },
      { nameAr: 'شاي وبن ومشروبات ساخنة', nameEn: 'Tea & Coffee', icon: '☕', badge: 'مزاج الصباح', sortOrder: 7 },
      { nameAr: 'بسكويت وشوكولاتة وشيبس', nameEn: 'Snacks & Sweets', icon: '🍫', badge: 'تسالي ولذاذة', sortOrder: 8 },
      { nameAr: 'منظفات وعناية منزلية', nameEn: 'Cleaning & Home', icon: '🧼', badge: 'عروض الكرتونة', sortOrder: 9 },
      { nameAr: 'عناية شخصية وصابون', nameEn: 'Personal Care', icon: '🧴', badge: 'أصلي ومعتمد', sortOrder: 10 },
      { nameAr: 'مجمدات وأغذية سريعة', nameEn: 'Frozen Foods', icon: '❄️', badge: 'سريع التحضير', sortOrder: 11 },
      { nameAr: 'كراتين وعروض التوفير', nameEn: 'Value Packs', icon: '📦', badge: 'توفير المرواني ⚡', sortOrder: 12 }
    ];

    for (const cat of categories) {
      await client.query(`
        INSERT INTO "Category" ("id", "nameAr", "nameEn", "icon", "badge", "sortOrder", "createdAt")
        VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, NOW())
        ON CONFLICT ("nameAr") DO UPDATE SET
          "nameEn" = EXCLUDED."nameEn",
          "icon" = EXCLUDED."icon",
          "badge" = EXCLUDED."badge",
          "sortOrder" = EXCLUDED."sortOrder";
      `, [cat.nameAr, cat.nameEn, cat.icon, cat.badge, cat.sortOrder]);
    }
    console.log(`✅ ${categories.length} Categories seeded.`);

    // 7. Seed Authentic Supermarket Products
    const products = [
      // Dairy & Cheese
      {
        nameAr: 'حليب جهينة كامل الدسم 1 لتر',
        brand: 'جهينة',
        category: 'ألبان وأجبان',
        unit: '1 لتر',
        barcode: '6221007000015',
        basePrice: 43.50,
        originalPrice: 48.00,
        discountPercent: 10,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 200,
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop&q=80',
        description: 'حليب طبيعي 100% معقم كامل الدسم من جهينة، غني بالكالسيوم والفيتامينات.'
      },
      {
        nameAr: 'حليب المراعي كامل الدسم تريتباك 1 لتر',
        brand: 'المراعي',
        category: 'ألبان وأجبان',
        unit: '1 لتر',
        barcode: '6221007000022',
        basePrice: 46.00,
        originalPrice: 52.00,
        discountPercent: 12,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 180,
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&auto=format&fit=crop&q=80',
        description: 'حليب المراعي الصافي عالي الجودة مناسب لجميع أفراد الأسرة.'
      },
      {
        nameAr: 'جبنة دومتي بلس فيتا نباتي الدهن 500 جم',
        brand: 'دومتي',
        category: 'ألبان وأجبان',
        unit: '500 جم',
        barcode: '6221007000039',
        basePrice: 38.00,
        originalPrice: 44.00,
        discountPercent: 14,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 150,
        image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&auto=format&fit=crop&q=80',
        description: 'جبنة دومتي فيتا الشهية بقوام كريمي ناعم وطعم رائع للفطور والسندوتشات.'
      },
      {
        nameAr: 'جبنة عبور لاند تتراباك إسطنبولي 500 جم',
        brand: 'عبور لاند',
        category: 'ألبان وأجبان',
        unit: '500 جم',
        barcode: '6221007000046',
        basePrice: 39.50,
        originalPrice: 45.00,
        discountPercent: 12,
        isOffer: false,
        isExpress: true,
        isWeighted: false,
        stockQty: 140,
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=600&auto=format&fit=crop&q=80',
        description: 'جبنة إسطنبولي عبور لاند المحببة بنكهة الفلفل الطبيعي الغنية.'
      },
      {
        nameAr: 'جبنة رومي قديم فصوص فاخرة (بالوزن)',
        brand: 'المرواني ديلي',
        category: 'ألبان وأجبان',
        unit: '1 كجم',
        barcode: '2000010000000',
        basePrice: 330.00,
        originalPrice: 370.00,
        discountPercent: 11,
        isOffer: true,
        isExpress: true,
        isWeighted: true,
        stockQty: 60,
        image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&auto=format&fit=crop&q=80',
        description: 'جبنة رومي بلدي معتقة فصوص كاملة الدسم مقطعة ومغلفة بعناية بأمرك.'
      },
      {
        nameAr: 'زبادي جهينة سادة طبيعي 105 جم (عرض 6 علب)',
        brand: 'جهينة',
        category: 'ألبان وأجبان',
        unit: '6 علب × 105 جم',
        barcode: '6221007000053',
        basePrice: 42.00,
        originalPrice: 48.00,
        discountPercent: 13,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 90,
        image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=600&auto=format&fit=crop&q=80',
        description: 'زبادي طبيعي بلدي طازج غني بالبروبيوتيك للهضم والصحة اليومية.'
      },
      {
        nameAr: 'زبدة فيرن خليط طبيعي 1 كجم',
        brand: 'فيرن',
        category: 'ألبان وأجبان',
        unit: '1 كجم',
        barcode: '6221007000060',
        basePrice: 135.00,
        originalPrice: 155.00,
        discountPercent: 13,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 80,
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&auto=format&fit=crop&q=80',
        description: 'زبدة فيرن الشهيرة للمخبوزات والحلويات والطبخ الفاخر.'
      },

      // Fresh Produce
      {
        nameAr: 'طماطم بلدي فرز أول طازجة (بالكيلو)',
        brand: 'مزارع المرواني',
        category: 'خضروات وفواكه طازجة',
        unit: '1 كجم',
        barcode: '2000001000000',
        basePrice: 14.50,
        originalPrice: 18.00,
        discountPercent: 19,
        isOffer: true,
        isExpress: true,
        isWeighted: true,
        stockQty: 300,
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
        description: 'طماطم طازجة منتقاة حبة بحبة للسلطة والطبخ.'
      },
      {
        nameAr: 'بطاطس تحمير وطبخ فرز أول (بالكيلو)',
        brand: 'مزارع المرواني',
        category: 'خضروات وفواكه طازجة',
        unit: '1 كجم',
        barcode: '2000002000000',
        basePrice: 16.00,
        originalPrice: 20.00,
        discountPercent: 20,
        isOffer: true,
        isExpress: true,
        isWeighted: true,
        stockQty: 350,
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80',
        description: 'بطاطس مقرمشة ذهبية مناسبة للتحمير والشيبس دون امتصاص زيت.'
      },
      {
        nameAr: 'خيار بلدي طازج مقرمش (بالكيلو)',
        brand: 'مزارع المرواني',
        category: 'خضروات وفواكه طازجة',
        unit: '1 كجم',
        barcode: '2000004000000',
        basePrice: 14.00,
        originalPrice: 17.00,
        discountPercent: 18,
        isOffer: false,
        isExpress: true,
        isWeighted: true,
        stockQty: 200,
        image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&auto=format&fit=crop&q=80',
        description: 'خيار صواني طازج مقرمش يومياً من المزرعة لبيتك.'
      },
      {
        nameAr: 'موز بلدي فاخر سكري (بالكيلو)',
        brand: 'مزارع المرواني',
        category: 'خضروات وفواكه طازجة',
        unit: '1 كجم',
        barcode: '2000005000000',
        basePrice: 26.00,
        originalPrice: 30.00,
        discountPercent: 13,
        isOffer: true,
        isExpress: true,
        isWeighted: true,
        stockQty: 250,
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=80',
        description: 'موز بلدي طبيعي حلاوة وسكر مناسب للأطفال والرياضيين.'
      },
      {
        nameAr: 'تفاح أحمر إيطالي سكري مستورد (بالكيلو)',
        brand: 'فواكه مستوردة',
        category: 'خضروات وفواكه طازجة',
        unit: '1 كجم',
        barcode: '2000006000000',
        basePrice: 75.00,
        originalPrice: 90.00,
        discountPercent: 17,
        isOffer: true,
        isExpress: true,
        isWeighted: true,
        stockQty: 150,
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80',
        description: 'تفاح أحمر مقرمش حلو المذاق مستورد بأعلى معايير الجودة.'
      },

      // Rice & Pasta & Staples
      {
        nameAr: 'أرز الضحى مصري عريض الحبة فاخر 1 كجم',
        brand: 'الضحى',
        category: 'أرز ومكرونة وبقوليات',
        unit: '1 كجم',
        barcode: '6221008000012',
        basePrice: 35.00,
        originalPrice: 42.00,
        discountPercent: 17,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 300,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
        description: 'أرز مصري مفروز ومنظف إلكترونياً بدون أي شوائب، جودة الضحى المضمونة.'
      },
      {
        nameAr: 'أرز المطبخ حبة عريضة ممتاز 5 كجم',
        brand: 'المطبخ',
        category: 'أرز ومكرونة وبقوليات',
        unit: '5 كجم',
        barcode: '6221008000029',
        basePrice: 165.00,
        originalPrice: 195.00,
        discountPercent: 15,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 120,
        image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&auto=format&fit=crop&q=80',
        description: 'شيكارة أرز المطبخ 5 كجم عائلية توفير ممتاز لكل العزومات.'
      },
      {
        nameAr: 'مكرونة الملكة أقلام بنة 400 جم',
        brand: 'الملكة',
        category: 'أرز ومكرونة وبقوليات',
        unit: '400 جم',
        barcode: '6221008000036',
        basePrice: 13.50,
        originalPrice: 16.00,
        discountPercent: 16,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 400,
        image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600&auto=format&fit=crop&q=80',
        description: 'مكرونة الملكة من أجود أنواع السميد لا تعجن ومثالية للمكرونة بالبشاميل.'
      },
      {
        nameAr: 'مكرونة إيطاليانو سباغيتي فاخرة 400 جم',
        brand: 'إيطاليانو',
        category: 'أرز ومكرونة وبقوليات',
        unit: '400 جم',
        barcode: '6221008000043',
        basePrice: 17.50,
        originalPrice: 21.00,
        discountPercent: 17,
        isOffer: false,
        isExpress: true,
        isWeighted: false,
        stockQty: 220,
        image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281292?w=600&auto=format&fit=crop&q=80',
        description: 'مكرونة إيطاليانو سميد قمح صلب 100% طعم إيطالي أصيل.'
      },

      // Oils & Ghee
      {
        nameAr: 'زيت ذرة كريستال نقي 1.6 لتر',
        brand: 'كريستال',
        category: 'زيوت وسمن وصلصات',
        unit: '1.6 لتر',
        barcode: '6221009000019',
        basePrice: 165.00,
        originalPrice: 190.00,
        discountPercent: 13,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 100,
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80',
        description: 'زيت ذرة كريستال أصفر نقي 100% خفيف وصحي للقلب ولأشهى الأكلات.'
      },
      {
        nameAr: 'زيت عباد الشمس سلايت نقي 750 مل',
        brand: 'سلايت',
        category: 'زيوت وسمن وصلصات',
        unit: '750 مل',
        barcode: '6221009000026',
        basePrice: 62.00,
        originalPrice: 72.00,
        discountPercent: 14,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 160,
        image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=600&auto=format&fit=crop&q=80',
        description: 'زيت دوار الشمس سلايت خفيف على المعدة ومناسب للقلي والطبخ اليومي.'
      },
      {
        nameAr: 'سمن نباتي روابي برائحة القشطة الفلاحي 700 جم',
        brand: 'روابي',
        category: 'زيوت وسمن وصلصات',
        unit: '700 جم',
        barcode: '6221009000033',
        basePrice: 85.00,
        originalPrice: 98.00,
        discountPercent: 13,
        isOffer: false,
        isExpress: true,
        isWeighted: false,
        stockQty: 110,
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&auto=format&fit=crop&q=80',
        description: 'سمنة روابي الشهيرة بريحة وترميلة القشطة البلدي.'
      },
      {
        nameAr: 'صلصة طماطم هاينز برطمان 360 جم',
        brand: 'هاينز',
        category: 'زيوت وسمن وصلصات',
        unit: '360 جم',
        barcode: '6221009000040',
        basePrice: 28.00,
        originalPrice: 34.00,
        discountPercent: 18,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 180,
        image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=600&auto=format&fit=crop&q=80',
        description: 'معجون طماطم هاينز المركز بلون أحمر طبيعي ونكهة غنية للمحاشي والطبخ.'
      },

      // Beverages & Waters
      {
        nameAr: 'مياه معدنية طبيعية نستله كرتونة (12 زجاجة × 1.5 لتر)',
        brand: 'نستله',
        category: 'مياه ومشروبات وعصائر',
        unit: 'كرتونة 12 زجاجة',
        barcode: '6221010000016',
        basePrice: 85.00,
        originalPrice: 105.00,
        discountPercent: 19,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 85,
        image: 'https://images.unsplash.com/photo-1559839914-ba2ae147c30e?w=600&auto=format&fit=crop&q=80',
        description: 'كرتونة مياه نستله بيور لايف بحجم عائلي توفير ممتاز لبيتك.'
      },
      {
        nameAr: 'كوكاكولا كانز أصلية 330 مل (عرض 6 كانز)',
        brand: 'كوكاكولا',
        category: 'مياه ومشروبات وعصائر',
        unit: '6 كانز × 330 مل',
        barcode: '6221010000023',
        basePrice: 88.00,
        originalPrice: 102.00,
        discountPercent: 14,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 140,
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80',
        description: 'كوكاكولا الطعم الأصلي المنعش مع الثلج.'
      },
      {
        nameAr: 'عصير جهينة بيور برتقال طبيعي بدون سكر 1 لتر',
        brand: 'جهينة بيور',
        category: 'مياه ومشروبات وعصائر',
        unit: '1 لتر',
        barcode: '6221010000030',
        basePrice: 48.00,
        originalPrice: 55.00,
        discountPercent: 13,
        isOffer: false,
        isExpress: true,
        isWeighted: false,
        stockQty: 120,
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80',
        description: 'عصير برتقال طبيعي 100% بدون أي سكر مضاف ولا مواد حافظة.'
      },

      // Tea & Coffee
      {
        nameAr: 'شاي العروسة أسود ناعم 250 جم',
        brand: 'العروسة',
        category: 'شاي وبن ومشروبات ساخنة',
        unit: '250 جم',
        barcode: '6221011000013',
        basePrice: 55.00,
        originalPrice: 65.00,
        discountPercent: 15,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 250,
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
        description: 'شاي كيني أسود فاخر ناعم برائحة ونكهة مظبوطة لكل أوقات اليوم.'
      },
      {
        nameAr: 'شاي ليبتون العلامة الصفراء 100 فتلة',
        brand: 'ليبتون',
        category: 'شاي وبن ومشروبات ساخنة',
        unit: '100 كيس',
        barcode: '6221011000020',
        basePrice: 95.00,
        originalPrice: 115.00,
        discountPercent: 17,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 180,
        image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600&auto=format&fit=crop&q=80',
        description: 'أكياس شاي ليبتون المشهورة بجودتها وانتعاشها مع كل فنجان.'
      },
      {
        nameAr: 'نسكافيه كلاسيك قهوة سريعة التحضير برطمان 190 جم',
        brand: 'نسكافيه',
        category: 'شاي وبن ومشروبات ساخنة',
        unit: '190 جم',
        barcode: '6221011000037',
        basePrice: 175.00,
        originalPrice: 205.00,
        discountPercent: 15,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 90,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
        description: 'قهوة نقية 100% سريعة الذوبان بنكهة قوية محببة لتبدأ يومك بنشاط.'
      },
      {
        nameAr: 'بن عبد المعبود محوج بالحبهان وسط 200 جم',
        brand: 'عبد المعبود',
        category: 'شاي وبن ومشروبات ساخنة',
        unit: '200 جم',
        barcode: '6221011000044',
        basePrice: 125.00,
        originalPrice: 145.00,
        discountPercent: 14,
        isOffer: false,
        isExpress: true,
        isWeighted: false,
        stockQty: 110,
        image: 'https://images.unsplash.com/photo-1559525839-8f85ae70438c?w=600&auto=format&fit=crop&q=80',
        description: 'توليفة بن يمني وحبشي محوج بالحبهان الفاخر والمستكة على أصولها.'
      },

      // Cleaning & Home
      {
        nameAr: 'مسحوق غسيل أوتوماتيك أريال لافندر 4 كجم',
        brand: 'أريال',
        category: 'منظفات وعناية منزلية',
        unit: '4 كجم',
        barcode: '6221012000010',
        basePrice: 235.00,
        originalPrice: 275.00,
        discountPercent: 15,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 80,
        image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&auto=format&fit=crop&q=80',
        description: 'نظافة لا تقاوم ورائحة لافندر منعشة تدوم طويلاً للملابس البيضاء والملونة.'
      },
      {
        nameAr: 'سائل غسيل الأطباق فيري بلس ليمون 1.25 لتر',
        brand: 'فيري',
        category: 'منظفات وعناية منزلية',
        unit: '1.25 لتر',
        barcode: '6221012000027',
        basePrice: 58.00,
        originalPrice: 68.00,
        discountPercent: 15,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 160,
        image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&auto=format&fit=crop&q=80',
        description: 'قوة قاهرة للدهون تدوم 3 مرات أطول مع رائحة الليمون المنعشة.'
      },
      {
        nameAr: 'مناديل مطبخ فاين سوبر تريو (عرض 6 رول)',
        brand: 'فاين',
        category: 'منظفات وعناية منزلية',
        unit: '6 رول',
        barcode: '6221012000034',
        basePrice: 65.00,
        originalPrice: 78.00,
        discountPercent: 17,
        isOffer: false,
        isExpress: true,
        isWeighted: false,
        stockQty: 130,
        image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=600&auto=format&fit=crop&q=80',
        description: 'مناديل ورقية فائقة الامتصاص والقوة مناسبة لتجفيف الطعام والمطبخ.'
      },

      // Snacks & Sweets
      {
        nameAr: 'شيبسي عائلي بطعم الجبنة المتبلة 90 جم',
        brand: 'شيبسي',
        category: 'بسكويت وشوكولاتة وشيبس',
        unit: '90 جم',
        barcode: '6221013000017',
        basePrice: 15.00,
        originalPrice: 18.00,
        discountPercent: 17,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 250,
        image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&auto=format&fit=crop&q=80',
        description: 'رقائق بطاطس طبيعية 100% مقرمشة بنكهة الجبنة المتبلة المحبوبة.'
      },
      {
        nameAr: 'شوكولاتة كادبوري ديري ميلك سادة 90 جم',
        brand: 'كادبوري',
        category: 'بسكويت وشوكولاتة وشيبس',
        unit: '90 جم',
        barcode: '6221013000024',
        basePrice: 45.00,
        originalPrice: 52.00,
        discountPercent: 13,
        isOffer: false,
        isExpress: true,
        isWeighted: false,
        stockQty: 180,
        image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&auto=format&fit=crop&q=80',
        description: 'شوكولاتة بالحليب الإنجليزي الفاخر تذوب في الفم بلذاذة استثنائية.'
      },

      // Value Bundles
      {
        nameAr: 'كرتونة الخير والتوفير الأسبوعية من المرواني (10 أصناف أساسية)',
        brand: 'المرواني توفير',
        category: 'كراتين وعروض التوفير',
        unit: 'كرتونة متكاملة',
        barcode: '6221014000014',
        basePrice: 380.00,
        originalPrice: 470.00,
        discountPercent: 19,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 50,
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80',
        description: 'تشمل: 2 كجم أرز مصري فاخر + 3 أكياس مكرونة 400 جم + 1 زيت خليط 800 مل + 1 سمنة 700 جم + 1 شاي 250 جم + 1 سكر 1 كجم + 1 صلصة برطمان.'
      },
      {
        nameAr: 'عرض فطور الأبطال (جبنة دومتي + حليب جهينة + زبادي + عسل)',
        brand: 'المرواني كومبو',
        category: 'كراتين وعروض التوفير',
        unit: 'باك فطور كامل',
        barcode: '6221014000021',
        basePrice: 155.00,
        originalPrice: 185.00,
        discountPercent: 16,
        isOffer: true,
        isExpress: true,
        isWeighted: false,
        stockQty: 70,
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80',
        description: 'وجبة فطور متكاملة ومغذية لأسرتك تكفي أسبوعاً بسعر جملة مميز.'
      }
    ];

    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      await client.query(`
        INSERT INTO "Product" (
          "id", "nameAr", "brand", "category", "unit", "barcode", "basePrice",
          "originalPrice", "discountPercent", "isOffer", "isExpress", "isWeighted",
          "inStock", "stockQty", "image", "description", "sortOrder", "createdAt"
        ) VALUES (
          gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, NOW()
        )
      `, [
        p.nameAr, p.brand || 'المرواني', p.category, p.unit || '1 قطعة', p.barcode || null, p.basePrice,
        p.originalPrice || null, p.discountPercent || null, p.isOffer ?? false, p.isExpress ?? true, p.isWeighted ?? false,
        p.inStock ?? true, p.stockQty || 100, p.image || null, p.description || null, i + 1
      ]);
    }
    console.log(`✅ ${products.length} Authentic Egyptian Supermarket Products seeded.`);

    // 8. Seed Initial Live Support Welcome Message
    await client.query(`
      INSERT INTO "ChatMessage" ("id", "senderName", "senderRole", "text", "isStaff", "createdAt")
      VALUES 
        (gen_random_uuid(), 'خدمة عملاء سوبرماركت المرواني', 'support', 'أهلاً بك في سوبرماركت المرواني فرع المعادي! 👋 كيف نقدر نساعدك اليوم؟ فريق خدمة العملاء متاح للرد على أي استفسار أو متابعة طلباتك فوراً.', true, NOW())
    `);
    console.log('✅ Initial Live Chat welcome message seeded.');

    console.log('🎉 ALL DATA SEEDED SUCCESSFULLY FOR AL MARAWANI SUPERMARKET!');
  } catch (err) {
    console.error('❌ Error during seeding:', err);
    throw err;
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
