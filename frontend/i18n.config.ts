export const i18n = {
	defaultLocale: "ru",
	locales: ["ru", "en", "uz", "jp"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
