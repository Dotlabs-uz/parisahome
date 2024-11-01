import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
    ru: () => import("@/langs/ru.json").then((module) => module.default),
    en: () => import("@/langs/en.json").then((module) => module.default),
    uz: () => import("@/langs/uz.json").then((module) => module.default),
    jp: () => import("@/langs/jp.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
