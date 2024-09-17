"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const arr = [
    { years: "2014", title: "Наше наследие", dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'. В начале эта компания начала производить плющ. С 2009 года ООО'Sam Rafoat Текстиль' обеспечивал местные" },
    { years: "2017", title: "Начало производства", dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'." },
    { years: "2020", title: "Время роста", dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'." },
    { years: "2020", title: "Время роста", dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'." }
];

gsap.registerPlugin(ScrollTrigger);
const HorizontalScroll = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const [activeDot, setActiveDot] = useState(0);

    useEffect(() => {
        const pin = gsap.fromTo(
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
                    // markers: true,
                    onUpdate: (self) => {
                        const progress = self.progress * (arr.length - 1);
                        const index = Math.round(progress); // Округляем прогресс для более точного переключения
                        setActiveDot(index);
                    }
                }
            }
        );

        gsap.to(".progress", {
            width: "100%",
            scrollTrigger: {
                trigger: ".scroll-section-outer",
                start: "top left",
                scrub: 1.0
            }
        });

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <>
            <div className="scroll-section-outer">
                <div ref={triggerRef} className="relative scroll">
                    <div className="w-screen h-1 absolute bottom-10 max-md:bottom-5 left-0 bg-white">
                        <div className="bg-yellow h-full w-0 progress relative">
                            <span className="md:hidden w-2 h-2 absolute right-0 -top-0.5 rounded-full bg-yellow" />
                        </div>
                        {arr.map((_, index) => (
                            <div
                                key={index}
                                className="dot-container max-md:hidden flex flex-col gap-3 items-center absolute -top-11"
                                style={{ left: `${(index / (arr.length)) * 100}%` }}
                            >
                                <div className={`p-1 px-2 rounded-md border ${activeDot === index ? 'bg-yellow border-yellow text-green' : 'border-white text-white'}`}>
                                    <p className="text-sm font-medium whitespace-nowrap">
                                        {arr[index].title.toLowerCase()}
                                    </p>
                                </div>
                                <span className={`block w-2 h-2 rounded-full ${activeDot >= index ? 'bg-yellow' : 'bg-white'}`}></span>
                            </div>
                        ))}
                    </div>

                    <div ref={sectionRef} className="scroll-section-inner text-white">
                        {
                            arr.map((item, index) => (
                                <div key={index} className="scroll-section ">
                                    <div className="custom-container h-full flex max-md:flex-col gap-20 max-md:gap-10 items-center justify-between py-40 max-md:py-20">
                                        <div className="w-full">
                                            <p className="text-xl mb-10 max-md:mb-5">{item.years}</p>
                                            <h2 className="text-5xl mb-3">{item.title}</h2>
                                            <p className="max-w-[430px] text-[17px] leading-6">{item.dcr}</p>
                                        </div>

                                        <div className="max-w-md max-md:max-w-60 w-full flower">
                                            <Image
                                                className="w-full h-full"
                                                src={"/images/flower.svg"}
                                                width={1000}
                                                height={1000}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default HorizontalScroll;
