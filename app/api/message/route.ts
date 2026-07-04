import { NextRequest, NextResponse } from "next/server";

import type { ApiResponse } from "@/types/api";
import { Message } from "@/types/message";

export async function GET(): Promise<NextResponse<ApiResponse<Message[]>>> {
  const payload: Message[] = [
    {
      id: "1",
      text: "Hello World",
    },
    {
      id: "2",
      text: "Hello World 2",
    },
    {
      id: "3",
      text: "Hello World 3",
    },
  ];

  return NextResponse.json(
    {
      success: true,
      data: payload,
    },
    { status: 200 },
  );
}

export async function POST(
  request: NextRequest,
): Promise<NextResponse<ApiResponse<Message>>> {
  const { text }: Pick<Message, "text"> = await request.json();

  const payload: Message = {
    id: "1",
    text,
  };

  return NextResponse.json(
    {
      success: true,
      data: payload,
    },
    { status: 200 },
  );
}
