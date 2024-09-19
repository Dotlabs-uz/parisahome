"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { TfiEmail } from 'react-icons/tfi'
import { animateElementsOnScrollRight } from '@/lib/animations'
import FlowerModal from './children/FlowerModal'

const Form = () => {
    const sectionRef = useRef<any>(null)

    useEffect(() => {
        const elementsRight = sectionRef.current?.querySelectorAll('.anim-element-right')
        if (elementsRight) {
            animateElementsOnScrollRight(elementsRight, 50)
        }

        const elementsLeft = sectionRef.current?.querySelectorAll('.anim-element-left')
        if (elementsLeft) {
            animateElementsOnScrollRight(elementsLeft, -50)
        }
    }, [])

    return (
        <div ref={sectionRef} className="bg-white my-10 overflow-hidden">
            <div className="custom-container flex max-md:flex-col gap-16 max-lg:gap-5 py-20">
                <div className="md:max-w-md w-full anim-element-left">
                    <div className="text-black mb-5 max-sm:text-center">
                        <h2 className="text-3xl max-sm:text-2xl font-semibold">Остались вопросы?</h2>
                        <p className="text-xl max-md:text-lg max-sm:text-base">Заполните форму и мы с вами свяжемся</p>
                    </div>
                    <form>
                        <label className="w-full mb-3 max-sm:mb-2 block">
                            <p className="mb-1">Ваше имя</p>
                            <input
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="напишите свое имя здесь"
                            />
                        </label>
                        <label className="w-full mb-3 max-sm:mb-2 block">
                            <p className="mb-1">Ваш телефон</p>
                            <input
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="Напишите свой телефон"
                            />
                        </label>
                        <label className="w-full mb-3 max-sm:mb-2 block">
                            <p className="mb-1">Ваш email</p>
                            <input
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="Ваш email"
                            />
                        </label>
                        <label className="w-full mb-9 max-md:mb-5 block">
                            <p className="mb-1">Ваш комментарий</p>
                            <input
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="Напишите свой комментарий"
                            />
                        </label>
                        <button className="bg-yellow text-white text-xl max-sm:text-base font-medium py-3 max-md:py-1.5 px-10 max-md:px-7 max-sm:px-4 rounded-full">
                            Отправить
                        </button>
                    </form>
                </div>

                <div className="w-full relative anim-element-right">
                    <div>
                        <h2 className="text-3xl max-md:text-2xl font-semibold">Oставайтесь на связи</h2>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg">
                            <TfiEmail className="text-[18px] max-sm:text-[15px]" /> Parisa_home@gamil.com
                        </p>
                    </div>

                    <div className="flex items-center justify-center w-96 h-72 max-md:w-full max-md:h-60">
                        <FlowerModal type={"silver"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
