"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import FlowerRotate from "./children/FlowerRotate";

gsap.registerPlugin(ScrollTrigger);
const HorizontalScroll = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const [activeDot, setActiveDot] = useState(0);
    const [modelRotation, setModelRotation] = useState<[number, number, number]>([0, 0, 0]);

    const sectionsData = useMemo(() => [
        {
            years: "2014",
            title: "Наше наследие",
            dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'. В начале эта компания начала производить плющ. С 2009 года ООО'Sam Rafoat Текстиль' обеспечивал местные",
        },
        {
            years: "2017",
            title: "Начало производства",
            dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.",
        },
        {
            years: "2020",
            title: "Время роста",
            dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.",
        },
        {
            years: "2020",
            title: "Время роста",
            dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.",
        },
    ],
        []
    );

    useEffect(() => {
        const progressAnimation = gsap.to(".progress", {
            width: "100%",
            scrollTrigger: {
                trigger: ".scroll-section-outer",
                start: "top top",
                scrub: 1.0,
                markers: true,
            },
        });

        return () => {
            progressAnimation.kill();
        };
    }, []);

    const updateModelRotation = useMemo(() => (progress: number) => {
        const angle = progress * Math.PI * 2;
        setModelRotation([0, angle, 0]);
    }, []);

    useEffect(() => {
        const horizontalScroll = gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.5,
                    pin: true,
                    onUpdate: (self) => {
                        const progress = self.progress * (sectionsData.length - 1);
                        const index = Math.round(progress);
                        setActiveDot(index);
                        updateModelRotation(self.progress);
                    },
                },
            }
        );

        return () => {
            horizontalScroll.kill();
        };
    }, [sectionsData]);

    return (
        <div className="scroll-section-outer relative">
            <div ref={triggerRef} className="relative">
                <div className="w-screen h-1 absolute bottom-10 max-md:bottom-5 left-0 bg-white">
                    <div className="bg-yellow h-full w-[5%] progress relative">
                        <span className="md:hidden w-2 h-2 absolute right-0 -top-0.5 rounded-full bg-yellow" />
                    </div>

                    {sectionsData.map((_, index) => (
                        <div
                            key={index}
                            className="dot-container max-md:hidden flex flex-col gap-3 items-center absolute -top-11"
                            style={{ left: `${(index / sectionsData.length) * 100}%` }}
                        >
                            <div
                                className={`p-1 px-2 rounded-md border ${activeDot === index
                                    ? "bg-yellow border-yellow text-green"
                                    : "border-white text-white"
                                    }`}
                            >
                                <p className="text-sm font-medium whitespace-nowrap">
                                    {sectionsData[index].title.toLowerCase()}
                                </p>
                            </div>
                            <span className={`block w-2 h-2 rounded-full ${activeDot >= index ? "bg-yellow" : "bg-white"}`}></span>
                        </div>
                    ))}
                </div>

                <div className="max-w-md max-md:max-w-xs w-full h-80 max-md:h-64 fixed left-1/2 max-lg:left-1/3 top-1/2 -translate-y-1/2 max-md:left-[10%]">
                    <FlowerRotate rotation={modelRotation} />
                </div>

                <div ref={sectionRef} className="scroll-section-inner text-white relative">
                    {sectionsData.map((item, index) => (
                        <div key={index} className="scroll-section flex">
                            <div className="custom-container h-full flex gap-20 max-md:gap-10 nth py-40 max-md:py-20">
                                <div className="w-full">
                                    <p className="text-xl mb-10 max-md:mb-5">{item.years}</p>
                                    <h2 className="text-5xl mb-3">{item.title}</h2>
                                    <p className="max-w-[430px] text-[17px] leading-6">{item.dcr}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
