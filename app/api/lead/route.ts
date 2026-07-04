import { NextRequest, NextResponse } from "next/server";

import type { ApiResponse } from "@/types/api";
import { leadSchema, type Lead } from "@/types/lead";

export async function POST(
  request: NextRequest,
): Promise<NextResponse<ApiResponse<null>>> {
  const body = await request.json();
  const payload: Lead = leadSchema.parse(body);

  void payload;

  return NextResponse.json(
    {
      success: true,
      data: null,
    },
    { status: 201 },
  );
}
