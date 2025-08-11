// import {env} from "@/data/env/server"
// import { drizzle } from "drizzle-orm/node-postgres"
// import * as schema from "@/drizzle/schema"

// export const db = drizzle(env.DATABASE_URL, { schema })

import { env } from "@/data/env/server";
// 1. You may need to change the import if you switch libraries,
//    but often Drizzle's main import works with both.
//    If you get errors, you might import from `drizzle-orm/postgres-js`.
import { drizzle } from "drizzle-orm/postgres-js"; 
import * as schema from "@/drizzle/schema";

// 2. Import the `postgres` function
import postgres from "postgres";

// 3. Create the client instance. It's simpler and manages pooling automatically.
const client = postgres(env.DATABASE_URL);

// 4. Pass the client instance to Drizzle
export const db = drizzle(client, { schema });