"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { animateElementsOnScroll } from "@/lib/animations";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Products = ({ product, tran }: any) => {
    const { lang } = useParams()
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const productDescription = `${lang}Description`;
    const productName = `${lang}Name`;

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
                        className=""
                        slidesPerView={1.5}
                        spaceBetween={20}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            540: {
                                slidesPerView: 2,
                            },
                            960: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {product !== null &&
                            product.map((i: any, idx: number) => (
                                <SwiperSlide
                                    key={idx}
                                    className="mb-10 p-3 max-sm:p-1.5 rounded-[20px] border border-[#EEEEEE]"
                                >
                                    <div className="w-full h-52 max-md:h-40">
                                        <Image
                                            className="w-full h-full object-cover rounded-lg"
                                            src={i.images[0].url}
                                            width={1000}
                                            height={1000}
                                            alt="img"
                                        />
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
