import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Checkout placeholder — payments not yet configured" }, { status: 200 });
}
