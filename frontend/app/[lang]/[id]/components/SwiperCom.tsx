"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import ZoomImage from "./ZoomImage"; // Импортируем компонент ZoomImage

import { FaArrowRight } from "react-icons/fa";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";

const SwiperCom = ({ data, transition }: any) => {
    const { lang } = useParams()
    const router = useRouter()
    const [swiperRef, setSwiperRef] = useState<any>(null);
    const [scale, setScale] = useState<number>(1.5); // Стандартное значение масштаба
    const productDescription = `${lang}Description`;
    const productName = `${lang}Name`;

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
            <div className="custom-container">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2s ml-auto px-3 py-1.5 rounded-md bg-yellow text-white"
                >
                    <IoIosArrowBack className="text-[20px]" />
                    назад
                </button>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <p className="text-white">{transition.model}</p>
                        <p className="text-8xl max-xl:text-7xl max-md:text-6xl font-bold text-white">{data[productName]}</p>
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
            </div>

            <Swiper
                className="mt-10 max-sm:mt-5 custom-swiper"
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
                        <ZoomImage src={img.url} alt="Image" scale={scale} />
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
            <p className="text-center text-white">{transition.zoom}</p>
            <div className="custom-container pt-10">
                <p className="text-xl text-white">{data[productDescription]}</p>
            </div>
        </div>
    );
};

export default SwiperCom;
