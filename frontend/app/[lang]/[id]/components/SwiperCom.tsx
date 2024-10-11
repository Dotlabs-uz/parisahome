"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import ZoomImage from "./ZoomImage"; // Импортируем компонент ZoomImage

import { FaArrowRight } from "react-icons/fa";
import { LuMinus, LuPlus } from "react-icons/lu";

const SwiperCom = ({ data }: any) => {
    const [swiperRef, setSwiperRef] = useState<any>(null);
    const [scale, setScale] = useState<number>(1); // Стандартное значение масштаба

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    const increaseScale = () => {
        setScale((prevScale) => prevScale + 0.5); // Увеличиваем масштаб на 0.5
    };

    const decreaseScale = () => {
        setScale((prevScale) => (prevScale > 1 ? prevScale - 0.5 : prevScale)); // Уменьшаем масштаб, но не меньше 1
    };

    return (
        <div className="py-28">
            <div className="custom-container flex justify-between sm:items-center">
                <div className="flex max-sm:flex-col sm:items-center sm:gap-5">
                    <p className="text-8xl max-xl:text-7xl max-md:text-6xl font-bold text-white">{data.name}</p>
                    <div>
                        <p className="text-white">модель/серия:</p>
                        <p className="text-6xl max-xl:text-5xl max-md:text-3xl text-white">{data.description}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button onClick={prevHandler} className="h-fit p-3 rounded-full border border-white">
                        <FaArrowRight color="#fff" className="text-[20px] rotate-180" />
                    </button>
                    <button onClick={nextHandler} className="h-fit p-3 rounded-full border border-white">
                        <FaArrowRight color="#fff" className="text-[20px]" />
                    </button>
                </div>
            </div>

            <Swiper
                className="mt-10 custom-swiper"
                slidesPerView={1.2}
                spaceBetween={5}
                centeredSlides
                onSwiper={(swiper) => setSwiperRef(swiper)}
                breakpoints={{
                    960: {
                        slidesPerView: 1.8,
                        spaceBetween: 20
                    }
                }}
            >
                {data.images.map((img: { url: string; id: number }) => (
                    <SwiperSlide className="w-fit overflow-hidden rounded-2xl bg-white/10" key={img.id}>
                        <ZoomImage src={img.url} alt="Your Image" scale={scale} /> {/* Передаем масштаб */}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-center items-center gap-5 mt-5">
                <button onClick={increaseScale} className="p-3 bg-white text-black rounded-full">
                    <LuPlus color="black" className="text-[20px]" />
                </button>
                <p className="w-20 text-xl text-center text-white">{scale} x</p>
                <button onClick={decreaseScale} className="p-3 bg-white text-black rounded-full">
                    <LuMinus color="black" className="text-[20px]" />
                </button>
            </div>
        </div>
    );
};

export default SwiperCom;
