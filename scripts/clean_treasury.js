const { Pool } = require("pg");

const rawUrl =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_8xlYn1ZtijPU@ep-purple-mountain-ba58xs09-pooler.c-8.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const pool = new Pool({
  connectionString: rawUrl,
  ssl: { rejectUnauthorized: false },
});

async function main() {
  const client = await pool.connect();
  try {
    console.log("Cleaning demo Treasury and Expense records...");
    await client.query('DELETE FROM "TreasuryTransaction"');
    await client.query('DELETE FROM "Expense"');
    console.log("✔ Deleted all demo Treasury transactions and Expenses.");

    // Insert clean opening balance transaction (default 10,000 EGP or whatever is configured)
    const openingBal = 10000;
    const newId = "tx_opening_" + Date.now();
    await client.query(
      `INSERT INTO "TreasuryTransaction" (
        id, type, category, amount, "balanceAfter", description, reference, "recordedBy", "createdAt"
      ) VALUES (
        $1, 'in', 'رصيد افتتاح', $2, $2, 'رصيد افتتاح الخزينة النقدية لبداية التشغيل (فرع المعادي)', 'OPENING-01', 'المعلم المايسترو (المالك)', NOW()
      )`,
      [newId, openingBal]
    );

    console.log(`✔ Initialized clean opening cash balance with ${openingBal} EGP.`);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch(console.error);
