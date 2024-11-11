import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/i18n.config";
import GoogleRecaptchaWrapper from "./GoogleRecaptchaWrapper";
import { getDictionary } from "@/lib/dictionary";
import Head from "next/head";

const inter = Raleway({
   weight: ["300", "400", "500", "600", '800'],
   subsets: ["latin"],
   style: ['normal'],
   display: 'swap',
});

export const metadata: Record<string, Metadata> = {
   ru: {
      title: {
         "default": "Parisa Home",
         "template": "%s - Parisa Home"
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
               "url": "/images/icon.ico",
               "width": 800,
               "height": 600,
               "alt": "Parisa Home"
            }
         ],
         locale: "ru_RU",
         type: "website"
      }
   },
   en: {
      title: {
         "default": "Parisa Home",
         "template": "%s - Parisa Home"
      },
      category: "Textiles for home, Towels, Home comfort, Hotel supplies, Spa products",
      description: "Parisa Home is a leading supplier of high-quality towels. We offer a wide range of soft and stylish towels for home, hotel, or spa. Your comfort and style are our priority.",
      keywords: [
         "Home towels", "Wholesale terry towels", "100% cotton towels", "Soft towels",
         "Eco-friendly towels", "Embroidered towels by order", "Hotel towels", "Spa towels",
         "Towels from Uzbekistan", "Wholesale towel sales", "Towel manufacturing in Uzbekistan",
         "Hotel towels", "Towel supplies to Russia and CIS"
      ],
      openGraph: {
         title: "Parisa Home",
         description: "Parisa Home is a leading supplier of high-quality towels. We offer a wide range of soft and stylish towels for home, hotel, or spa. Your comfort and style are our priority.",
         url: `https://new.parisahome.com`,
         siteName: "new.parisahome.com",
         images: [
            {
               "url": "/images/icon.ico",
               "width": 800,
               "height": 600,
               "alt": "Parisa Home"
            }
         ],
         locale: "en_US",
         type: "website"
      }
   },
   uz: {
      title: {
         "default": "Parisa Home",
         "template": "%s - Parisa Home"
      },
      category: "Uy matolari, Sochiqlar, Uy qulayligi, Mehmonxona jihozlari, SPA mahsulotlari",
      description: "Parisa Home sifatli sochiqlarning yetakchi yetkazib beruvchisidir. Uy, mehmonxona yoki spa uchun yumshoq va zamonaviy sochiqlarni taklif etamiz. Sizning qulayligingiz va uslubingiz – bizning g'amxo'rligimiz.",
      keywords: [
         "Uy sochiqlari", "Optom maxro sochiqlar", "100% paxta sochiqlar", "Yumshoq sochiqlar",
         "Ekologik sochiqlar", "Buyurtma asosida tikilgan sochiqlar", "Mehmonxona sochiqlari", "SPA sochiqlari",
         "O'zbekistondan sochiqlar", "Optom sochiqlar savdosi", "O'zbekistonda sochiqlar ishlab chiqarish",
         "Mehmonxona sochiqlari", "Rossiya va MDH mamlakatlariga sochiqlar yetkazib berish"
      ],
      openGraph: {
         title: "Parisa Home",
         description: "Parisa Home sifatli sochiqlarning yetakchi yetkazib beruvchisidir. Uy, mehmonxona yoki spa uchun yumshoq va zamonaviy sochiqlarni taklif etamiz. Sizning qulayligingiz va uslubingiz – bizning g'amxo'rligimiz.",
         url: `https://new.parisahome.com`,
         siteName: "new.parisahome.com",
         images: [
            {
               "url": "/images/icon.ico",
               "width": 800,
               "height": 600,
               "alt": "Parisa Home"
            }
         ],
         locale: "uz_UZ",
         type: "website"
      }
   },
   jp: {
      title: {
         "default": "Parisa Home",
         "template": "%s - Parisa Home"
      },
      category: "家庭用テキスタイル, タオル, 家庭の快適さ, ホテル用品, スパ商品",
      description: "Parisa Homeは高品質なタオルの主要な供給者です。家庭用、ホテル用、またはスパ用の柔らかくてスタイリッシュなタオルを幅広く提供しています。あなたの快適さとスタイルは私たちの優先事項です。",
      keywords: [
         "家庭用タオル", "業務用タオル", "100%綿タオル", "柔らかいタオル",
         "エコフレンドリータオル", "刺繍タオルのオーダー", "ホテル用タオル", "スパ用タオル",
         "ウズベキスタン製タオル", "業務用タオル販売", "ウズベキスタン製タオル製造",
         "ホテル用タオル", "ロシアおよびCIS諸国へのタオル供給"
      ],
      openGraph: {
         title: "Parisa Home",
         description: "Parisa Homeは高品質なタオルの主要な供給者です。家庭用、ホテル用、またはスパ用の柔らかくてスタイリッシュなタオルを幅広く提供しています。あなたの快適さとスタイルは私たちの優先事項です。",
         url: `https://new.parisahome.com`,
         siteName: "new.parisahome.com",
         images: [
            {
               "url": "/images/icon.ico",
               "width": 800,
               "height": 600,
               "alt": "Parisa Home"
            }
         ],
         locale: "ja_JP",
         type: "website"
      }
   }
};

export default async function RootLayout({
   params: { lang },
   children,
}: Readonly<{
   children: React.ReactNode;
   params: { lang: Locale }
}>) {
   const { footer, nav, metadata } = await getDictionary(lang);

   return (
      <html lang={lang}>
         <body className={inter.className}>
            <Head>
               <meta name="description" content={metadata.description} />
               <meta name="keywords" content={metadata.keywords.join(', ')} />
               <meta property="og:title" content={metadata.openGraph.title} />
               <meta property="og:description" content={metadata.openGraph.description} />
               <meta property="og:url" content={metadata.openGraph.url} />
               <meta property="og:site_name" content={"new.parisahome.com"} />
               <meta property="og:image" content={metadata.openGraph.images[0].url} />
               <meta property="og:image:secure_url" content={"/images/icon.ico"} />
               <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
               <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
               <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
               <meta property="og:type" content={metadata.openGraph.type} />
            </Head>

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
