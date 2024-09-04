"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";

const arr = [
    {
        years: "2014",
        title: "Наше наследие",
        dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'. В начале эта компания начала производить плющ. С 2009 года ООО'Sam Rafoat Текстиль' обеспечивал местные"
    },
    {
        years: "2017",
        title: "Начало производства",
        dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'."
    },
    {
        years: "2020",
        title: "Время роста",
        dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'."
    },
    {
        years: "2020",
        title: "Время роста",
        dcr: "Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО'Sam Rafoat Textile'."
    },
]

gsap.registerPlugin(ScrollTrigger);
const HorizontalScroll = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );

        gsap.to(".progress", {
            width: "100%",
            scrollTrigger: {
                trigger: ".scroll-section-outer",
                start: "top left",
                scrub: 1
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
                        <div className="bg-yellow h-full w-0 progress"></div>

                        <div className="max-md:hidden flex flex-col gap-3 items-center absolute -top-11 left-[0%]">
                            <div className="p-1 px-2 rounded-md bg-white border border-white">
                                <p className="text-sm font-medium text-nowrap text-green">наше наследие</p>
                            </div>
                            <span className="block w-2 h-2 rounded-full bg-white "></span>
                        </div>
                        <div className="max-md:hidden flex flex-col gap-3 items-center absolute -top-11 left-[35%]">
                            <div className="p-1 px-2 rounded-md border border-white">
                                <p className="text-sm font-medium text-nowrap text-white">наше наследие</p>
                            </div>
                            <span className="block w-2 h-2 rounded-full bg-white"></span>
                        </div>
                        <div className="max-md:hidden flex flex-col gap-3 items-center absolute -top-11 left-[68%]">
                            <div className="p-1 px-2 rounded-md border border-white">
                                <p className="text-sm font-medium text-nowrap text-white">наше наследие</p>
                            </div>
                            <span className="block w-2 h-2 rounded-full bg-white"></span>
                        </div>
                        <div className="max-md:hidden flex flex-col gap-3 items-center absolute -top-11 left-[88%]">
                            <div className="p-1 px-2 rounded-md border border-white">
                                <p className="text-sm font-medium text-nowrap text-white">наше наследие</p>
                            </div>
                            <span className="block w-2 h-2 rounded-full bg-white"></span>
                        </div>
                    </div>

                    <div ref={sectionRef} className="scroll-section-inner text-white">
                        {
                            arr.map((item: any, index: number) => (
                                <div key={index} className="scroll-section ">
                                    <div className="custom-container h-full flex max-md:flex-col gap-20 items-center justify-around lg:justify-between py-40 max-md:py-20">
                                        <div className="w-full">
                                            <p className="text-xl mb-10">{item.years}</p>

                                            <h2 className="text-5xl mb-3">{item.title}</h2>
                                            <p className="max-w-[430px] text-[17px] leading-6">{item.dcr}</p>
                                        </div>

                                        <div className="max-w-md w-full flower">
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

export default HorizontalScroll