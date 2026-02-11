import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields required" },
      { status: 400 }
    );
  }

  // Here you will integrate email service later

  return NextResponse.json({ success: true });
}
