"use client"
import React, { useRef } from 'react'
import Accordions from './Accordions'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const FAQ = () => {
    const accordionsSection = useRef(null)

    useGSAP(() => {
        const accordions = gsap.utils.toArray('.accordions');
        accordions.forEach((accordion: any) => {
            gsap.from(accordion, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: accordion,
                    start: "center bottom",
                    end: "bottom 80%",
                    scrub: 1,
                    // markers: true
                }
            })
        })
    }, { scope: accordionsSection })

    return (
        <div ref={accordionsSection} className="custom-container">
            <div className="py-20 max-md:py-10 max-sm:py-5 rounded-3xl shadow-md bg-white">
                <div className="mb-11 max-md:mb-5 px-4">
                    <h2 className="text-yellow text-4xl max-lg:text-3xl max-sm:text-2xl sm:text-center accordions">\\Часто задаваемые вопросы</h2>
                </div>

                <div className="">
                    <Accordions />
                </div>
            </div>
        </div>
    )
}

export default FAQ
