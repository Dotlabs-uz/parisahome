"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { SlArrowUp } from "react-icons/sl";

const Footer = () => {
    const links = [
        { link: "/en", title: "Home" },
        { link: "/en/about-us", title: "О нас" },
        { link: "/en/catalog", title: "Каталог" },
        { link: "/en/contacts", title: "Контакты" },
        { link: "/en/machineries", title: "Станки" },
        { link: "/en/certificates", title: "Сертификаты" },
    ];
    const { lang } = useParams()
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className='bg-black py-8 footer-section'>
            <div className="custom-container">
                <div className="flex pt-7 border-t-2 border-white text-white">
                    <div className="w-2/5 flex flex-col justify-between max-sm:hidden">
                        <div className='flex items-center gap-3 '>
                            <button onClick={scrollToTop} className='p-4 rounded-lg bg-yellow'>
                                <SlArrowUp className='text-[16px]' />
                            </button>
                            <p className=''>НАЗАД К НАЧАЛУ</p>
                        </div>
                        <Image
                            className='w-56 max-md: my-48 max-lg:my-32 '
                            src={"/images/logo.svg"}
                            width={1000}
                            height={1000}
                            alt='logo'
                        />
                        <p className=''>Copyright © Parisa Home 2024.</p>
                    </div>

                    <div className="sm:w-3/5 flex flex-col justify-between max-sm:gap-7 relative">
                        <Image
                            className="w-96 max-lg:w-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none max-sm:hidden "
                            src={"/images/flower.svg"}
                            width={1000}
                            height={1000}
                            alt="img"
                        />
                        <div className='flex items-center gap-3 sm:hidden '>
                            <button onClick={scrollToTop} className='p-4 max-sm:p-3 rounded-lg bg-yellow'>
                                <SlArrowUp className='text-[16px]' />
                            </button>
                            <p className='max-sm:text-xs'>НАЗАД К НАЧАЛУ</p>
                        </div>

                        <ul className='grid gap-x-28 gap-y-2 grid-cols-2 sm:hidden'>
                            {
                                links.map((i: any, idx: number) => (
                                    <li key={idx} className='text-sm font-medium '>
                                        <Link href={`/${lang}/${i.link}`}>
                                            {i.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <Image
                            className='w-56 mx-auto sm:hidden '
                            src={"/images/logo.svg"}
                            width={1000}
                            height={1000}
                            alt='logo'
                        />

                        <div className="">
                            <h2 className='text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl max-sm:text-center mb-7 max-sm:mb-3 '>Мы всегда ищем новые партнерства и варианты</h2>
                            <Link href={`/${lang}/contacts`} className='bg-yellow w-fit m-auto max-sm:text-sm font-medium py-3 max-lg:py-2 px-10 max-lg:px-7 rounded-lg max-sm:mx-auto flex '>СВЯЗАТЬСЯ С НАМИ</Link>
                        </div>

                        <ul className='w-fit grid gap-x-28 gap-y-2 grid-cols-2 ml-auto max-sm:hidden m-auto'>
                            {
                                links.map((i: any, idx: number) => (
                                    <li key={idx} className='text-xl font-medium'>
                                        <Link href={i.link}>
                                            {i.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className="flex items-center justify-between max-sm:justify-center">
                            <p className='max-sm:hidden '>Privacy Policy</p>
                            <p className='max-sm:hidden '>All Rights Reserved.</p>
                            <p className='sm:hidden text-center '>Copyright © Parisa Home 2024.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer