"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { animateElementsOnScroll } from '@/lib/animations'

const Partners = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (section) {
            const elements = section.querySelectorAll('.anim-element')
            animateElementsOnScroll(elements)
        }
    }, [])

    return (
        <div ref={sectionRef} className="custom-container">
            <div className="max-w-xl m-auto mb-16 max-md:mb-10 anim-element">
                <h2 className="text-2xl max-sm:text-xl font-extrabold text-center text-yellow">Наши партнёры  выбирают нас за непревзойденное качество</h2>
            </div>

            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-xs:grid-cols-1 gap-10 max-sm:gap-7">
                <div className="flex flex-col items-center gap-5 anim-element">
                    <div className="">
                        <Image
                            className="w-[160px]"
                            src={"/images/partners/partner-1.svg"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </div>
                    <div className="">
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">1Password</span> Мы заботимся о
                            древесинеи тщательно следим за всем
                            производственным процессом.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 anim-element">
                    <div className="">
                        <Image
                            className="w-[150px]"
                            src={"/images/partners/partner-2.svg"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </div>
                    <div className="">
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">Motive </span> - итальянский
                            производитель древесины, крупнейший
                            лидер рынка в Европе.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 anim-element">
                    <div className="">
                        <Image
                            className="w-[110px]"
                            src={"/images/partners/partner-3.svg"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </div>
                    <div className="">
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">Brex </span> создаёт уникальную
                            итальянскую мебель ручной работы,
                            как продолж ение вашего интерьера.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 anim-element">
                    <div className="">
                        <Image
                            className="w-[110px]"
                            src={"/images/partners/partner-4.svg"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </div>
                    <div className="">
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">Univision </span> воспроизводит
                            мебель ушедших эпох: ампир, барокко, рококо и многие другие.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners
