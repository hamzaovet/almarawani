import { defineConfig } from "prisma/config";

const rawUrl =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_8xlYn1ZtijPU@ep-purple-mountain-ba58xs09-pooler.c-8.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
const directUrl = rawUrl.replace("-pooler", "");

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: directUrl + (directUrl.includes("schema=") ? "" : "&schema=public"),
  },
});
