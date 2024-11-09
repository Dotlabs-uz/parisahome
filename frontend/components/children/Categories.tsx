"use client";
import { animateElementsOnScroll } from "@/lib/animations";
import gsap from "gsap";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Categories = ({ categories, searchParams }: any) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(+searchParams.categoryId || 0);
    const categoryRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const { push } = useRouter();
    const { lang } = useParams();
    const categoryTitle = `${lang}Title`;
    console.log(+searchParams.categoryId, "searchParams id");

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
            <div className="anim-element w-full relative flex items-center max-sm:grid grid-cols-2 gap-2 pb-5 mb-5 max-md:mb-3">
                {[{ ruTitle: "Все", uzTitle: "Hammasi", enTitle: "all", jpTitle: "全て", id: 0 }, ...categories].map((i: any, idx: number) => (
                    <button
                        key={idx}
                        ref={(el: any) => (categoryRefs.current[i.id] = el)}
                        className={`text-sm font-semibold text-center py-1.5 px-4 max-sm:px-3 max-sm:py-1.5 rounded-full cursor-pointer border border-yellow text-yellow duration-150`}
                        onClick={() => {
                            handleClick(i.id);
                            console.log(i.id, "product id");

                            if (i.ruTitle === "Все") {
                                push(`/${lang}/catalog/1`);
                            } else {
                                push(`/${lang}/catalog/1/?categoryId=${i.id}`);
                            }
                        }}
                    >
                        {i[categoryTitle]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Categories;
