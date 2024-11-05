import React from "react";
import Form from "@/components/Form";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
    const { form, nav } = await getDictionary(lang);

    return (
        <div className="pt-14">
            <div>
                <div className="relative py-32 max-lg:py-20 bg-[url('https://parisahome.com/sites/all/themes/sap/img/dist/footer-bg.jpg')] bg-cover bg-no-repeat">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
                    <div className="anim-element">
                        <h2 className="relative z-10 text-center text-7xl max-lg:text-6xl max-md:text-5xl font-medium text-white">
                            {nav.link4}
                        </h2>
                    </div>
                </div>
            </div>

            <Form form={form} />
        </div>
    );
};

export default Page;
