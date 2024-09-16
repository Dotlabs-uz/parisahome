"use client"
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase)
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1')
const Hero = () => {

    useGSAP(() => {
        const titles = document.querySelectorAll(".h_title")
        const tl = gsap.timeline({ defaults: { duration: 1 } })

        titles.forEach((title, index) => {
            const el = title.querySelectorAll("span span")
            const delay = index * 0.08

            tl.to(el, {
                y: 0,
                duration: 1.5,
                ease: "cubic-text",
                // stagger: 0.08
            }, delay)
        })

        return () => { }
    }, []);

    return (
        <Swiper
            className='h-[90vh] max-sm:h-[85vh]'
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true, }}
            effect={'fade'}
            loop
        >
            {
                [0, 1, 2].map((i: number) => (
                    <SwiperSlide key={i}>
                        <div className="h-full relative flex flex-col gap-5 items-center justify-center text-white">
                            <Image
                                className='w-full h-full absolute z-[-1] top-0 left-0 object-cover'
                                src={"/images/hero-img.png"}
                                width={1000}
                                height={1000}
                                alt='img'
                            />

                            <h1 className='h_title text-9xl max-lg:text-8xl text-center max-lg:leading-[75px]'>
                                <span className='-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom'>
                                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                                        Parisa&nbsp;
                                    </span>
                                </span>
                                <span className='-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom'>
                                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                                        Home
                                    </span>
                                </span>
                            </h1>
                            <h2 className='h_title text-4xl max-lg:text-3xl text-center'>
                                <span className='-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom'>
                                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                                        Полотенца,&nbsp;
                                    </span>
                                </span>
                                <span className='-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom'>
                                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                                        которые&nbsp;
                                    </span>
                                </span>
                                <span className='-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom'>
                                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                                        впечатляют!
                                    </span>
                                </span>
                            </h2>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default Hero
