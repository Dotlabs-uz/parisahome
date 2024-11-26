import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
	try {
		const negotiatorHeaders: Record<string, string> = {};
		request.headers.forEach(
			(value, key) => (negotiatorHeaders[key] = value)
		);

		// @ts-ignore locales are readonly
		const locales: string[] = i18n.locales;
		const languages = new Negotiator({
			headers: negotiatorHeaders,
		}).languages();

		const locale = matchLocale(languages, locales, i18n.defaultLocale);
		return locale;
	} catch (error) {
		console.error("Error getting locale:", error);
		return i18n.defaultLocale;
	}
}

export function middleware(request: NextRequest) {
	try {
		const pathname = request.nextUrl.pathname;
		const pathnameIsMissingLocale = i18n.locales.every(
			(locale) =>
				!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
		);

		// Permanent redirect if there is no locale
		if (pathnameIsMissingLocale) {
			const locale = getLocale(request);
			return NextResponse.redirect(
				new URL(
					`/${locale}${
						pathname.startsWith("/") ? "" : "/"
					}${pathname}`,
					request.url
				),
				308 // Permanent redirect
			);
		}
	} catch (error) {
		console.error("Middleware error:", error);
		return NextResponse.next();
	}
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!api|_next/static|_next/image|icon.svg|images|icons|robots.txt|sitemap.xml).*)",
		// Optional: only run on root (/) URL
	],
};
