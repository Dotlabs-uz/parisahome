"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const Page = () => {
    const catalog = useRef(null)
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const categoryRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    useGSAP(() => {
        const elems = gsap.utils.toArray(".catalog-animated")

        elems.forEach((el: any) => {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: "center bottom",
                    end: "center 80%",
                    // scrub: 1,
                    // markers: true
                }
            })
        })
    }, { scope: catalog })

    useEffect(() => {
        if (activeIndex !== null) {
            gsap.to(categoryRefs.current[activeIndex], {
                backgroundColor: 'white',
                color: 'green',
                duration: 0.3,
                borderColor: 'green',
                ease: 'power1.out',
            });

            categoryRefs.current.forEach((category, i) => {
                if (i !== activeIndex) {
                    gsap.to(category, {
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderColor: 'white',
                        duration: 0.3,
                        ease: 'power1.out',
                    });
                }
            });
        }
    }, [activeIndex]);

    return (
        <div ref={catalog} className="custom-container min-h-screen">
            <div className="mt-10">
                <h1 className="catalog-animated text-4xl max-lg:text-3xl font-bold mb-8 text-white">Категории продукции</h1>
            </div>

            <div className="catalog-animated w-full flex items-center gap-4 max-sm:gap-3 overflow-scroll pb-5 mb-10 max-lg:mb-6 relative">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <p
                        key={i}
                        ref={(el: any) => (categoryRefs.current[i] = el)}
                        className={`max-lg:text-sm font-semibold py-2 px-5 max-sm:px-3 max-sm:py-1.5 rounded-full cursor-pointer border ${activeIndex === i ? 'border-green bg-white text-green' : 'border-white text-white'} hover:bg-white/80 hover:text-green duration-150`}
                        onClick={() => handleClick(i)}
                    >
                        категория
                    </p>
                ))}
            </div>

            <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-10 max-lg:gap-5 max-md:gap-x-3 max-md:gap-y-7 mb-10">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i: number) => (
                        <Link href={"#"} key={i} className="catalog-animated">
                            <div className="">
                                <Image
                                    src={"/images/img.png"}
                                    width={1000}
                                    height={1000}
                                    alt='product'
                                />
                            </div>
                            <div className="mt-3 text-white">
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
