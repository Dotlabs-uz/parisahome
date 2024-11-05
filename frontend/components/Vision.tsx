"use client"
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const Vision = ({ quote }: any) => {
    const containerRef = useRef(null);
    const textRef = useRef<any>(null);
    const imageRef = useRef(null);

    const text = quote;
    const words = text.split(' ');

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text Animation
            words.forEach((_: any, index: any) => {
                const wordElement = textRef.current.children[index];
                gsap.fromTo(
                    wordElement,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        ease: CustomEase.create("custom", "M0,0 C0.1,0.1 0.3,1 1,1"),
                        duration: 0.3, // Shorten duration for faster appearance
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: `top+=200 ${-50 + index * 10}%`,
                            end: "bottom 80%",
                            scrub: true,
                            // markers: true
                        },
                    }
                );
            });

            // Image Animation
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.6 },
                {
                    opacity: 1,
                    scale: 1,
                    ease: "power3.out",
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [words]);

    return (
        <div ref={containerRef} className="custom-container h-[300vh] relative">
            <div className="h-screen sticky top-0 mx-auto">
                <Image
                    ref={imageRef}
                    className="w-96 max-md:w-80 select-none pointer-events-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                    src={'/images/flower.svg'}
                    width={1000}
                    height={1000}
                    alt="img"
                />

                <h2
                    ref={textRef}
                    className="max-w-[700px] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-4xl max-md:text-3xl max-sm:text-xl text-center text-white/50"
                >
                    {words.map((word: string, index: number) => (
                        <span key={index} className="inline-block mx-1">
                            {word}
                        </span>
                    ))}
                </h2>
            </div>
        </div>
    );
}

export default Vision;
