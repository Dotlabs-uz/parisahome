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
   const { homepage } = await getDictionary(lang);

   return (
      <>
         <section className="relative mt-14">
            <HeroVideo />
         </section>

         <section className="bg-green">
            <Technologies />
         </section>

         <section className="bg-white">
            <WeInNumbers />
         </section>

         <section className="bg-white">
            <Partners />
         </section>

         <section className="bg-white">
            <Products />
         </section>

         <section className="bg-white">
            <Gallery />
         </section>

         <section className="bg-milky py-10">
            <FAQ />
         </section>

         <section>
            <Form />
         </section>
      </>
   );
}

export default Home