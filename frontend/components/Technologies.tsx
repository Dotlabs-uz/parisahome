"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useRef } from 'react'
import FlowerModal from './children/FlowerModal'

gsap.registerPlugin(ScrollTrigger)
const Technologies = () => {
    useGSAP(() => {
        gsap.from(".technologies", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".technologiesSection",
                start: 'center bottom',
                end: 'bottom 80%',
                // scrub: 1,
                // markers: true
            }
        })
    }, [])

    return (
        <div className="custom-container py-10 technologiesSection">
            <div className="text-white">
                <div className="relative">
                    <Image
                        className="w-[280px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none max-sm:hidden"
                        src={"/images/flower.svg"}
                        width={1000}
                        height={1000}
                        alt="img"
                    />
                    {/* <FlowerModal /> */}
                    <div className="flex items-center justify-between mb-10">
                        <div className="w-full flex max-sm:flex-col sm:items-center justify-between gap-3">
                            <h2 className="text-3xl max-sm:text-xl technologies text-yellow">\\ТЕХНОЛОГИИ</h2>
                            <button className="w-fit text-sm max-sm:text-xs py-3 max-sm:py-2 px-8 max-sm:px-5 rounded-full border technologies border-yellow">О КОМПАНИИ</button>
                        </div>
                        <div className="sm:hidden">
                            <Image
                                className="w-40 select-none pointer-events-none"
                                src={"/images/flower.svg"}
                                width={1000}
                                height={1000}
                                alt="img"
                            />
                        </div>
                    </div>
                    <div className="flex max-md:flex-col md:items-center md:justify-end gap-10 max-md:gap-2">
                        <h2 className="max-w-md text-3xl max-lg:text-2xl max-sm:text-xl font-extrabold technologies">Бренд идущий по пути технологических инноваций</h2>
                        <p className="max-w-sm text-sm md:text-end leading-6 technologies">Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные рынки своей продукцией </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 max-md:grid-cols-2 max-xs:grid-cols-1 gap-5 mt-8">
                    {
                        [0, 1, 2].map((i: number) => (
                            <div key={i} className="border-b-4 border-green hover:border-white max-sm:border-white technologies">
                                <div className="">
                                    <Image
                                        src={"/images/towels.png"}
                                        width={1000}
                                        height={1000}
                                        alt="img"
                                    />
                                </div>
                                <div className="mt-8 max-md:mt-3 px-4 max-sm:px-3">
                                    <h3 className="text-2xl text-center">Особенная технология</h3>
                                    <p className="text-base leading-6 my-5 max-md:my-2">Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Technologies
