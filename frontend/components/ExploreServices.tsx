"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);
const ExploreServices = () => {
    const { lang } = useParams()
    useEffect(() => {
        const splitTypes = document.querySelectorAll(".text-split");

        splitTypes.forEach((char: any) => {
            const bg = "#F1F1F150";
            const fg = "#F1F1F1";

            const text = new SplitType(char, { types: "chars" });

            let windowWidth = window.innerWidth;

            const runSplit = () => {
                gsap.fromTo(
                    text.chars,
                    { color: bg },
                    {
                        color: fg,
                        duration: 1,
                        stagger: 0.05,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: char,
                            start: "top 90%",
                            end: "bottom center",
                            scrub: true,
                            // markers: true,
                            toggleActions: "play play reverse reverse",
                        },
                    }
                );
            };

            runSplit();

            const handleResize = () => {
                if (windowWidth !== window.innerWidth) {
                    windowWidth = window.innerWidth;
                    text.revert();
                    runSplit();
                }
            };

            window.addEventListener("resize", handleResize);

            // Удаление обработчика при размонтировании компонента
            return () => {
                window.removeEventListener("resize", handleResize);

                // Удаление всех ScrollTrigger
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        });
    }, []);

    return (
        <>
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-black/60" />
            <div className="custom-container h-full w-full flex flex-col justify-around">
                <div className="max-w-xl">
                    <Image
                        className="w-96 mb-3"
                        src={"/images/parisahome.svg"}
                        width={1000}
                        height={1000}
                        alt='img'
                    />
                    <div className="text-animation-container">
                        <p className='text-split text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl leading-[50.97px] text-white/60'>Вместе мы делаем мир мягче.</p>
                    </div>
                </div>

                <div className="w-full max-w-[430px] flex flex-col justify-end ml-auto">
                    <div className="text-animation-container">
                        <p className="text-split text-lg max-sm:text-base font-light leading-[23.8px] mb-5 text-white/60">С 2011 года мы накапливаем опыт и подтверждаем наше качество международными сертификатами, соответствующими высоким стандартам текстильной промышленности.</p>
                    </div>
                    <Link href={`/${lang}/certificates`} className="w-fit max-md:text-sm font-medium py-3 max-md:py-2 px-10 max-md:px-6 max-md:m-auto rounded-lg bg-yellow text-white">ИЗУЧИТЬ СЕРТИФИКАТЫ</Link>
                </div>
            </div>
        </>
    )
}

export default ExploreServices
