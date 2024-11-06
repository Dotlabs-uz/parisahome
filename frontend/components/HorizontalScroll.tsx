"use client";
import React, { useEffect, useRef, useMemo, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import FlowerRotate from "./children/FlowerRotate";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ history }: any) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const horizontalRef = useRef<HTMLDivElement | null>(null);
    const lenis = useRef<Lenis | null>(null);
    const sectionsRefs = useRef<(HTMLDivElement | null)[]>([]);
    const dotsRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeDot, setActiveDot] = useState<number>(0);
    const [modelRotation, setModelRotation] = useState([0, 0, 0]); // Для хранения вращения по осям

    const sectionsData = [
        {
            years: "2014",
            title: history.title1,
            dcr: history.dcr1
        },
        {
            years: "2011",
            title: history.title2,
            dcr: history.dcr2
        },
        {
            years: "2021",
            title: history.title3,
            dcr: history.dcr3
        },
        {
            years: "2024",
            title: history.title4,
            dcr: history.dcr4
        },
    ];

    const updateModelRotation = useMemo(() => (progress: number) => {
        const angle = progress * Math.PI * 2;
        setModelRotation([0, angle, 0]);
    }, []);

    useEffect(() => {
        lenis.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            gestureOrientation: "vertical",
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        const onScroll = (time: number) => {
            lenis.current?.raf(time);
            requestAnimationFrame(onScroll);
        };

        requestAnimationFrame(onScroll);

        const horizontalScrollLength = (horizontalRef.current?.scrollWidth || 0) - (containerRef.current?.clientWidth || 0);

        gsap.to(horizontalRef.current, {
            x: -horizontalScrollLength,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${horizontalScrollLength}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    const progressValue = self.progress * (sectionsData.length - 1);
                    setActiveDot(Math.round(progressValue));

                    // Управляем вращением модели (вращение по оси Y и Z на основе прогресса прокрутки)
                    updateModelRotation(self.progress);
                },
            },
        });

        sectionsRefs.current.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        end: "top 30%",
                        scrub: true,
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => {
            lenis.current?.destroy();
            ScrollTrigger.killAll();
        };
    }, []);

    useEffect(() => {
        const progressAnimation = gsap.fromTo(
            ".progress-line",
            { width: "15%" },
            {
                width: "100%",
                scrollTrigger: {
                    trigger: horizontalRef.current,
                    start: "top top",
                    end: () => `+=${horizontalRef.current?.scrollWidth || 0}`,
                    scrub: 1.0,
                },
            }
        );

        return () => {
            lenis.current?.destroy();
            progressAnimation.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className="scroll-section-outer relative">
            <div className="progress-line-bg absolute bottom-10 max-md:bottom-5 left-0 h-[3px] w-full bg-white z-20" />
            <div className="progress-line bottom-10 max-md:bottom-5" />

            <div className="dots-container absolute bottom-[38px] max-md:bottom-[18px] left-0 w-full flex justify-around z-[41]">
                {sectionsData.map((_, index) => (
                    <div key={index} className="flex flex-col gap-2 items-center">
                        <div
                            className={`flex items-center gap-3 p-1 px-2 rounded-md border max-md:hidden duration-200 ${activeDot === index
                                ? "bg-yellow border-yellow text-white"
                                : "border-white text-white"
                                }`}
                        >
                            <p>{sectionsData[index].years}</p>
                            <p className="text-sm font-medium whitespace-nowrap">
                                {sectionsData[index].title}
                            </p>
                        </div>

                        <div
                            ref={(el: any) => (dotsRefs.current[index] = el)}
                            className={`progress-dot w-2 h-2 rounded-full transform transition-transform duration-300 ease-out ${activeDot >= index ? "bg-yellow" : "bg-white"}`}
                        />
                    </div>
                ))}
            </div>

            <div className="max-w-md max-md:max-w-sm w-full h-80 max-md:h-64 fixed left-1/2 top-2/3 -translate-y-1/2 -translate-x-1/2">
                <FlowerRotate rotation={modelRotation} /> {/* Передаем вращение в модель */}
            </div>

            <div ref={horizontalRef} className="flex">
                {sectionsData.map(
                    ({ years, title, dcr }, index) => (
                        <div
                            key={index}
                            ref={(el: any) => (sectionsRefs.current[index] = el)}
                            className="scroll-section flex"
                        >
                            <div className="custom-container h-full flex gap-20 max-md:gap-10 py-40 max-md:py-20">
                                <div className="w-full flex flex-col text-white">
                                    <p className="text-xl mb-10 max-md:mb-5">{years}</p>
                                    <h2 className="text-5xl max-sm:text-4xl mb-3">{title}</h2>
                                    <p className="max-w-[600px] text-[17px] max-sm:text-sm leading-6">{dcr}</p>
                                    <div
                                        className={`w-fit mt-auto py-2 px-8 rounded-md border md:hidden duration-200 ${activeDot === index
                                            ? "bg-yellow border-yellow text-white"
                                            : "border-white text-white"
                                            }`}
                                    >
                                        <p className="text-lg font-medium whitespace-nowrap">
                                            {sectionsData[index].title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default HorizontalScroll;