"use client";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { animateElementsOnScroll } from "@/lib/animations";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Virtual } from "swiper/modules";

import "swiper/css";
// import "swiper/css/pagination";

const Products = ({ product, tran }: any) => {
    const { lang } = useParams()
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const productDescription = `${lang}Description`;
    const productName = `${lang}Name`;

    const shuffledProducts = useMemo(() => {
        const array = [...product];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }, [product]);

    useEffect(() => {
        const section = sectionRef.current;
        if (section) {
            const elements = section.querySelectorAll(".anim-element");
            animateElementsOnScroll(elements);
        }
    }, []);

    return (
        <>
            <Suspense fallback={"loading"}>
                <div
                    ref={sectionRef}
                >
                    <Swiper
                        className="cursor-grab"
                        slidesPerView={1.2}
                        // centeredSlides={true}
                        spaceBetween={10}
                        modules={[Virtual]}
                        breakpoints={{
                            540: {
                                slidesPerView: 2.2,
                                spaceBetween: 15
                            },
                            960: {
                                slidesPerView: 3.2,
                                spaceBetween: 20
                            },
                        }}
                    >
                        {product !== null &&
                            shuffledProducts.map((i: any, idx: number) => (
                                <SwiperSlide
                                    key={idx}
                                    className="mb-10 p-3 max-sm:p-1.5 rounded-[20px] border border-[#EEEEEE]"
                                >
                                    <div className="w-full h-52 max-md:h-40 bg-cover rounded-lg bg-bottom" style={{ backgroundImage: `url(${i.images[0].url})` }}>
                                        {/* <Image
                                            className="w-full h-full object-cover rounded-lg"
                                            src={i.images[0].url}
                                            width={100}
                                            height={100}
                                            alt="img"
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL={i.images[0].url}
                                        /> */}
                                    </div>

                                    <div className="">
                                        <div className="my-3 border-l-[3px] pl-3 border-yellow">
                                            <p className="text-xl max-sm:text-base font-bold">
                                                {i[productName]}
                                            </p>
                                        </div>
                                        <p className="text-sm max-sm:text-xs max-sm:font-medium leading-6 max-sm:leading-5 mb-5">
                                            {i[productDescription]}
                                        </p>
                                        <Link
                                            href={`/${lang}/${i.id}`}
                                            className="text-sm max-sm:text-xs font-extrabold underline m-auto"
                                        >
                                            {tran.show}
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </Suspense>
        </>
    );
};

export default Products;
