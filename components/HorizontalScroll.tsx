"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";

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
            <section className="scroll-section-outer">
                <div ref={triggerRef} className="relative scroll">
                    <div className="w-screen h-1 absolute bottom-20 left-0 bg-white">
                        <div className="bg-yellow h-full w-0 progress"></div>
                    </div>
                    <div ref={sectionRef} className="scroll-section-inner text-white">
                        <div className="scroll-section">
                            <div className="custom-container h-full flex max-md:flex-col items-center justify-between py-24">
                                <div className=" w-full">
                                    <p className="text-xl mb-10">2014</p>

                                    <h2 className="text-5xl mb-3">Наше наследие</h2>
                                    <p className="max-w-[430px] text-[17px] leading-6">Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные </p>
                                </div>

                                <div className="max-w-md w-full h-full">
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
                        <div className="scroll-section">
                            <div className="custom-container h-full flex max-md:flex-col items-end justify-between py-24">
                                <div className=" w-full">
                                    <p className="text-xl mb-10">2017</p>

                                    <h2 className="text-5xl mb-3">Начало производства</h2>
                                    <p className="max-w-[430px] text-[17px] leading-6">
                                        Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile".
                                    </p>
                                </div>

                                <div className="max-w-md w-full h-full">
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
                        <div className="scroll-section">
                            <div className="custom-container h-full flex max-md:flex-col items-start justify-between py-24">
                                <div className=" w-full">
                                    <p className="text-xl mb-10">2020</p>

                                    <h2 className="text-5xl mb-3">Время роста</h2>
                                    <p className="max-w-[430px] text-[17px] leading-6">
                                        Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile".                                    </p>
                                </div>

                                <div className="max-w-md w-full h-full">
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
                        <div className="scroll-section">
                            <div className="custom-container h-full flex max-md:flex-col items-center justify-between py-24">
                                <div className=" w-full">
                                    <p className="text-xl mb-10">2020</p>

                                    <h2 className="text-5xl mb-3">Время роста</h2>
                                    <p className="max-w-[430px] text-[17px] leading-6">
                                        Полотенца, которые впечатляют! Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile".                                    </p>
                                </div>

                                <div className="max-w-md w-full h-full">
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
                    </div>
                </div>
            </section>

            <section>
                <div className="w-screen h-screen bg-[red]"></div>
            </section>
        </>
    );
}

export default HorizontalScroll