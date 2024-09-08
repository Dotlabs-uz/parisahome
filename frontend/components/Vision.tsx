"use client"
import Image from 'next/image'
import React from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger)
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1')
const Vision = () => {
    useGSAP(() => {
        const titles = document.querySelectorAll(".vision-title")
        const tl = gsap.timeline({ defaults: { duration: 1 } })

        titles.forEach((title, index) => {
            const el = title.querySelectorAll("span")
            const delay = index * 0.08

            tl.to(el, {
                y: 0,
                duration: 1.5,
                ease: "cubic-text",
                stagger: 0.2,
                pin: true,
                scrollTrigger: {
                    trigger: ".vision-section",
                    start: "center bottom",
                    end: "center center",
                    scrub: true,
                    // markers: true
                }
            }, delay)
        })

        return () => { }
    }, []);

    return (
        <div className="custom-container vision-section h-screen flex items-center justify-center relative">
            <div className="w-96 max-md:w-80 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 select-none pointer-events-none">
                <Image
                    className='w-full h-full'
                    src={'/images/flower.svg'}
                    width={1000}
                    height={1000}
                    alt='img'
                />
            </div>

            <h2 className='text-white/50 text-4xl max-md:text-3xl max-sm:text-xl text-center max-w-[800px] vision-title'>
                <span className='-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                        «
                    </span>
                </span>
                <span className='-mb-1.5 -mt-6 mr-2 inline-block overflow-hidden align-bottom text-white'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                        Наше
                    </span>
                </span>
                <span className='-mb-1.5 -mt-6 mr-2 inline-block overflow-hidden align-bottom text-white'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                        видение
                    </span>
                </span>
                <span className='-mb-1.5 -mt-6 mr-2 inline-block overflow-hidden align-bottom'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                        —
                    </span>
                </span>
                <span className='-mb-1.5 -mt-6 mr-2 inline-block overflow-hidden align-bottom'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'> переосмыслить </span>
                </span>
                <span className='-mb-1.5 -mt-6 mr-2 inline-block overflow-hidden align-bottom'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                        потенциал
                    </span>
                </span>
                <span className='-mb-1.5 -mt-6 mr-2 inline-block overflow-hidden align-bottom'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                        промышленного
                    </span>
                </span>
                <span className='-mb-1.5 -mt-6 mr-2 inline-block overflow-hidden align-bottom'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                        сектора
                    </span>
                </span>
                <span className='-mb-1.5 -mt-6 mr-2 inline-block overflow-hidden align-bottom'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                        посредством
                    </span>
                </span>
                <span className='-mb-1.5 -mt-6 mr-2 inline-block overflow-hidden align-bottom text-white'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                        инноваций
                    </span>
                </span>
                <span className='-mb-1.5 -mt-6 mr-2 inline-block overflow-hidden align-bottom'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                        и
                    </span>
                </span>
                <span className='-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom text-white'>
                    <span className='inline-block translate-y-full pb-1.5 pt-6 will-change-transform'>
                        оптимизации».
                    </span>
                </span>
            </h2>
        </div>
    )
}

export default Vision
