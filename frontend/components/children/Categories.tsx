"use client"
import { animateElementsOnScroll } from '@/lib/animations';
import axios from 'axios';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const categoryRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [categories, setCategories] = useState([]);
    const { push } = useRouter()

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

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category`)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setCategories(res.data)
                }
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div ref={sectionRef}>
            <div className="mt-10 mb-5 max-md:mb-3 anim-element">
                <h1 className="text-4xl max-lg:text-3xl max-sm:text-2xl font-bold text-white">Категории продукции</h1>
            </div>

            <div className="anim-element w-full relative flex items-center max-sm:grid grid-cols-2 gap-2 pb-5 mb-5 max-md:mb-3">
                {categories.map((i: any, idx: number) => (
                    <button
                        key={i.id}
                        ref={(el: any) => (categoryRefs.current[idx] = el)}
                        className={`text-sm font-semibold text-center py-1.5 px-4 max-sm:px-3 max-sm:py-1.5 rounded-full cursor-pointer border border-yellow text-yellow duration-150`}
                        onClick={() => { handleClick(idx), push(`?category=${i.name}`) }}
                    >
                        {i.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Categories
