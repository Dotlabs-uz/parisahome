import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Locale } from "@/i18n.config";
import GoogleRecaptchaWrapper from "./GoogleRecaptchaWrapper";

const inter = Raleway({
   weight: ["300", "400", "500", "600", '800'],
   subsets: ["latin"],
   style: ['normal'],
   display: 'swap',
});

export const metadata = {
   title: {
      default: "Parisa Home",
      template: "%s - Parisa Home"
   },
   category: 'Текстиль для дома, Полотенца, Домашний комфорт, Отельные принадлежности, Спа товары',
   description: "Parisahome – ведущий поставщик качественных полотенец. Предлагаем широкий ассортимент мягких и стильных полотенец для дома, отеля или спа. Ваш комфорт и стиль – наша забота.",
   openGraph: {
      title: 'Parisa Home',
      description: 'Parisahome – ведущий поставщик качественных полотенец. Предлагаем широкий ассортимент мягких и стильных полотенец для дома, отеля или спа. Ваш комфорт и стиль – наша забота.',
      url: 'https://parisahome.com',
      siteName: 'parisahome.com',
      images: [
         {
            url: '/images/icon.ico',
            width: 800,
            height: 600,
            alt: "Parisa Home"
         }
      ],
      locale: 'en_US',
      type: 'website',
   },
};

export default function RootLayout({
   params: { lang },
   children,
}: Readonly<{
   children: React.ReactNode;
   params: { lang: Locale }
}>) {
   return (
      <html lang="en">
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            <meta property="og:title" content="Parisa Home" />
            <meta property="og:description" content="Parisahome – ведущий поставщик качественных полотенец. Предлагаем широкий ассортимент мягких и стильных полотенец для дома, отеля или спа. Ваш комфорт и стиль – наша забота." />
            <meta property="og:url" content="https://parisahome.com" />
            <meta property="og:site_name" content="parisahome.com" />
            <meta property="og:image" content="/images/icon.ico" />
            <meta property="og:image:secure_url" content="/images/icon.ico" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="parisahome" />
            <meta property="og:type" content="website" />
         </Head>

         <body className={inter.className}>
            <GoogleRecaptchaWrapper>
               <Header lang={lang} />
               <main>
                  {children}
               </main>
               <Footer />
            </GoogleRecaptchaWrapper>
         </body>
      </html>
   );
}
