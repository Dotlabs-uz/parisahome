import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { key, value, options } = await req.json();

        const serializedData = encodeURIComponent(JSON.stringify(value));
        const response = NextResponse.json({ message: 'cookie added', value });

        response.cookies.set(key, serializedData, { path: '/', httpOnly: true, ...options });

        return response;
    } catch (error) {
        console.error('Error in POST /api/cookies:', error);
        return NextResponse.json({ error: 'Failed to set cookie' }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const key: any = req.nextUrl.searchParams.get('key');

        const existingCookie = req.cookies.get(key)?.value;
        let data = {};

        if (existingCookie) {
            data = JSON.parse(decodeURIComponent(existingCookie));
        } else {
            return NextResponse.json({ error: 'Cookies is empty' }, { status: 400 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error in GET /api/cookies:', error);
        return NextResponse.json({ error: 'Failed to get cookie' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { key } = await req.json();
        const response = NextResponse.json({ status: true });

        response.cookies.delete(key);

        return response;
    } catch (error) {
        console.error('Error in DELETE /api/cookies:', error);
        return NextResponse.json({ error: 'Failed to delete cookie' }, { status: 500 });
    }
}