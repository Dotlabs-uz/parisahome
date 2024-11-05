"use client"
import React, { useEffect, useRef, useState } from 'react'
// import Accordions from './Accordions'
import { animateElementsOnScroll } from '@/lib/animations'
import Accordion from './children/Accordion';
import axios from 'axios';

const FAQ = ({ faqTitle }: any) => {
    const [questions, setQuestions] = useState([]);
    const [expanded, setExpanded] = useState(4);
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (section) {
            const elements = section.querySelectorAll('.anim-element')
            animateElementsOnScroll(elements)
        }
    }, [])

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/question`)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setQuestions(res.data);
                }
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div ref={sectionRef} className="custom-container">
            <div className="py-20 max-md:py-10 max-sm:py-5 rounded-3xl shadow-md bg-white">
                <div className="mb-11 max-md:mb-5 px-4 anim-element">
                    <h2 className="text-yellow text-4xl max-lg:text-3xl max-sm:text-2xl sm:text-center ">\\ {faqTitle}</h2>
                </div>

                <div className='max-w-4xl h-auto mx-auto px-10 max-sm:px-4 anim-element'>
                    {questions.map((e: { question: string, answer: string, id: number }) => (
                        <Accordion
                            key={e.id}
                            id={e.id}
                            question={e.question}
                            answer={e.answer}
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
