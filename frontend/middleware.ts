import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string {
	try {
		const negotiatorHeaders: Record<string, string> = {};
		request.headers.forEach((value, key) => {
			negotiatorHeaders[key] = value;
		});

		const locales = i18n.locales; // List of available locales
		const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
		return matchLocale(languages, locales, i18n.defaultLocale) || i18n.defaultLocale;
	} catch (error) {
		console.error("Error getting locale:", error);
		return i18n.defaultLocale;
	}
}

export function middleware(request: NextRequest) {
	try {
		const pathname = request.nextUrl.pathname;

		// Check if locale is missing from the pathname
		const isLocaleMissing = i18n.locales.every(
			(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
		);

		if (isLocaleMissing) {
			const locale = getLocale(request);

			// Construct new URL with the detected locale
			const newUrl = new URL(
				`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
				request.url
			);

			return NextResponse.redirect(newUrl, 308); // Permanent redirect
		}
	} catch (error) {
		console.error("Middleware error:", error);
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|models|cpanel|icon.svg|images|robots.txt|sitemap.xml).*)",
	],
};
