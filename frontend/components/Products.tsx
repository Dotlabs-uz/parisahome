"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";

import { animateElementsOnScroll } from "@/lib/animations";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Products = ({ productsTitle }: any) => {
    const { lang } = useParams()
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [products, setProducts] = useState<any>(null);
    const productDescription = `${lang}Description`;
    const productName = `${lang}Name`;

    useEffect(() => {
        const section = sectionRef.current;
        if (section) {
            const elements = section.querySelectorAll(".anim-element");
            animateElementsOnScroll(elements);
        }
    }, []);

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/product`)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setProducts(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div
            ref={sectionRef}
            className="custom-container py-28 max-md:py-20 max-sm:py-10"
        >
            <div className="mb-16 max-md:mb-8 anim-element">
                <h2 className="text-3xl max-sm:text-xl text-center text-yellow">
                    \\{productsTitle}
                </h2>
            </div>

            <Suspense fallback={"loading"}>
                <Swiper
                    className="anim-element"
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
                    {products !== null &&
                        products.data.map((i: any, idx: number) => (
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
                                        Посмотреть
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Suspense>
        </div>
    );
};

export default Products;
