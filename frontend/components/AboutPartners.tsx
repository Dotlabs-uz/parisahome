"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)
const AboutPartners = () => {
    useGSAP(() => {
        const elems = gsap.utils.toArray(".about-partner")
        elems.forEach((el: any) => {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: "center bottom",
                    end: "center 80%",
                    // scrub: 1,
                    // markers: true
                }
            })
        })
    })

    return (
        <div className="custom-container flex gap-24 max-xl:gap-10 justify-between py-20 about-partner-section">
            <div className="flex flex-col items-center justify-between pt-10 pb-20 max-md:hidden">
                <h2 className='text-[56px] max-xl:text-4xl text-white about-partner'>ПАРТНЕРЫ</h2>

                <Image
                    className='w-28 max-lg:w-20 about-partner'
                    src={"/images/parisahome-gray.svg"}
                    width={1000}
                    height={1000}
                    alt='img'
                />

                <Image
                    className='w-72 about-partner'
                    src={"/images/flower.svg"}
                    width={1000}
                    height={1000}
                    alt='img'
                />
            </div>
            <div className="max-w-2xl">
                <div className="mb-8 md:hidden">
                    <h2 className='text-3xl text-white about-partner'>ПАРТНЕРЫ</h2>
                </div>
                <div className="grid grid-cols-2 gap-x-5 gap-y-10 max-lg:gap-5 px-10 max-xl:px-0 mb-20 max-lg:mb-10 max-md:px-10 max-sm:px-0">
                    <div className="about-partner">
                        <div className="flex items-center justify-center py-32 max-xl:py-28 max-lg:py-24 max-sm:py-16 mb-7 max-lg:mb-5 rounded-md border border-white">
                            <Image
                                className='w-40 max-md:w-32 max-xs:w-28 text-white'
                                src={"/images/partners/partner-white-1.svg"}
                                width={1000}
                                height={1000}
                                alt='partner'
                            />
                        </div>
                        <div className="">
                            <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ОООSam Rafoat Textile. В начале эта компания начала производить плющ.</p>
                        </div>
                    </div>
                    <div className="about-partner">
                        <div className="flex items-center justify-center py-32 max-xl:py-28 max-lg:py-24 max-sm:py-16 mb-7 max-lg:mb-5 rounded-md border border-white">
                            <Image
                                className='w-40 max-md:w-32 max-xs:w-28 text-white'
                                src={"/images/partners/partner-white-1.svg"}
                                width={1000}
                                height={1000}
                                alt='partner'
                            />
                        </div>
                        <div className="">
                            <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ.</p>
                        </div>
                    </div>
                    <div className="about-partner">
                        <div className="flex items-center justify-center py-32 max-xl:py-28 max-lg:py-24 max-sm:py-16 mb-7 max-lg:mb-5 rounded-md border border-white">
                            <Image
                                className='w-40 max-md:w-32 max-xs:w-28 text-white'
                                src={"/images/partners/partner-white-1.svg"}
                                width={1000}
                                height={1000}
                                alt='partner'
                            />
                        </div>
                        <div className="">
                            <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ.</p>
                        </div>
                    </div>
                    <div className="about-partner">
                        <div className="flex items-center justify-center py-32 max-xl:py-28 max-lg:py-24 max-sm:py-16 mb-7 max-lg:mb-5 rounded-md border border-white">
                            <Image
                                className='w-40 max-md:w-32 max-xs:w-28 text-white'
                                src={"/images/partners/partner-white-1.svg"}
                                width={1000}
                                height={1000}
                                alt='partner'
                            />
                        </div>
                        <div className="">
                            <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-14 md:hidden flex items-center justify-between">
                    <Image
                        className='w-48 about-partner'
                        src={"/images/flower.svg"}
                        width={1000}
                        height={1000}
                        alt='img'
                    />

                    <Image
                        className='w-14 about-partner'
                        src={"/images/parisahome-gray.svg"}
                        width={1000}
                        height={1000}
                        alt='img'
                    />
                </div>
                <div className="py-7 max-md:py-5 border-t-4 border-white">
                    <p className='text-4xl max-xl:text-3xl max-lg:text-2xl max-lg:leading-6 max-sm:text-center mb-7 max-md:mb-5 text-white about-partner'>Мы всегда ищем новые партнерства и варианты сотрудничества!</p>
                    <button className='max-sm:text-xs font-medium py-3 max-md:py-2 px-10 max-md:px-7 max-md:m-auto flex rounded-lg text-white bg-yellow about-partner'>СВЯЗАТЬСЯ С НАМИ</button>
                </div>
            </div>
        </div>
    )
}

export default AboutPartners
