import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import WeInNumbers from "@/components/WeInNumbers";
import Technologies from "@/components/Technologies";
import FAQ from "@/components/FAQ";
import Form from "@/components/Form";
import HeroVideo from "@/components/HeroVideo";

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
            <Products products={products} />
         </section>

         <section className="bg-white">
            <Gallery galleryTitle={galleryTitle} galleryButton={galleryButton} />
         </section>

         <section className="bg-milky py-10">
            <FAQ faqTitle={faqTitle} />
         </section>

         <section>
            <Form form={form} />
         </section>
      </>
   );
}

export default Home