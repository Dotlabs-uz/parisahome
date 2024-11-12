"use client"
import React, { useEffect, useRef, useState } from 'react'
// import Accordions from './Accordions'
import { animateElementsOnScroll } from '@/lib/animations'
import Accordion from './children/Accordion';
import axios from 'axios';

type accordion = {
    id: number
    ruQuestion: string
    uzQuestion: string
    enQuestion: string
    jpQuestion: string
    ruAnswer: string
    uzAnswer: string
    enAnswer: string
    jpAnswer: string
}

const FAQ = ({ data, faqTitle }: any) => {
    const [expanded, setExpanded] = useState(4);
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (section) {
            const elements = section.querySelectorAll('.anim-element')
            animateElementsOnScroll(elements)
        }
    }, [])

    return (
        <div ref={sectionRef}>
            <div className="mb-11 max-md:mb-5 px-4 anim-element">
                <h2 className="text-yellow text-4xl max-lg:text-3xl max-sm:text-2xl sm:text-center ">\\ {faqTitle}</h2>
            </div>

            <div className='max-w-4xl h-auto mx-auto px-10 max-sm:px-4 anim-element'>
                {data.map((e: accordion) => (
                    <Accordion
                        key={e.id}
                        elem={e}
                        expanded={expanded}
                        setExpanded={setExpanded}
                    />
                ))}
            </div>
        </div>
    )
}

export default FAQ
