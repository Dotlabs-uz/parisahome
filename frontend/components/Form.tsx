"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useRef } from 'react'
import { TfiEmail } from 'react-icons/tfi'

gsap.registerPlugin(ScrollTrigger)
const Form = () => {

    useGSAP(() => {
        gsap.from(".left-animation", {
            x: -50,
            opacity: 0,
            ease: "none",
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".left-animation",
                start: "center bottom",
                end: "center 70%",
                // scrub: true,
                // markers: true
            }
        })

        gsap.from(".right-animation", {
            x: 50,
            opacity: 0,
            ease: "none",
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".left-animation",
                start: "center bottom",
                end: "center 70%",
                // scrub: true,
                // markers: true
            }
        })

        gsap.from(".form-img", {
            x: 100,
            // opacity: 0,
            duration: 1,
            // stagger: 0.2,
            scrollTrigger: {
                trigger: ".form-img",
                start: "center bottom",
                end: "center 30%",
                // scrub: true,
                // markers: true
            }
        })
    })

    return (
        <div className="bg-white my-10 overflow-hidden form-section">
            <div className="custom-container flex max-md:flex-col gap-16 max-lg:gap-5 py-20">
                <div className="md:max-w-md w-full ">
                    <div className="text-black mb-5 max-sm:text-center">
                        <h2 className="text-3xl max-sm:text-2xl font-semibold left-animation">Остались вопросы?</h2>
                        <p className="text-xl max-md:text-lg max-sm:text-base left-animation">Заполните форму и мы с вами свяжемся</p>
                    </div>
                    <form>
                        <label className="w-full mb-3 max-sm:mb-2 block left-animation">
                            <p className="mb-1">Ваше имя</p>
                            <input
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="напишите свое имя здесь"
                            />
                        </label>
                        <label className="w-full mb-3 max-sm:mb-2 block left-animation">
                            <p className="mb-1">Ваш телефон</p>
                            <input
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="Напишите свой телефон"
                            />
                        </label>
                        <label className="w-full mb-3 max-sm:mb-2 block left-animation">
                            <p className="mb-1">Ваш email</p>
                            <input
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="Ваш email"
                            />
                        </label>
                        <label className="w-full mb-9 max-md:mb-5 block left-animation">
                            <p className="mb-1">Ваш комментарий</p>
                            <input
                                className="w-full py-1 px-3 max-sm:rounded-md border border-yellow bg-[#D9D9D966]"
                                type="text"
                                placeholder="Напишите свой комментарий"
                            />
                        </label>
                        <button className="bg-yellow text-white text-xl max-sm:text-base font-medium py-3 max-md:py-1.5 px-10 max-md:px-7 max-sm:px-4 rounded-full left-animation">Отправить</button>
                    </form>
                </div>

                <div className="w-full h-52 relative">
                    <div className="">
                        <h2 className="text-3xl max-md:text-2xl font-semibold right-animation">Oставайтесь на связи</h2>
                        <p className="flex gap-1 items-center text-xl max-sm:text-lg right-animation"><TfiEmail className="text-[18px] max-sm:text-[15px]" /> Parisa_home@gamil.com</p>
                    </div>

                    <div className="m-auto h-full w-fit flex items-center justify-center max-md:absolute -top-5 -right-10 select-none pointer-events-none form-img">
                        <Image
                            className="w-72 max-md:w-96"
                            src={"/images/flower-gary.svg"}
                            width={1000}
                            height={1000}
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
