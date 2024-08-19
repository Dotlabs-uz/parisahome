"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React from 'react'

gsap.registerPlugin(ScrollTrigger);
const ExploreServices = () => {
    return (
        <>
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-black/50" />
            <div className="custom-container h-full w-full">
                <div className="max-w-xl py-10 max-md:py-14 max-md:mb-5">
                    <Image
                        className="w-96 mb-3"
                        src={"/images/parisahome.svg"}
                        width={1000}
                        height={1000}
                        alt='img'
                    />
                    <p className='explore text-[56px] max-xl:text-5xl max-lg:text-4xl max-md:text-3xl leading-[50.97px] text-white/50'>специализируется на полотенцах и общепромышленной продукции.</p>
                </div>

                <div className="w-full max-w-[430px] flex flex-col justify-end pb-32 ml-auto">
                    <p className="text-sm font-light leading-[23.8px] mb-5 text-white">Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные рынки своей продукцией </p>
                    <button className="w-fit max-md:text-sm font-medium py-3 max-md:py-2 px-10 max-md:px-6 max-md:m-auto rounded-lg bg-yellow text-white">ИЗУЧИТЬ УСЛУГИ</button>
                </div>
            </div>
        </>
    )
}

export default ExploreServices
