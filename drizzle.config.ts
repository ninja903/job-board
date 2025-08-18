// import { env } from "./src/data/env/server";
// import { defineConfig } from "drizzle-kit"

// export default defineConfig({
//   out: "./src/drizzle/migrations",
//   schema: "./src/drizzle/schema.ts",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: env.DATABASE_URL,
//   },
// })
// drizzle.config.ts

// drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env file");
}

export default defineConfig({
  
  schema: "./src/drizzle/schema.ts", 

  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true,
});