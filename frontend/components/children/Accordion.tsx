"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FiPlus } from "react-icons/fi";

interface AccordionProps {
    id: any
    question: string
    answer: string
    expanded: any
    setExpanded: any
}

const Accordion = ({ id, answer, question, expanded, setExpanded }: AccordionProps) => {
    const isOpen = id === expanded;
    const ref = useRef<any>();

    useEffect(() => {
        gsap.to(ref.current.children[1], {
            height: isOpen ? "auto" : 0,
        });
        gsap.to(ref.current.children[0].children[1], {
            rotate: isOpen ? 45 : 0,
            duration: 0.5
        });
    }, [isOpen]);

    return (
        <div className="w-full h-auto border-b cursor-pointer" ref={ref} onClick={() => setExpanded(id === expanded ? -1 : id)}>
            <div className="pt-3 max-sm:pt-2 rounded-r-xl flex gap-2 items-center max-sm:items-start justify-between">
                <h3 className="text-xl max-lg:text-lg max-sm:text-base max-xs:text-sm uppercase">{question}</h3>
                <FiPlus className="text-[30px] text-yellow" />
            </div>
            <div className="max-w-2xl overflow-hidden mb-3 max-sm:mb-2">
                <p className="text-[#1E1E1E99] max-sm:text-sm leading-7 max-sm:leading-5" dangerouslySetInnerHTML={{ __html: answer }}></p>
            </div>
        </div>
    )
}

export default Accordion
