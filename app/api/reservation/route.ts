import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const { name, email, date, guests } = data;

  if (!name || !email || !date || !guests) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true });
}
