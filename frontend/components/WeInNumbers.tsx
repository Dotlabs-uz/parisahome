"use client"
import React, { useEffect, useRef } from 'react'

import { animateElementsOnScroll } from '@/lib/animations'

import { LuArrowUpRight } from 'react-icons/lu'

const WeInNumbers = () => {
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
                <h2 className="text-yellow text-3xl max-sm:text-xl uppercase">\\МЫ в ЦИФРАХ</h2>
                <p className="text-green text-lg">Innovative, efficient, and reliable</p>
            </div>

            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-1">
                <div className="w-fit px-4 py-5  border-l-2 border-yellow anim-element">
                    <p className="text-green text-2xl font-extrabold mb-2">95% женщин</p>
                    <p className="text-green text-sm">в составе сотрудников</p>
                </div>
                <div className="w-fit max-sm:w-2/3 px-4 py-5 max-sm:ml-auto border-l-2 border-yellow anim-element">
                    <p className="text-green text-2xl font-extrabold mb-2">3000 м³ в день</p>
                    <p className="text-green text-sm">мощность очистных сооружений (1080 тонн в год)</p>
                </div>
                <div className="w-fit px-4 py-5 border-l-2 border-yellow anim-element">
                    <p className="text-green text-2xl font-extrabold mb-2">9000 тонн в год</p>
                    <p className="text-green text-sm">производственная мощность</p>
                </div>
                <div className="w-fit px-4 py-5 max-sm:ml-auto border-l-2 border-yellow anim-element">
                    <p className="text-green text-2xl font-extrabold mb-2">15+ стран</p>
                    <p className="text-green text-sm">экспорт продукции</p>
                </div>
            </div>

            <div className="flex items-center m-auto w-fit mt-16 anim-element">
                <LuArrowUpRight className="text-[38px] text-[#00EB8D]" />
                <p className="text-3xl max-sm:text-xl text-green">86% эффективности продаж</p>
            </div>
        </div>
    )
}

export default WeInNumbers
