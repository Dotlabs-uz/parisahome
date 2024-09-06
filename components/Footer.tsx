"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { SlArrowUp } from "react-icons/sl";

gsap.registerPlugin(ScrollTrigger)
const Footer = () => {
    // useGSAP(() => {
    //     const elems = gsap.utils.toArray(".footer-el")
    //     elems.forEach((el: any) => {
    //         gsap.from(el, {
    //             y: 30,
    //             opacity: 0,
    //             duration: 1,
    //             stagger: 0.2,
    //             scrollTrigger: {
    //                 trigger: ".footer-section",
    //                 start: "center bottom",
    //                 end: "center center",
    //                 scrub: 1,
    //                 markers: true
    //             }
    //         })
    //     })
    // }, [])

    return (
        <footer className='bg-black py-8 footer-section'>
            <div className="custom-container">
                <div className="flex pt-7 border-t-2 border-white text-white">
                    <div className="w-2/5 flex flex-col justify-between max-sm:hidden">
                        <div className='flex items-center gap-3 footer-el'>
                            <button className='p-4 rounded-lg bg-yellow'>
                                <SlArrowUp className='text-[16px]' />
                            </button>
                            <p className=''>НАЗАД К НАЧАЛУ</p>
                        </div>
                        <Image
                            className='w-56 max-md: my-48 max-lg:my-32 footer-el'
                            src={"/images/logo.svg"}
                            width={1000}
                            height={1000}
                            alt='logo'
                        />
                        <p className='footer-el'>Copyright © Parisa Home 2024.</p>
                    </div>

                    <div className="sm:w-3/5 flex flex-col justify-between max-sm:gap-7 relative">
                        <Image
                            className="w-96 max-lg:w-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none max-sm:hidden footer-el"
                            src={"/images/flower.svg"}
                            width={1000}
                            height={1000}
                            alt="img"
                        />
                        <div className='flex items-center gap-3 sm:hidden footer-el'>
                            <button className='p-4 max-sm:p-3 rounded-lg bg-yellow'>
                                <SlArrowUp className='text-[16px]' />
                            </button>
                            <p className='max-sm:text-xs'>НАЗАД К НАЧАЛУ</p>
                        </div>
                        <div className="flex max-sm:flex-col sm:items-center gap-4">
                            <label className='w-full footer-el'>
                                <p className='mb-1'>Ваш email</p>
                                <input
                                    className='bg-[#D9D9D966] placeholder:text-[#C6C3C4] text-[#C6C3C4] w-full py-0.5 px-3 border border-white'
                                    type="text"
                                    placeholder='Напишите свой email adress'
                                />
                            </label>
                            <button className='bg-yellow max-sm:w-fit mt-auto py-2 max-lg:py-1 px-10 max-lg:px-7 text-xl max-lg:text-lg font-medium rounded-full footer-el'>Отправить</button>
                        </div>

                        <ul className='grid gap-x-28 gap-y-2 grid-cols-2 sm:hidden'>
                            {
                                [0, 1, 2, 3, 4, 5, 6].map((i: number) => (
                                    <li key={i} className='text-sm font-medium w-fit footer-el'>
                                        <Link href={"#"}>
                                            Главная
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <Image
                            className='w-56 mx-auto sm:hidden footer-el'
                            src={"/images/logo.svg"}
                            width={1000}
                            height={1000}
                            alt='logo'
                        />

                        <div className="">
                            <h2 className='text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl max-sm:text-center mb-7 max-sm:mb-3 footer-el'>Мы всегда ищем новые партнерства и варианты</h2>
                            <button className='bg-yellow max-sm:text-sm font-medium py-3 max-lg:py-2 px-10 max-lg:px-7 rounded-lg max-sm:mx-auto flex footer-el'>СВЯЗАТЬСЯ С НАМИ</button>
                        </div>

                        <ul className='w-fit grid gap-x-28 gap-y-2 grid-cols-2 ml-auto max-sm:hidden'>
                            {
                                [0, 1, 2, 3, 4, 5, 6].map((i: number) => (
                                    <li key={i} className='text-sm font-medium footer-el'>
                                        <Link href={"#"}>
                                            Главная
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex items-center justify-between max-sm:justify-center">
                            <p className='max-sm:hidden footer-el'>Privacy Policy</p>
                            <p className='max-sm:hidden footer-el'>All Rights Reserved.</p>
                            <p className='sm:hidden text-center footer-el'>Copyright © Parisa Home 2024.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer