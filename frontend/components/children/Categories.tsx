"use client";
import { animateElementsOnScroll } from "@/lib/animations";
import gsap from "gsap";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Categories = ({ categories }: any) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const categoryRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const { replace, push } = useRouter();
    const { lang } = useParams();

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const section = sectionRef.current;
        if (section) {
            const elements = section.querySelectorAll(".anim-element");
            animateElementsOnScroll(elements);
        }
    }, []);

    useEffect(() => {
        if (activeIndex !== null) {
            gsap.to(categoryRefs.current[activeIndex], {
                backgroundColor: "#EF9D4E",
                color: "#022B26",
                borderColor: "#EF9D4E",
                duration: 0.3,
                ease: "power1.out",
            });

            categoryRefs.current.forEach((category, i) => {
                if (i !== activeIndex) {
                    gsap.to(category, {
                        backgroundColor: "transparent",
                        color: "#EF9D4E",
                        borderColor: "#EF9D4E",
                        duration: 0.3,
                        ease: "power1.out",
                    });
                }
            });
        }
    }, [activeIndex]);

    return (
        <div ref={sectionRef}>
            <div className="mt-10 mb-5 max-md:mb-3 anim-element">
                <h1 className="text-4xl max-lg:text-3xl max-sm:text-2xl font-bold text-white">
                    Категории продукции
                </h1>
            </div>

            <div className="anim-element w-full relative flex items-center max-sm:grid grid-cols-2 gap-2 pb-5 mb-5 max-md:mb-3">
                {[{ name: "all" }, ...categories].map((i: any, idx: number) => (
                    <button
                        key={idx}
                        ref={(el: any) => (categoryRefs.current[idx] = el)}
                        className={`text-sm font-semibold text-center py-1.5 px-4 max-sm:px-3 max-sm:py-1.5 rounded-full cursor-pointer border border-yellow text-yellow duration-150`}
                        onClick={() => {
                            handleClick(idx);
                            if (i.name === "all") {
                                push(`/${lang}/catalog/1`);
                            } else {
                                push(`/${lang}/catalog/1/?categoryId=${i.id}`);
                            }
                        }}
                    >
                        {i.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Categories;
