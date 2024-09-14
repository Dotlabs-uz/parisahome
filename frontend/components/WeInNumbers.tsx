"use client"
import { animateElementsOnScroll } from '@/lib/animations'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

gsap.registerPlugin(ScrollTrigger)
const WeInNumbers = () => {
    // useGSAP(() => {
    //     gsap.from(".number", {
    //         y: 50,
    //         stagger: 0.2,
    //         opacity: 0,
    //         duration: 1,
    //         scrollTrigger: {
    //             trigger: ".weInNumbersSection",
    //             start: "center bottom",
    //             end: "center 50%",
    //             // scrub: 1,
    //             // markers: true
    //         }
    //     })
    // })

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

            <div className="flex max-sm:flex-col sm:items-center sm:justify-between gap-1">
                <div className="w-fit px-4 py-5  border-l-2 border-yellow anim-element">
                    <p className="text-green text-5xl font-extrabold mb-2">28K+</p>
                    <p className="text-green text-lg">Completed Works</p>
                </div>
                <div className="w-fit px-4 py-5 max-sm:ml-auto border-l-2 border-yellow anim-element">
                    <p className="text-green text-5xl font-extrabold mb-2">550+</p>
                    <p className="text-green text-lg">Team Members</p>
                </div>
                <div className="w-fit px-4 py-5 border-l-2 border-yellow anim-element">
                    <p className="text-green text-5xl font-extrabold mb-2">13</p>
                    <p className="text-green text-lg">Years of Experience</p>
                </div>
                <div className="w-fit px-4 py-5 max-sm:ml-auto border-l-2 border-yellow anim-element">
                    <p className="text-green text-5xl font-extrabold mb-2">99%</p>
                    <p className="text-green text-lg">Satisfied Customers</p>
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
