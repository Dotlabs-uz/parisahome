import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
    const { token, ...formData } = await request.json();

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    try {
        const { data } = await axios.post(verifyUrl);
        if (data.success) {
            return NextResponse.json({ success: true, message: "reCAPTCHA verified" });
        } else {
            return NextResponse.json({ success: false, message: "reCAPTCHA failed" }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}
