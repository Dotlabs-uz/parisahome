import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Hero from "@/components/Hero";
import { LuArrowUpRight } from "react-icons/lu";
import Products from "@/components/Products";
import Accordions from "@/components/Accordions";
import { TfiEmail } from "react-icons/tfi";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import WeInNumbers from "@/components/WeInNumbers";
import Technologies from "@/components/Technologies";
import FAQ from "@/components/FAQ";
import Form from "@/components/Form";


const Home = async ({ params: { lang } }: { params: { lang: Locale }; }) => {
   const { homepage } = await getDictionary(lang);

   return (
      <>
         <section>
            {/* <Hero /> */}
            <div className="h-[90vh] max-sm:h-[85vh] w-full">
               <video preload={"auto"} autoPlay controls muted className="w-full h-full">
                  <source src="/images/videos/hero.mp4" type="video/mp4" />
               </video>
               {/* <iframe className="w-full h-full" src="/imgaes/hero.mp4" frameBorder="0"></iframe> */}
            </div>
         </section>

         <section>
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