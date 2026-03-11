import { NextResponse } from "next/server";

export const runtime = 'edge';


export async function GET() {
    return NextResponse.json({ message: "OK", timestamp: new Date().toISOString(), uptime: process.uptime() });
}
