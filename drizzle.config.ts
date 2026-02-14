import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

// If NOT in vercel, fall back to .env.local
if (!process.env.VERCEL) {
  config({ path: '.env.local' });
}

export default defineConfig({
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
