"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { FaArrowRight } from 'react-icons/fa';
import ZoomImageWithEffects from './ZoomImage';
import ZoomImage from './ZoomImage';

const SwiperCom = ({ data }: any) => {
    const [swiperRef, setSwiperRef] = useState<any>(false);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    return (
        <div className='py-28'>
            <div className="custom-container flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <p className='text-8xl font-bold text-white'>{data.name}</p>
                    <div className="">
                        <p className='text-white'>модель/серия:</p>
                        <p className='text-6xl text-white'>{data.description}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button onClick={prevHandler} className='p-3 rounded-full border border-white'>
                        <FaArrowRight color='#fff' className='text-[20px] rotate-180' />
                    </button>
                    <button onClick={nextHandler} className='p-3 rounded-full border border-white'>
                        <FaArrowRight color='#fff' className='text-[20px]' />
                    </button>
                </div>
            </div>

            <Swiper
                className='mt-10 custom-swiper'
                slidesPerView={2}
                spaceBetween={20}
                centeredSlides
                onSwiper={(swiper) => setSwiperRef(swiper)}
            >
                {
                    data.images.map((img: { url: string, id: number }) => (
                        <SwiperSlide className='overflow-hidden rounded-2xl bg-[#555]' key={img.id} >
                            <ZoomImage src={img.url} alt="Your Image" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default SwiperCom
