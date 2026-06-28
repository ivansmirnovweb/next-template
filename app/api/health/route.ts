import { NextResponse } from "next/server";

import { env } from "@/lib/env";
import { Health } from "@/types/health";

export async function GET(): Promise<NextResponse<Health>> {
  const payload: Health = {
    appName: "next-template",
    environment: env.NODE_ENV,
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
  };

  return NextResponse.json(payload, { status: 200 });
}
