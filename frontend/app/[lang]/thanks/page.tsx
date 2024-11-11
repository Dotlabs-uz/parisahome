import React from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const ThanksPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
    const { thanks } = await getDictionary(lang)

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-100 text-center p-6">
            <h2 className="text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-green-600 mb-4 max-xs:mb-2 text-white">{thanks.title}</h2>
            <p className="text-lg max-lg:text-base mb-10 text-white">{thanks.message}</p>
            <Link href={`/${lang}`} className="hover:underline max-md:underline text-yellow">
                {thanks.backHome}
            </Link>
        </div>
    );
};

export default ThanksPage;
