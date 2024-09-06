"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {
    const links = [
        { link: "/", title: "Home" },
        { link: "/about-us", title: "О нас" },
        { link: "/catalog", title: "Каталог" },
        { link: "/events", title: "События" },
        { link: "/vacancies", title: "Вакансии" },
        { link: "/equipment", title: "Оборудование" },
        { link: "/contacts", title: "Контакты" },
    ]

    useGSAP(() => {
        gsap.from(".header", {
            y: -30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
        })
    })

    return (
        <header className='md:border-b md:border-white/40'>
            <div className="custom-container flex items-center justify-between py-3">
                <Link href={`/`} className="header">
                    <Image
                        className='w-24 max-lg:w-20 max-md:w-16 '
                        src={"/images/logo.svg"}
                        width={1000}
                        height={1000}
                        alt='logo'
                    />
                </Link>

                <nav className='max-md:hidden'>
                    <ul className='flex items-center gap-5 max-lg:gap-3'>
                        {
                            links.map((i: { link: string, title: string }, idx: number) => (
                                <li key={idx} className='text-sm font-medium text-white header'>
                                    <Link href={i.link}>{i.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="flex gap-5">
                    <div className="flex items-center gap-3 max-lg:gap-1 text-white header">
                        <p className='text-xs font-medium uppercase cursor-pointer'>en</p>
                        <span className='block h-4 w-[1px] bg-white' />
                        <p className='text-xs font-medium uppercase cursor-pointer'>ru</p>
                    </div>
                    <button className='md:hidden header'>
                        <IoMenu className='text-[24px] text-white' />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
