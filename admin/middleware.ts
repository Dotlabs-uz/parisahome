import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest) {
    const token = request.cookies.get("token");
    const role = request.cookies.get("role");

    if (!token) {
        return NextResponse.redirect(new URL("/admin/admin/login", request.url))
    }

    if (!role) {
        return NextResponse.redirect(new URL("/admin/admin/login", request.url))
    }

    return NextResponse.next();
}

export const config = { 
    matcher: ['/admin/dashboard/:path*']
} 