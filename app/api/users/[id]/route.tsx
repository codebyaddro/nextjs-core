import { NextRequest, NextResponse } from "next/server"

interface Params {
    params: {
        id: string
    }
}

export async function GET(request: NextRequest, { params }: Params) {
    const { id } = await params;
    return NextResponse.json({
        userId: id,
    });
}