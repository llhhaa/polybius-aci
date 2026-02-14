import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const healthChecks = pgTable('health_checks', {
  id: serial('id').primaryKey(),
  status: varchar('status', { length: 50 }).notNull(),
  checkedAt: timestamp('checked_at').defaultNow().notNull(),
});
