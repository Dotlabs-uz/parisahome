"use client"
import React, { useState } from "react";
import Accordion from './children/Accordion'
import gsap from "gsap";

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

const Accordions = () => {
    const [expanded, setExpanded] = useState(4);

    return (
        <div className='max-w-4xl h-auto mx-auto px-10 max-sm:px-4'>
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
    )
}

export default Accordions
