import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Hello, Next.js!"
    });
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    return NextResponse.json({ 
        message: "Hello, Next.js!",
        data: body
    });
}