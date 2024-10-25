import { NextRequest, NextResponse } from 'next/server';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY!;

export async function POST(request: NextRequest) {
    const { token } = await request.json();

    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
        { method: 'POST' }
    );

    const data = await response.json();

    if (data.success) {
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json({ success: false, error: data['error-codes'] });
    }
}