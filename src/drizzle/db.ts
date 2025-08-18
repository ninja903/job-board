// import {env} from "@/data/env/server"
// import { drizzle } from "drizzle-orm/node-postgres"
// import * as schema from "@/drizzle/schema"

// export const db = drizzle(env.DATABASE_URL, { schema })

import { env } from "@/data/env/server"; // Your newly structured env file
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/drizzle/schema";
import { Client } from "pg";

const client = new Client({
  // This now works perfectly and is fully typed!
  connectionString: env.DATABASE_URL,
});

await client.connect();

export const db = drizzle(client, { schema });