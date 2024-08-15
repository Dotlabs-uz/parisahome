"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger);
const AboutСompany = () => {
    const main = useRef(null);

    useGSAP(() => {
        const texts = gsap.utils.toArray('.text');
        texts.forEach((text: any) => {
            gsap.from(text, {
                x: 100,
                ease: "none",
                duration: 2,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: text,
                    // containerAnimation: ".text",
                    start: 'bottom bottom',
                    end: 'top 50%',
                    scrub: true,
                    // markers: true
                }
            });
        })
    }, { scope: main })

    return (
        <div className="about-company custom-container flex max-lg:flex-col gap-10 justify-between max-lg:items-center pt-32 max-md:pt-12 pb-20 max-md:pb-10 text-white">
            <div className="h-fit">
                <div className="max-w-sm max-lg:w-80 max-lg:h-[300px] relative">
                    <div className="absolute -z-10 top-3 -right-3 max-sm:-right-2 max-sm:top-2 w-full h-full rounded-md bg-white/30 border border-white"></div>
                    <Image
                        className='w-full h-full object-cover rounded-md hover:translate-x-3 hover:translate-y-3 duration-500 ease-in-out'
                        src={"/images/image.png"}
                        width={1000}
                        height={1000}
                        alt='img'
                    />
                </div>
            </div>

            <div ref={main} className="flex flex-col gap-12 max-xl:gap-7 max-w-xl max-xl:max-w-none w-fit">
                <div className="flex gap-32 max-xl:gap-10 max-lg:gap-5 items-start justify-between text">
                    <div className="max-md:hidden">
                        <p className='text-4xl font-medium underline underline-offset-4'>01</p>
                    </div>
                    <div className="lg:max-w-[417px]">
                        <div className="flex gap-4 max-md:mb-2">
                            <p className='text-4xl font-medium underline underline-offset-4 md:hidden'>01</p>
                            <h2 className='text-3xl max-xl:text-2xl md:mb-2'>Ориентированный на производительность</h2>
                        </div>
                        <p className='text-sm leading-[23.8px]'>
                            Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией
                        </p>
                    </div>
                </div>
                <div className="flex gap-32 max-xl:gap-10 max-lg:gap-5 items-start justify-between text">
                    <div className="max-md:hidden">
                        <p className='text-4xl font-medium underline underline-offset-4'>02</p>
                    </div>
                    <div className="lg:max-w-[417px]">
                        <div className="flex gap-4 max-md:mb-2">
                            <p className='text-4xl font-medium underline underline-offset-4 md:hidden'>02</p>
                            <h2 className='text-3xl max-xl:text-2xl md:mb-2'>Ориентированных на клиента</h2>
                        </div>
                        <p className='text-sm leading-[23.8px]'>
                            Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией
                        </p>
                    </div>
                </div>
                <div className="flex gap-32 max-xl:gap-10 max-lg:gap-5 items-start justify-between text">
                    <div className="max-md:hidden">
                        <p className='text-4xl font-medium underline underline-offset-8'>03</p>
                    </div>
                    <div className="lg:max-w-[417px]">
                        <div className="flex gap-4 max-md:mb-2">
                            <p className='text-4xl font-medium underline underline-offset-8 md:hidden'>03</p>
                            <h2 className='text-3xl max-xl:text-2xl md:mb-2'>Инновационный</h2>
                        </div>
                        <p className='text-sm leading-[23.8px]'>
                            Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutСompany
