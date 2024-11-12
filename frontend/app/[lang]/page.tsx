import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import WeInNumbers from "@/components/WeInNumbers";
import Technologies from "@/components/Technologies";
import FAQ from "@/components/FAQ";
import Form from "@/components/Form";
import HeroVideo from "@/components/HeroVideo";
import ProductsCon from "@/components/ProductsCon";
import FAQcon from "@/components/FAQcon";

const Home = async ({ params: { lang } }: { params: { lang: Locale }; }) => {
   const { technologiesComp, weInNumbersComp, partnersCom, products, galleryTitle, galleryButton, faqTitle, form } = await getDictionary(lang);

   return (
      <>
         <section className="relative mt-14">
            <HeroVideo />
         </section>

         <section className="bg-green">
            <Technologies technologiesComp={technologiesComp} />
         </section>

         <section className="bg-white">
            <WeInNumbers weInNumbersComp={weInNumbersComp} />
         </section>

         <section className="bg-white">
            <Partners partnersCom={partnersCom} />
         </section>

         <section className="bg-white">
            <ProductsCon products={products} />
         </section>

         <section className="bg-white">
            <Gallery galleryTitle={galleryTitle} galleryButton={galleryButton} lang={lang} />
         </section>

         <section className="bg-milky py-10">
            <FAQcon faqTitle={faqTitle} />
         </section>

         <section>
            <Form form={form} />
         </section>
      </>
   );
}

export default Home