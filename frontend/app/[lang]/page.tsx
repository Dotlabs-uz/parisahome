import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Hero from "@/components/Hero";
import { LuArrowUpRight } from "react-icons/lu";
import Products from "@/components/Products";
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
         <section className="relative mt-14">
            {/* <Hero /> */}
            <div className="h-[90vh] max-xl:h-[80vh] max-lg:h-[100%] w-full">
               <video preload={"auto"} autoPlay controls muted className="w-full h-full object-cover select-none pointer-events-none">
                  <source src="/images/videos/hero.mp4" type="video/mp4" />
               </video>
            </div>
            <div className="w-full h-[20%] max-md:h-[10%] absolute top-0 left-0 bg-gradient-to-b from-green" />
            <div className="w-full h-[20%] max-md:h-[10%] absolute -bottom-1 left-0 bg-gradient-to-t from-green" />
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