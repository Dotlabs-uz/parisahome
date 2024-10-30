"use client"
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const Vision = () => {
    const containerRef = useRef(null);
    const textRef = useRef<any>(null);

    const text = "«Мы верим, что мягкость — это роскошь, которую нужно привнести в повседневность.»";

    const words = text.split(' ');

    useEffect(() => {
        const ctx = gsap.context(() => {
            words.forEach((_, index) => {
                const wordElement = textRef.current.children[index];
                gsap.fromTo(
                    wordElement,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        ease: CustomEase.create("custom", "M0,0 C0.1,0.1 0.3,1 1,1"),
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: `top+=200 ${-40 + index * 10}%`,
                            end: "bottom 70%",
                            scrub: true,
                            // markers: true
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, [words]);

    return (
        <div ref={containerRef} className="custom-container h-[250vh] relative">
            <div className="h-screen sticky top-0 mx-auto">
                <Image
                    className="w-96 max-md:w-80 select-none pointer-events-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                    src={'/images/flower.svg'}
                    width={1000}
                    height={1000}
                    alt="img"
                />

                <h2
                    ref={textRef}
                    className="max-w-[800px] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-4xl max-md:text-3xl max-sm:text-xl text-center text-white/50"
                >
                    {words.map((word, index) => (
                        <span key={index} className="inline-block mx-1"> {/* Добавляем отступы между словами */}
                            {word}
                        </span>
                    ))}
                </h2>
            </div>
        </div>
    );
}

export default Vision;
