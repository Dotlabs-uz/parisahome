"use client"
import React, { useEffect, useRef } from 'react'

import { animateElementsOnScroll } from '@/lib/animations'
import { GiWaterRecycling } from 'react-icons/gi'
import { TbPackageExport } from 'react-icons/tb'
import Image from 'next/image'

const WeInNumbers = ({ weInNumbersComp }: any) => {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (section) {
            const elements = section.querySelectorAll('.anim-element')
            animateElementsOnScroll(elements)
        }
    }, [])

    return (
        <div ref={sectionRef} className="custom-container py-28 max-md:py-20 max-sm:py-10 weInNumbersSection">
            <div className="flex max-sm:flex-col sm:items-center justify-between mb-12 max-md:mb-7 max-sm:mb-2 anim-element">
                <h2 className="text-yellow text-3xl max-sm:text-xl uppercase">\\{weInNumbersComp.weInNumbersTitle}</h2>
                <p className="text-green text-lg">{weInNumbersComp.subtitle}</p>
            </div>

            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-1">
                <div className="w-fit px-4 py-5  border-l-2 border-yellow anim-element">
                    <Image
                        className='w-12 ml-5 text-green'
                        src={"/images/icons/woman.png"}
                        width={1000}
                        height={1000}
                        alt='workers'
                    />
                    <p className="text-green text-2xl font-extrabold mb-2">{weInNumbersComp.womenPercentage}</p>
                    <p className="text-green text-sm">{weInNumbersComp.womenDescription}</p>
                </div>
                <div className="w-fit max-sm:w-2/3 px-4 py-5 max-sm:ml-auto border-l-2 border-yellow anim-element">
                    <GiWaterRecycling className='ml-5 text-[40px] text-green' />
                    <p className="text-green text-2xl font-extrabold mb-2">{weInNumbersComp.waterRecycled}</p>
                    <p className="text-green text-sm">{weInNumbersComp.waterRecycledDescription}</p>
                </div>
                <div className="w-fit px-4 py-5 border-l-2 border-yellow anim-element">
                    <Image
                        className='w-12 ml-5 text-green'
                        src={"/images/icons/product.png"}
                        width={1000}
                        height={1000}
                        alt='workers'
                    />
                    <p className="text-green text-2xl font-extrabold mb-2">{weInNumbersComp.productionOutput}</p>
                    <p className="text-green text-sm">{weInNumbersComp.productionOutputDescription}</p>
                </div>
                <div className="w-fit px-4 py-5 max-sm:ml-auto border-l-2 border-yellow anim-element">
                    <TbPackageExport className='ml-5 text-[40px] text-green' />
                    <p className="text-green text-2xl font-extrabold mb-2">{weInNumbersComp.exportCountries}</p>
                    <p className="text-green text-sm">{weInNumbersComp.exportDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default WeInNumbers
