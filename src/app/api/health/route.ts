import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { healthChecks } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';

export async function GET() {
  try {
    // Write a row
    await db.insert(healthChecks).values({ status: 'ok' });

    // Read the latest row back
    const [latest] = await db
      .select()
      .from(healthChecks)
      .orderBy(desc(healthChecks.checkedAt))
      .limit(1);

    return NextResponse.json({
      healthy: true,
      lastCheck: latest,
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      { healthy: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
