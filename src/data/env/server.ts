import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url().optional(),

    DB_USER: z.string().min(1).optional(),
    DB_PASSWORD: z.string().min(1).optional(),
    DB_HOST: z.string().min(1).optional(),
    DB_PORT: z.string().min(1).optional(),
    DB_NAME: z.string().min(1).optional(),

    CLERK_SECRET_KEY: z.string().min(1),
    CLERK_WEBHOOK_SECRET: z.string().min(1),
    UPLOADTHING_TOKEN: z.string().min(1),
    ANTHROPIC_API_KEY: z.string().min(1),
    GEMINI_API_KEY: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    SERVER_URL: z.string().min(1),
  },
  createFinalSchema: schema => {
    return z
      .object(schema)
      .transform((values) => {
        if (!values.DATABASE_URL && values.DB_USER && values.DB_PASSWORD && values.DB_HOST && values.DB_PORT && values.DB_NAME) {
          values.DATABASE_URL = `postgres://${encodeURIComponent(values.DB_USER)}:${encodeURIComponent(values.DB_PASSWORD)}@${values.DB_HOST}:${values.DB_PORT}/${values.DB_NAME}`
        }
        return values
      })
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
})
