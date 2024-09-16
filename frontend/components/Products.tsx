"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { animateElementsOnScroll } from '@/lib/animations';

const Products = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (section) {
            const elements = section.querySelectorAll('.anim-element')
            animateElementsOnScroll(elements)
        }
    }, [])

    return (
        <div ref={sectionRef} className="custom-container py-28 max-md:py-20 max-sm:py-10">
            <div className="mb-16 max-md:mb-8 anim-element">
                <h2 className="text-3xl max-sm:text-xl text-center text-yellow">\\ПРОДУКЦИЯ</h2>
            </div>

            <Swiper
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
                {
                    [0, 1, 2, 3].map((i: number) => (
                        <SwiperSlide key={i} className='mb-16 max-md:mb-10 anim-element'>
                            <div className="p-3 max-sm:p-1.5 rounded-[20px] border border-[#EEEEEE]">
                                <div className="md">
                                    <Image
                                        src={"/images/product-img.png"}
                                        width={1000}
                                        height={1000}
                                        alt='img'
                                    />
                                </div>
                                <div className="">
                                    <div className="my-3 border-l-[3px] pl-3 border-yellow">
                                        <p className='text-xl max-sm:text-base font-bold'>Полотенца, которые впечатляют!</p>
                                    </div>
                                    <p className='text-sm max-sm:text-xs max-sm:font-medium leading-6 max-sm:leading-5 mb-5'>
                                        Один из самых необыкновенных проектов нашей
                                        компании - полотенца в старинном стиле.
                                    </p>
                                    <Link href={"#"} className='text-sm max-sm:text-xs font-extrabold underline m-auto'>
                                        Читать полностью
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Products
