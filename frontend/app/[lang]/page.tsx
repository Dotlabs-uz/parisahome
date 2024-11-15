import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import WeInNumbers from "@/components/WeInNumbers";
import Technologies from "@/components/Technologies";
import Form from "@/components/Form";
import HeroVideo from "@/components/HeroVideo";
import ProductsCon from "@/components/ProductsCon";
import FAQcon from "@/components/FAQcon";
import { Suspense } from "react";

const Home = async ({ params: { lang } }: { params: { lang: Locale }; }) => {
   const { technologiesComp, weInNumbersComp, partnersCom, products, galleryTitle, galleryButton, faqTitle, form } = await getDictionary(lang);

   return (
      <>
         <section className="relative mt-14">
            <HeroVideo />
         </section>

         <section className="bg-green">
            <Suspense fallback={'loading'}>
               <Technologies technologiesComp={technologiesComp} />
            </Suspense>
         </section>

         <section className="bg-white">
            <WeInNumbers weInNumbersComp={weInNumbersComp} />
         </section>

         <section className="bg-white">
            <Partners partnersCom={partnersCom} />
         </section>

         <section className="bg-white">
            <Suspense fallback={'loading'}>
               <ProductsCon products={products} />
            </Suspense>
         </section>

         <section className="bg-white w-full flex items-center justify-center">
            <Suspense fallback={'loading'}>
               <Gallery galleryTitle={galleryTitle} galleryButton={galleryButton} lang={lang} />
            </Suspense>
         </section>

         <section className="bg-milky py-10">
            <Suspense fallback={'loading'}>
               <FAQcon faqTitle={faqTitle} />
            </Suspense>
         </section>

         <section>
            <Form form={form} />
         </section>
      </>
   );
}

export default Home;