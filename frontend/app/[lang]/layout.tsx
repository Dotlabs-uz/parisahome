import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/i18n.config";
import GoogleRecaptchaWrapper from "./GoogleRecaptchaWrapper";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";

const raleway = Raleway({
   weight: ["300", "400", "500", "600", '800'],
   subsets: ["latin"],
   style: ['normal'],
   display: 'swap',
});

export const metadata: Metadata = {
   title: {
      default: "Parisa Home",
      template: "%s - Parisa Home"
   },
   category: "Текстиль для дома, Полотенца, Домашний комфорт, Отельные принадлежности, Спа товары",
   description: "Parisa Home – ведущий поставщик качественных полотенец. Предлагаем широкий ассортимент мягких и стильных полотенец для дома, отеля или спа. Ваш комфорт и стиль – наша забота.",
   keywords: [
      "Полотенца для дома", "Махровые полотенца оптом", "Полотенца из 100% хлопка", "Мягкие полотенца",
      "Экологичные полотенца", "Полотенца с вышивкой на заказ", "Полотенца для гостиниц", "Полотенца для SPA",
      "Полотенца из Узбекистана", "Оптовая продажа полотенец", "Производство полотенец в Узбекистане",
      "Полотенца для отелей", "Поставки полотенец в Россию и СНГ"
   ],
   openGraph: {
      title: "Parisa Home",
      description: "Parisa Home – ведущий поставщик качественных полотенец. Предлагаем широкий ассортимент мягких и стильных полотенец для дома, отеля или спа. Ваш комфорт и стиль – наша забота.",
      url: `https://new.parisahome.com`,
      siteName: "new.parisahome.com",
      images: [
         {
            url: "/images/logo.ico",
            width: 800,
            height: 600,
            alt: "Parisa Home"
         }
      ],
      locale: "ru_RU",
      type: "website"
   }
};

export default async function RootLayout({
   params: { lang },
   children,
}: Readonly<{
   children: React.ReactNode;
   params: { lang: Locale }
}>) {
   const { footer, nav } = await getDictionary(lang);

   return (
      <html lang={lang}>
         <body className={raleway.className}>
            <GoogleRecaptchaWrapper>
               <Header lang={lang} nav={nav} />
               <main>
                  {children}
               </main>
               <Footer footer={footer} nav={nav} />
            </GoogleRecaptchaWrapper>
         </body>
      </html>
   );
}
