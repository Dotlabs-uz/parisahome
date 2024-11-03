"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { animateElementsOnScroll } from '@/lib/animations'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const AboutPartners = () => {
    const { lang } = useParams()
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (section) {
            const elements = section.querySelectorAll('.anim-element')
            animateElementsOnScroll(elements)
        }
    }, [])

    return (
        <section ref={sectionRef}>
            <div className="custom-container flex gap-24 max-xl:gap-10 justify-between py-20 anim-element-section">
                <div className="flex flex-col items-center justify-between pt-10 pb-20 max-md:hidden">
                    <h2 className='text-[56px] max-xl:text-4xl text-white anim-element'>ПАРТНЕРЫ</h2>

                    <Image
                        className='w-28 max-lg:w-20 anim-element'
                        src={"/images/parisahome-gray.svg"}
                        width={1000}
                        height={1000}
                        alt='img'
                    />

                    <Image
                        className='w-72 anim-element'
                        src={"/images/flower.svg"}
                        width={1000}
                        height={1000}
                        alt='img'
                    />
                </div>
                <div className="max-w-2xl">
                    <div className="mb-8 md:hidden">
                        <h2 className='text-3xl text-white anim-element'>ПАРТНЕРЫ</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-10 max-lg:gap-5 px-10 max-xl:px-0 mb-20 max-lg:mb-10 max-md:px-10 max-sm:px-0">
                        <div className="anim-element">
                            <div className="flex items-center justify-center h-72 max-xl:h-60 max-lg:h-56 max-sm:h-48 mb-7 max-lg:mb-5 rounded-md border border-white">
                                <Image
                                    className='w-40 max-md:w-32 max-xs:w-28 img-black text-white'
                                    src={"/images/partners/logo-1.webp"}
                                    width={1000}
                                    height={1000}
                                    alt='partner'
                                />
                            </div>
                            <div className="">
                                <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>
                                    Xetma Vollenweider GmbH – Specializes in shearing and other textile finishing machines.
                                </p>
                            </div>
                        </div>
                        <div className="anim-element">
                            <div className="flex items-center justify-center h-72 max-xl:h-60 max-lg:h-56 max-sm:h-48 mb-7 max-lg:mb-5 rounded-md border border-white">
                                <Image
                                    className='w-40 max-md:w-32 max-xs:w-28 img-black text-white'
                                    src={"/images/partners/logo-2.webp"}
                                    width={1000}
                                    height={1000}
                                    alt='partner'
                                />
                            </div>
                            <div className="">
                                <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>
                                    Toyota Industries Corporation (Airjet Looms)– Renowned for their advanced Toyota Airjet weaving machines.
                                </p>
                            </div>
                        </div>
                        <div className="anim-element">
                            <div className="flex items-center justify-center h-72 max-xl:h-60 max-lg:h-56 max-sm:h-48 mb-7 max-lg:mb-5 rounded-md border border-white">
                                <Image
                                    className='w-40 max-md:w-32 max-xs:w-28 img-black text-white'
                                    src={"/images/partners/logo-3.webp"}
                                    width={1000}
                                    height={1000}
                                    alt='partner'
                                />
                            </div>
                            <div className="">
                                <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>
                                    Prashant Westpoint Group– A leading manufacturer of weaving and finishing machinery in India.
                                </p>
                            </div>
                        </div>
                        <div className="anim-element">
                            <div className="flex items-center justify-center h-72 max-xl:h-60 max-lg:h-56 max-sm:h-48 mb-7 max-lg:mb-5 rounded-md border border-white">
                                <Image
                                    className='w-40 max-md:w-32 max-xs:w-28 img-black text-white'
                                    src={"/images/partners/logo-4.webp"}
                                    width={1000}
                                    height={1000}
                                    alt='partner'
                                />
                            </div>
                            <div className="">
                                <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>
                                    Dilmenler Tekstil Makinaları (Dilmenler Softflow Dyeing) – Manufacturer of dyeing machines, including Softflow dyeing machines.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-14 md:hidden flex items-center justify-between">
                        <Image
                            className='w-48 anim-element'
                            src={"/images/flower.svg"}
                            width={1000}
                            height={1000}
                            alt='img'
                        />

                        <Image
                            className='w-14 anim-element'
                            src={"/images/parisahome-gray.svg"}
                            width={1000}
                            height={1000}
                            alt='img'
                        />
                    </div>
                    <div className="py-7 max-md:py-5 border-t-4 border-white">
                        <p className='text-4xl max-xl:text-3xl max-lg:text-2xl max-lg:leading-6 max-sm:text-center mb-7 max-md:mb-5 text-white anim-element'>Мы всегда ищем новые партнерства и варианты сотрудничества!</p>
                        <Link href={`/${lang}/contacts`} className='w-fit max-sm:text-xs font-medium py-3 max-md:py-2 px-10 max-md:px-7 max-md:m-auto flex rounded-lg text-white bg-yellow anim-element'>СВЯЗАТЬСЯ С НАМИ</Link>
                    </div>
                </div>
            </div>

            {/* <div className="custom-container flex max-md:flex-col gap-5 max-md:gap-8 py-20 max-md:py-10">
                <div className="anim-element">
                    <div className=" h-[500px] max-xl:h-[400px] max-lg:h-[350px] max-md:h-[300px] relative z-10 flex flex-col justify-between p-6 max-lg:p-3 rounded-md overflow-hidden border-2 border-white">
                        <div className="w-full h-full absolute -z-10 top-0 left-0 bg-black/30"></div>
                        <Image
                            className='w-full h-full absolute -z-20 top-0 left-0 object-cover'
                            src={"/images/image-2.png"}
                            width={1000}
                            height={1000}
                            alt='img'
                        />
                        <Image
                            className='w-36 mb-'
                            src={"/images/vector.svg"}
                            width={1000}
                            height={1000}
                            alt='vector'
                        />
                        <p className='text-sm leading-6 max-md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные рынки своей продукцией </p>
                    </div>
                    <div className="mt-3">
                        <p className='text-xs leading-5 md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные рынки своей продукцией </p>
                    </div>
                </div>
                <div className="anim-element">
                    <div className="h-[500px] max-xl:h-[400px] max-lg:h-[350px] max-md:h-[300px] relative z-10 flex flex-col justify-between p-6 max-lg:p-3 rounded-md overflow-hidden border-2 border-white">
                        <div className="w-full h-full absolute -z-10 top-0 left-0 bg-black/30"></div>
                        <Image
                            className='w-full h-full absolute -z-20 top-0 left-0 object-cover'
                            src={"/images/image-2.png"}
                            width={1000}
                            height={1000}
                            alt='img'
                        />
                        <Image
                            className='w-36 mb-'
                            src={"/images/vector.svg"}
                            width={1000}
                            height={1000}
                            alt='vector'
                        />
                        <p className='text-sm leading-6 max-md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные рынки своей продукцией</p>
                    </div>
                    <div className="mt-3">
                        <p className='text-xs leading-5 md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные рынки своей продукцией </p>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default AboutPartners
