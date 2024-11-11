"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FiPlus } from "react-icons/fi";
import { useParams } from "next/navigation";

interface AccordionProps {
    elem: {
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
    expanded: any
    setExpanded: any
}

const Accordion = ({ elem, expanded, setExpanded }: AccordionProps) => {
    const { lang } = useParams()
    const isOpen = elem.id === expanded;
    const ref = useRef<any>();
    const question = `${lang}Question` as keyof typeof elem;
    const answer = `${lang}Answer` as keyof typeof elem;

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
        <div className="w-full h-auto border-b cursor-pointer" ref={ref} onClick={() => setExpanded(elem.id === expanded ? -1 : elem.id)}>
            <div className="pt-3 max-sm:pt-2 rounded-r-xl flex gap-2 items-center max-sm:items-start justify-between">
                <h3 className="text-xl max-lg:text-lg max-sm:text-base max-xs:text-sm uppercase">{elem[question]}</h3>
                <FiPlus className="text-[30px] text-yellow" />
            </div>
            <div className="max-w-2xl overflow-hidden mb-3 max-sm:mb-2">
                <p className="text-[#1E1E1E99] max-sm:text-sm leading-7 max-sm:leading-5" dangerouslySetInnerHTML={{ __html: elem[answer] }}></p>
            </div>
        </div>
    )
}

export default Accordion
