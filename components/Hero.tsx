"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
    return (
        <Swiper
            className='h-[90vh] max-sm:h-[85vh]'
            slidesPerView={1}
            loop
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
        >
            {
                [0, 1, 2].map((i: number) => (
                    <SwiperSlide key={i}>
                        <div className="h-full relative flex flex-col gap-5 items-center justify-center text-white">
                            <Image
                                className='w-full h-full absolute z-[-1] top-0 left-0 object-cover'
                                src={"/images/hero-img.png"}
                                width={1000}
                                height={1000}
                                alt='img'
                            />
                            <h1 className='text-9xl max-lg:text-8xl text-center max-lg:leading-[75px]'>Parisa Home</h1>
                            <h2 className='text-4xl max-lg:text-3xl text-center'>Полотенца, которые впечатляют!</h2>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default Hero
