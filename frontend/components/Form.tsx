"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { TfiEmail } from 'react-icons/tfi'
import { animateElementsOnScroll } from '@/lib/animations'
import FlowerModal from './children/FlowerModal'
import InputMask from 'react-input-mask';
import axios from 'axios'

type Inputs = {
    name: string
    phone: string
    email: string
    message: string
}

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>()
    const sectionRef = useRef<any>(null)
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, data)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    console.log(res);
                    setIsSubmitSuccessful(true)
                }
            }).catch((err) => console.log(err))
        setIsSubmitSuccessful(false)
    }

    useEffect(() => {
        reset({
            name: "",
            phone: "",
            email: "",
            message: "",
        })
    }, [isSubmitSuccessful])

    useEffect(() => {
        const elements = sectionRef.current?.querySelectorAll('.anim-element')
        if (elements) {
            animateElementsOnScroll(elements)
        }
    }, [])

    return (
        <div ref={sectionRef} className="bg-white my-10 overflow-hidden">
            <div className="custom-container flex max-md:flex-col gap-16 max-lg:gap-5 py-20">
                <div className="md:max-w-md w-full">
                    <div className="text-black mb-5 max-sm:text-center anim-element">
                        <h2 className="text-3xl max-sm:text-2xl font-semibold">Остались вопросы?</h2>
                        <p className="text-xl max-md:text-lg max-sm:text-base">Заполните форму и мы с вами свяжемся</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="w-full mb-3 max-sm:mb-2 block anim-element">
                            <p className="mb-1">Ваше имя</p>
                            <input
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="напишите свое имя здесь"
                                {...register("name")}
                            />
                        </label>
                        <label className="w-full mb-3 max-sm:mb-2 block anim-element">
                            <p className="mb-1">Ваш телефон</p>
                            <InputMask
                                mask="+\9\98 (99) 999-99-99"
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="Напишите свой телефон"
                                {...register("phone")}
                            />
                        </label>
                        <label className="w-full mb-3 max-sm:mb-2 block anim-element">
                            <p className="mb-1">Ваш email</p>
                            <input
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="Ваш email"
                                {...register("email")}
                            />
                        </label>
                        <label className="w-full mb-9 max-md:mb-5 block anim-element">
                            <p className="mb-1">Ваш комментарий</p>
                            <input
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="Напишите свой комментарий"
                                {...register("message")}
                            />
                        </label>
                        <button className="bg-yellow text-white text-xl max-sm:text-base font-medium py-3 max-md:py-1.5 px-10 max-md:px-7 max-sm:px-4 rounded-full anim-element">
                            Отправить
                        </button>
                    </form>
                </div>

                <div className="w-full relative">
                    <div className='anim-element'>
                        <h2 className="text-3xl max-md:text-2xl font-semibold">Oставайтесь на связи</h2>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg">
                            <TfiEmail className="text-[18px] max-sm:text-[15px]" /> Parisa_home@gamil.com
                        </p>
                    </div>

                    <div className="flex items-center justify-center w-96 h-72 max-md:w-full max-md:h-60 anim-element">
                        <FlowerModal type={"silver"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
