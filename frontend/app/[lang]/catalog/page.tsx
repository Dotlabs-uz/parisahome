"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateElementsOnScroll } from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger)
const Page = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const categoryRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const section = sectionRef.current
        if (section) {
            const elements = section.querySelectorAll('.anim-element')
            animateElementsOnScroll(elements)
        }
    }, [])

    useEffect(() => {
        if (activeIndex !== null) {
            gsap.to(categoryRefs.current[activeIndex], {
                backgroundColor: '#EF9D4E',
                color: '#022B26',
                borderColor: '#EF9D4E',
                duration: 0.3,
                ease: 'power1.out',
            });

            categoryRefs.current.forEach((category, i) => {
                if (i !== activeIndex) {
                    gsap.to(category, {
                        backgroundColor: 'transparent',
                        color: '#EF9D4E',
                        borderColor: '#EF9D4E',
                        duration: 0.3,
                        ease: 'power1.out',
                    });
                }
            });
        }
    }, [activeIndex]);

    return (
        <div ref={sectionRef} className="custom-container min-h-screen pt-14">
            <div className="mt-10 mb-5 max-md:mb-3 anim-element">
                <h1 className="text-4xl max-lg:text-3xl max-sm:text-2xl font-bold text-white">Категории продукции</h1>
            </div>

            <div className="anim-element w-full relative flex items-center max-sm:grid grid-cols-2 gap-2 pb-5 mb-5 max-md:mb-3">
                {[0, 1, 2, 3].map((i) => (
                    <p
                        key={i}
                        ref={(el: any) => (categoryRefs.current[i] = el)}
                        className={`text-sm font-semibold text-center py-1.5 px-4 max-sm:px-3 max-sm:py-1.5 rounded-full cursor-pointer border duration-150`}
                        onClick={() => handleClick(i)}
                    >
                        категория
                    </p>
                ))}
            </div>

            <div className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-3 gap-y-7 mb-10 max-md:mb-5">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i: number) => (
                        <Link href={"#"} key={i} className="anim-element">
                            <div className="">
                                <Image
                                    src={"/images/img.png"}
                                    width={1000}
                                    height={1000}
                                    alt='product'
                                />
                            </div>
                            <div className="mt-1.5 px-2 text-white">
                                <div className="flex items-center justify-between">
                                    <p className='font-semibold'>Shirt</p>
                                    <p>$85</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>2 colors</p>
                                    <p className='text-white/50 line-through'>$124</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Page;
