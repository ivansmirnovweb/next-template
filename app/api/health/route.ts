import { NextResponse } from "next/server";

import { env } from "@/lib/env";
import type { ApiResponse } from "@/types/api";
import { Health } from "@/types/health";

export async function GET(): Promise<NextResponse<ApiResponse<Health>>> {
  const payload: Health = {
    appName: "next-template",
    environment: env.NODE_ENV,
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
  };

  return NextResponse.json(
    {
      success: true,
      data: payload,
    },
    { status: 200 },
  );
}
