"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { animateElementsOnScroll } from '@/lib/animations';

const AboutСompany = () => {
    // const main = useRef(null);

    // useGSAP(() => {
    //     const texts = gsap.utils.toArray('.text');
    //     texts.forEach((text: any) => {
    //         gsap.from(text, {
    //             x: 50,
    //             opacity: 0,
    //             stagger: 0.2,
    //             scrollTrigger: {
    //                 trigger: text,
    //                 // containerAnimation: ".text",
    //                 start: 'bottom bottom',
    //                 end: 'top 50%',
    //                 // scrub: true,
    //                 markers: true
    //             }
    //         });
    //     })
    // }, { scope: main })

    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (section) {
            const elements = section.querySelectorAll('.anim-element')
            animateElementsOnScroll(elements)
        }
    }, [])

    return (
        <div ref={sectionRef} className="about-company custom-container flex max-lg:flex-col gap-10 justify-between max-lg:items-center pt-32 max-md:pt-12 pb-20 max-md:pb-10 text-white">
            <div className="lg:w-full">
                <div className="max-w-sm w-full max-lg:w-80 max-lg:h-[300px] relative anim-element">
                    <div className="absolute -z-10 top-3 -right-3 max-sm:-right-2 max-sm:top-2 w-full h-full rounded-md bg-white/30 border border-white"></div>
                    <Image
                        className="w-full h-full object-cover rounded-md hover:translate-x-3 hover:translate-y-3 duration-500 ease-in-out"
                        src={"/images/image.png"}
                        width={1000}
                        height={1000}
                        alt='img'
                    />
                </div>
            </div>

            <div className="flex flex-col gap-12 max-xl:gap-7 max-w-xl max-xl:max-w-none w-full">
                <div className="flex gap-32 max-xl:gap-10 max-lg:gap-5 items-start justify-between anim-element">
                    <div className="max-md:hidden">
                        <p className='text-4xl font-medium underline underline-offset-4'>01</p>
                    </div>
                    <div className="lg:max-w-[417px]">
                        <div className="flex gap-4 max-md:mb-2">
                            <p className='text-4xl font-medium underline underline-offset-4 md:hidden'>01</p>
                            <h2 className='text-3xl max-xl:text-2xl md:mb-2'>Ориентированный на производительность</h2>
                        </div>
                        <p className='text-sm leading-[23.8px]'>
                            Мы стремимся к максимальной эффективности на каждом этапе нашего производства, используя передовые технологии и оптимизируя процессы. Наша цель — создавать продукцию, которая отвечает самым высоким стандартам качества и долговечности.
                        </p>
                    </div>
                </div>
                <div className="flex gap-32 max-xl:gap-10 max-lg:gap-5 items-start justify-between anim-element">
                    <div className="max-md:hidden">
                        <p className='text-4xl font-medium underline underline-offset-4'>02</p>
                    </div>
                    <div className="lg:max-w-[417px]">
                        <div className="flex gap-4 max-md:mb-2">
                            <p className='text-4xl font-medium underline underline-offset-4 md:hidden'>02</p>
                            <h2 className='text-3xl max-xl:text-2xl md:mb-2'>Ориентированных на клиента</h2>
                        </div>
                        <p className='text-sm leading-[23.8px]'>
                            Каждое наше решение основывается на потребностях наших клиентов. Мы внимательно прислушиваемся к их отзывам и стремимся создавать продукты, которые дарят комфорт, удобство и удовлетворяют запросы современного покупателя.
                        </p>
                    </div>
                </div>
                <div className="flex gap-32 max-xl:gap-10 max-lg:gap-5 items-start justify-between anim-element">
                    <div className="max-md:hidden">
                        <p className='text-4xl font-medium underline underline-offset-8'>03</p>
                    </div>
                    <div className="lg:max-w-[417px]">
                        <div className="flex gap-4 max-md:mb-2">
                            <p className='text-4xl font-medium underline underline-offset-8 md:hidden'>03</p>
                            <h2 className='text-3xl max-xl:text-2xl md:mb-2'>Инновационный</h2>
                        </div>
                        <p className='text-sm leading-[23.8px]'>
                            Мы постоянно ищем новые решения и внедряем инновации в производственные процессы. Используя новейшие разработки в текстильной индустрии, мы создаём продукцию, которая сочетает в себе как функциональность, так и стиль.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutСompany
