"use client";
import React, { useEffect, useRef, useMemo, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import FlowerRotate from "./children/FlowerRotate";

gsap.registerPlugin(ScrollTrigger);

interface SectionData {
    years: string;
    title: string;
    dcr: string;
}

const HorizontalScroll: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const horizontalRef = useRef<HTMLDivElement | null>(null);
    const lenis = useRef<Lenis | null>(null);
    const sectionsRefs = useRef<(HTMLDivElement | null)[]>([]);
    const dotsRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeDot, setActiveDot] = useState<number>(0);
    const [modelRotation, setModelRotation] = useState([0, 0, 0]); // Для хранения вращения по осям

    const sectionsData: SectionData[] = useMemo(() => [
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
            years: "2021",
            title: "Новые горизонты",
            dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'.",
        },
    ], []);

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
            <div className="progress-line-bg absolute bottom-10 left-0 h-[3px] w-full bg-white z-20" />
            <div className="progress-line" />

            <div className="dots-container absolute bottom-[38px] left-0 w-full flex justify-around z-[41]">
                {sectionsData.map((_, index) => (
                    <div
                        key={index}
                        ref={(el: any) => (dotsRefs.current[index] = el)}
                        className={`progress-dot w-2 h-2 rounded-full transform transition-transform duration-300 ease-out ${activeDot >= index ? "bg-yellow" : "bg-white"}`}
                    />
                ))}
            </div>

            <div className="max-w-md max-md:max-w-xs w-full h-80 max-md:h-60 fixed left-1/2 max-lg:left-1/3 top-1/2 -translate-y-1/2 max-md:left-[10%]">
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
                            <div className="custom-container nth h-full flex gap-20 max-md:gap-10 py-40 max-md:py-20">
                                <div className="w-full text-white">
                                    <p className="text-xl mb-10 max-md:mb-5">{years}</p>
                                    <h2 className="text-5xl mb-3">{title}</h2>
                                    <p className="max-w-[430px] text-[17px] leading-6">{dcr}</p>
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


// const HorizontalScroll = () => {
//     const sectionRef = useRef(null);
//     const triggerRef = useRef(null);
//     const [activeDot, setActiveDot] = useState(0);
//     const [modelRotation, setModelRotation] = useState<[number, number, number]>([0, 0, 0]);

//
//
//     const updateModelRotation = useMemo(() => (progress: number) => {
//         const angle = progress * Math.PI * 2;
//         setModelRotation([0, angle, 0]);
//     }, []);

//     useEffect(() => {
//         const progressAnimation = gsap.to(".progress", {
//             width: "100%",
//             scrollTrigger: {
//                 trigger: ".scroll-section-outer",
//                 start: "top top",
//                 scrub: 1.0,
//                 markers: true,
//             },
//         });

//         return () => {
//             progressAnimation.kill();
//         };
//     }, []);

//     useEffect(() => {
//         const lenis = new Lenis()

//         function raf(time: any) {
//             lenis.raf(time)
//             requestAnimationFrame(raf)
//         }

//         requestAnimationFrame(raf)
//     })

//     useEffect(() => {
//         const horizontalScroll = gsap.fromTo(
//             sectionRef.current,
//             { translateX: 0 },
//             {
//                 translateX: "-300vw",
//                 // ease: "circ",
//                 duration: .5,
//                 scrollTrigger: {
//                     trigger: triggerRef.current,
//                     start: "top top",
//                     end: "2000 top",
//                     scrub: 1,
//                     pin: true,
//                     onUpdate: (self) => {
//                         const progress = self.progress * (sectionsData.length - 1);
//                         const index = Math.round(progress);
//                         setActiveDot(index);
//                         updateModelRotation(self.progress);
//                     },
//                 },
//             }
//         );

//         return () => {
//             horizontalScroll.kill();
//         };
//     }, [sectionsData]);

//     return (
//         <div className="scroll-section-outer relative">
//             <div ref={triggerRef} className="relative">
//                 <div className="w-screen h-1 absolute bottom-10 max-md:bottom-5 left-0 bg-white">
//                     <div className="bg-yellow h-full w-[5%] progress relative">
//                         <span className="md:hidden w-2 h-2 absolute right-0 -top-0.5 rounded-full bg-yellow" />
//                     </div>

//                     {sectionsData.map((_, index) => (
//                         <div
//                             key={index}
//                             className="dot-container max-md:hidden flex flex-col gap-3 items-center absolute -top-11"
//                             style={{ left: `${(index / sectionsData.length) * 100}%` }}
//                         >
//                             <div
//                                 className={`p-1 px-2 rounded-md border ${activeDot === index
//                                     ? "bg-yellow border-yellow text-green"
//                                     : "border-white text-white"
//                                     }`}
//                             >
//                                 <p className="text-sm font-medium whitespace-nowrap">
//                                     {sectionsData[index].title.toLowerCase()}
//                                 </p>
//                             </div>
//                             <span className={`block w-2 h-2 rounded-full bg-yellow ${activeDot >= index ? "scale-100" : "scale-0"} duration-200`}></span>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="max-w-md max-md:max-w-xs w-full h-80 max-md:h-64 fixed left-1/2 max-lg:left-1/3 top-1/2 -translate-y-1/2 max-md:left-[10%]">
//                     <FlowerRotate rotation={modelRotation} />
//                 </div>

//                 <div ref={sectionRef} className="scroll-section-inner text-white relative">
//                     {sectionsData.map((item, index) => (
//                         <div key={index} className="scroll-section flex">
//                             <div className="custom-container h-full flex gap-20 max-md:gap-10 nth py-40 max-md:py-20">
//                                 <div className="w-full">
//                                     <p className="text-xl mb-10 max-md:mb-5">{item.years}</p>
//                                     <h2 className="text-5xl mb-3">{item.title}</h2>
//                                     <p className="max-w-[430px] text-[17px] leading-6">{item.dcr}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HorizontalScroll;