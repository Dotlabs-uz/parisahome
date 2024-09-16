"use client"
import React, { useEffect, useRef, useState } from 'react'
// import Accordions from './Accordions'
import { animateElementsOnScroll } from '@/lib/animations'
import Accordion from './children/Accordion';

const AccordionData = [
    {
        title: "Можно ли использовать полотенце сразу после стирки?",
        content: "Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'."
    },
    {
        title: "Можно ли использовать полотенце сразу после стирки?",
        content: "Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'."
    },
    {
        title: "Можно ли использовать полотенце сразу после стирки?",
        content: "Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'."
    },
    {
        title: "Можно ли использовать полотенце сразу после стирки?",
        content: "Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'."
    }
];


const FAQ = () => {
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
        <div ref={sectionRef} className="custom-container">
            <div className="py-20 max-md:py-10 max-sm:py-5 rounded-3xl shadow-md bg-white">
                <div className="mb-11 max-md:mb-5 px-4 anim-element">
                    <h2 className="text-yellow text-4xl max-lg:text-3xl max-sm:text-2xl sm:text-center ">\\Часто задаваемые вопросы</h2>
                </div>

                <div className='max-w-4xl h-auto mx-auto px-10 max-sm:px-4 anim-element'>
                    {AccordionData.map((e, i) => (
                        <Accordion
                            key={i}
                            id={i}
                            title={e.title}
                            content={e.content}
                            expanded={expanded}
                            setExpanded={setExpanded}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ
