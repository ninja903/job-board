
// import { createEnv } from "@t3-oss/env-nextjs";
// import { z } from "zod";


// const rawEnv = createEnv({
//   server: {
//     DB_PASSWORD: z.string().min(1),
//     DB_USER: z.string().min(1),
//     DB_HOST: z.string().min(1),
//     DB_PORT: z.string().min(1),
//     DB_NAME: z.string().min(1),
//     CLERK_SECRET_KEY: z.string().min(1),
//     CLERK_WEBHOOK_SECRET: z.string().min(1),
//     UPLOADTHING_TOKEN: z.string().min(1),
//     ANTHROPIC_API_KEY: z.string().min(1),
//     GEMINI_API_KEY: z.string().min(1),
//     RESEND_API_KEY: z.string().min(1),
//     SERVER_URL: z.string().min(1),
//   },
//   client: {
 
//     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
//   },
//   runtimeEnv: {
//     DB_PASSWORD: process.env.DB_PASSWORD,
//     DB_USER: process.env.DB_USER,
//     DB_HOST: process.env.DB_HOST,
//     DB_PORT: process.env.DB_PORT,
//     DB_NAME: process.env.DB_NAME,
//     CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
//     CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,
//     UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
//     ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
//     GEMINI_API_KEY: process.env.GEMINI_API_KEY,
//     RESEND_API_KEY: process.env.RESEND_API_KEY,
//     SERVER_URL: process.env.SERVER_URL,
//     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
//   },
//   emptyStringAsUndefined: true,
// });


// const constructedDatabaseUrl = `postgres://${rawEnv.DB_USER}:${rawEnv.DB_PASSWORD}@${rawEnv.DB_HOST}:${rawEnv.DB_PORT}/${rawEnv.DB_NAME}`;


// export const env = {
//   ...rawEnv,
//   DATABASE_URL: constructedDatabaseUrl,
// };

// src/data/env/server.ts
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // We only validate the single, complete URL now.
    DATABASE_URL: z.string().url(),
    
    // All the other server variables remain the same.
    CLERK_SECRET_KEY: z.string().min(1),
    CLERK_WEBHOOK_SECRET: z.string().min(1),
    UPLOADTHING_TOKEN: z.string().min(1),
    ANTHROPIC_API_KEY: z.string().min(1),
    GEMINI_API_KEY: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    SERVER_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    // We map process.env.DATABASE_URL to our schema.
    DATABASE_URL: process.env.DATABASE_URL,

    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,
    UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    SERVER_URL: process.env.SERVER_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
  emptyStringAsUndefined: true,
});