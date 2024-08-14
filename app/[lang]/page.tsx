import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Hero from "@/components/Hero";
import { LuArrowUpRight } from "react-icons/lu";
import Products from "@/components/Products";
import Accordions from "@/components/Accordions";
import { TfiEmail } from "react-icons/tfi";


const Home = async ({ params: { lang } }: { params: { lang: Locale }; }) => {
   const { homepage } = await getDictionary(lang);

   return (
      <>
         <section>
            <Hero />
         </section>

         <section>
            <div className="custom-container py-10">
               <div className="text-white">
                  <div className="relative">
                     <Image
                        className="w-[280px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none max-sm:hidden"
                        src={"/images/flower.svg"}
                        width={1000}
                        height={1000}
                        alt="img"
                     />
                     <div className="flex items-center justify-between mb-10">
                        <div className="w-full flex max-sm:flex-col sm:items-center justify-between gap-3">
                           <h2 className="text-3xl max-sm:text-xl text-yellow">\\ТЕХНОЛОГИИ</h2>
                           <button className="w-fit text-sm max-sm:text-xs py-3 max-sm:py-2 px-8 max-sm:px-5 rounded-full border border-yellow">О КОМПАНИИ</button>
                        </div>
                        <div className="sm:hidden">
                           <Image
                              className="w-40 select-none pointer-events-none"
                              src={"/images/flower.svg"}
                              width={1000}
                              height={1000}
                              alt="img"
                           />
                        </div>
                     </div>
                     <div className="flex max-md:flex-col md:items-center md:justify-end gap-10 max-md:gap-2">
                        <h2 className="max-w-md text-3xl max-lg:text-2xl max-sm:text-xl font-extrabold">Бренд идущий по пути технологических инноваций</h2>
                        <p className="max-w-sm text-sm md:text-end leading-6">Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией </p>
                     </div>
                  </div>

                  <div className="grid grid-cols-3 max-md:grid-cols-2 max-xs:grid-cols-1 gap-5 mt-8">
                     {
                        [0, 1, 2].map((i: number) => (
                           <div key={i} className="border-b-4 border-green hover:border-white max-sm:border-white duration-150 ease-in">
                              <div className="">
                                 <Image
                                    src={"/images/towels.png"}
                                    width={1000}
                                    height={1000}
                                    alt="img"
                                 />
                              </div>
                              <div className="mt-8 max-md:mt-3 px-4 max-sm:px-3">
                                 <h3 className="text-2xl text-center">Особенная технология</h3>
                                 <p className="text-base leading-6 my-5 max-md:my-2">Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные </p>
                              </div>
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-white">
            <div className="custom-container py-28 max-md:py-20 max-sm:py-10">
               <div className="flex max-sm:flex-col sm:items-center justify-between mb-12 max-md:mb-7 max-sm:mb-2">
                  <h2 className="text-yellow text-3xl max-sm:text-xl uppercase">\\МЫ в ЦИФРАХ</h2>
                  <p className="text-green text-lg">Innovative, efficient, and reliable</p>
               </div>

               <div className="flex max-sm:flex-col sm:items-center sm:justify-between gap-1">
                  <div className="w-fit px-4 py-5  border-l-2 border-yellow">
                     <p className="text-green text-5xl font-extrabold mb-2">28K+</p>
                     <p className="text-green text-lg">Completed Works</p>
                  </div>
                  <div className="w-fit px-4 py-5 max-sm:ml-auto border-l-2 border-yellow">
                     <p className="text-green text-5xl font-extrabold mb-2">550+</p>
                     <p className="text-green text-lg">Team Members</p>
                  </div>
                  <div className="w-fit px-4 py-5 border-l-2 border-yellow">
                     <p className="text-green text-5xl font-extrabold mb-2">13</p>
                     <p className="text-green text-lg">Years of Experience</p>
                  </div>
                  <div className="w-fit px-4 py-5 max-sm:ml-auto border-l-2 border-yellow">
                     <p className="text-green text-5xl font-extrabold mb-2">99%</p>
                     <p className="text-green text-lg">Satisfied Customers</p>
                  </div>
               </div>

               <div className="flex items-center m-auto w-fit mt-16">
                  <LuArrowUpRight className="text-[38px] text-[#00EB8D]" />
                  <p className="text-3xl max-sm:text-xl text-green">86% эффективности продаж</p>
               </div>
            </div>
         </section>

         <section className="bg-white">
            <div className="custom-container">
               <div className="max-w-xl m-auto mb-16 max-md:mb-10">
                  <h2 className="text-2xl max-sm:text-xl font-extrabold text-center text-yellow">Наши партнёры  выбирают нас за непревзойденное качество</h2>
               </div>

               <div className="grid grid-cols-4 max-lg:grid-cols-2 max-xs:grid-cols-1 gap-10 max-sm:gap-7">
                  <div className="flex flex-col items-center gap-5">
                     <div className="">
                        <Image
                           className="w-[160px]"
                           src={"/images/partners/partner-1.svg"}
                           width={1000}
                           height={1000}
                           alt="logo"
                        />
                     </div>
                     <div className="">
                        <p className="text-center text-sm leading-6">
                           <span className="text-yellow">1Password</span> Мы заботимся о
                           древесинеи тщательно следим за всем
                           производственным процессом.
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col items-center gap-5">
                     <div className="">
                        <Image
                           className="w-[150px]"
                           src={"/images/partners/partner-2.svg"}
                           width={1000}
                           height={1000}
                           alt="logo"
                        />
                     </div>
                     <div className="">
                        <p className="text-center text-sm leading-6">
                           <span className="text-yellow">Motive </span> - итальянский
                           производитель древесины, крупнейший
                           лидер рынка в Европе.
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col items-center gap-5">
                     <div className="">
                        <Image
                           className="w-[110px]"
                           src={"/images/partners/partner-3.svg"}
                           width={1000}
                           height={1000}
                           alt="logo"
                        />
                     </div>
                     <div className="">
                        <p className="text-center text-sm leading-6">
                           <span className="text-yellow">Brex </span> создаёт уникальную
                           итальянскую мебель ручной работы,
                           как продолж ение вашего интерьера.
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col items-center gap-5">
                     <div className="">
                        <Image
                           className="w-[110px]"
                           src={"/images/partners/partner-4.svg"}
                           width={1000}
                           height={1000}
                           alt="logo"
                        />
                     </div>
                     <div className="">
                        <p className="text-center text-sm leading-6">
                           <span className="text-yellow">Univision </span> воспроизводит
                           мебель ушедших эпох: ампир, барокко, рококо и многие другие.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-white">
            <Products />
         </section>

         <section className="bg-white">
            <div className="custom-container py-20">
               <div className="py-7 border-y-2 border-green">
                  <h2 className="text-3xl max-sm:text-xl text-center text-yellow">\\НАША ГАЛЕРЕЯ</h2>
               </div>

               <div className="grid grid-cols-3 gap-3 px-40 my-7">
                  {
                     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i: number) => (
                        <div key={i} className="">
                           <Image
                              className="w-full h-full"
                              src={"/images/img.png"}
                              width={1000}
                              height={1000}
                              alt="img"
                           />
                        </div>
                     ))
                  }
               </div>

               <button className="bg-yellow text-white font-medium py-3 px-9 mx-auto flex rounded-lg">СМОТРЕТЬ ГАЛЕРЕЮ</button>
            </div>
         </section>

         <section className="bg-milky py-10">
            <div className="custom-container">
               <div className="py-20 max-md:py-10 max-sm:py-5 rounded-3xl shadow-md bg-white">
                  <div className="mb-11 max-md:mb-5 px-4">
                     <h2 className="text-yellow text-4xl max-lg:text-3xl max-sm:text-2xl sm:text-center">\\Часто задаваемые вопросы</h2>
                  </div>

                  <div className="">
                     <Accordions />
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="bg-white my-10 overflow-hidden">
               <div className="custom-container flex max-md:flex-col gap-16 max-lg:gap-5 py-20">
                  <div className="md:max-w-md w-full ">
                     <div className="text-black mb-5 max-sm:text-center">
                        <h2 className="text-3xl max-sm:text-2xl font-semibold">Остались вопросы?</h2>
                        <p className="text-xl max-md:text-lg max-sm:text-base">Заполните форму и мы с вами свяжемся</p>
                     </div>
                     <form>
                        <label className="w-full mb-3 max-sm:mb-2 block">
                           <p className="mb-1">Ваше имя</p>
                           <input
                              className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                              type="text"
                              placeholder="напишите свое имя здесь"
                           />
                        </label>
                        <label className="w-full mb-3 max-sm:mb-2 block">
                           <p className="mb-1">Ваш телефон</p>
                           <input
                              className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                              type="text"
                              placeholder="Напишите свой телефон"
                           />
                        </label>
                        <label className="w-full mb-3 max-sm:mb-2 block">
                           <p className="mb-1">Ваш email</p>
                           <input
                              className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                              type="text"
                              placeholder="Ваш email"
                           />
                        </label>
                        <label className="w-full mb-9 max-md:mb-5 block">
                           <p className="mb-1">Ваш комментарий</p>
                           <input
                              className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                              type="text"
                              placeholder="Напишите свой комментарий"
                           />
                        </label>
                        <button className="bg-yellow text-white text-xl max-sm:text-base font-medium py-3 max-md:py-1.5 px-10 max-md:px-7 max-sm:px-4 rounded-full">Отправить</button>
                     </form>
                  </div>

                  <div className="w-full h-52 relative">
                     <div className="">
                        <h2 className="text-3xl max-md:text-2xl font-semibold">Oставайтесь на связи</h2>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg"><TfiEmail className="text-[18px] max-sm:text-[15px]" /> Parisa_home@gamil.com</p>
                     </div>

                     <div className="m-auto h-full flex items-center justify-center max-md:absolute -top-5 -right-10 select-none pointer-events-none">
                        <Image
                           className="w-72 max-md:w-96"
                           src={"/images/flower-gary.svg"}
                           width={1000}
                           height={1000}
                           alt="img"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Home