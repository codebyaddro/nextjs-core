import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const query = await request.nextUrl.searchParams;
    const q = query.get('q');
    return NextResponse.json({
        search: q
    });
}