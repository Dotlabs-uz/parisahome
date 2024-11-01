"use client"
import React, { useEffect, useRef } from 'react'

import { animateElementsOnScroll } from '@/lib/animations'

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
                    <p className="text-green text-2xl font-extrabold mb-2">1080 тонн</p>
                    <p className="text-green text-sm">Воды перерабатывается в год</p>
                </div>
                <div className="w-fit px-4 py-5 border-l-2 border-yellow anim-element">
                    <p className="text-green text-2xl font-extrabold mb-2">9000 тонн</p>
                    <p className="text-green text-sm">Производится готовой продукции в год</p>
                </div>
                <div className="w-fit px-4 py-5 max-sm:ml-auto border-l-2 border-yellow anim-element">
                    <p className="text-green text-2xl font-extrabold mb-2">В 15+ стран</p>
                    <p className="text-green text-sm">Экспортируется наши товары</p>
                </div>
            </div>
        </div>
    )
}

export default WeInNumbers
