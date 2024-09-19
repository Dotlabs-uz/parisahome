"use client"
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { animateElementsOnScroll } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
    const sectionRef = useRef<any>(null)

    useEffect(() => {
        const elements = sectionRef.current?.querySelectorAll('.anim-element')
        if (elements) {
            animateElementsOnScroll(elements)
        }

        gsap.to('.hr-1', {
            width: "100%",
            scrollTrigger: {
                trigger: ".galleryTitle",
                start: "center bottom",
                end: "center center",
                scrub: 1,
                // markers: true
            }
        })

        gsap.to('.hr-2', {
            width: "0%",
            scrollTrigger: {
                trigger: ".galleryTitle",
                start: "center bottom",
                end: "center center",
                scrub: 1,
                // markers: true
            }
        })
    }, [])

    return (
        <div ref={sectionRef} className="custom-container py-20 max-md:py-10 h-auto">
            <hr className='border-none w-0 h-0.5 bg-green hr-1 galleryTitle' />
            <div className="py-7 max-md:py-5">
                <h2 className="text-3xl max-sm:text-xl text-center text-yellow anim-element">\\НАША ГАЛЕРЕЯ</h2>
            </div>
            <div className="w-full h-0.5 hr-2 translate-y-0.5 bg-white"></div>
            <hr className='border-none w-full h-0.5 bg-green' />

            <div className="grid grid-cols-3 gap-3 px-60 max-xl:px-40 max-lg:px-10 my-7 max-md:hidden md:grid">
                <div className="flex flex-col gap-3">
                    {[0, 1, 2, 3].map((i: number) => (
                        <div key={i} className={`${i == 0 ? "h-[30%]" : i == 1 ? "h-[20%]" : i == 2 ? "h-[35%]" : "h-[25%]"} anim-element`}>
                            <Image
                                className="w-full h-full object-cover rounded-lg"
                                src={"/images/img.png"}
                                width={1000}
                                height={1000}
                                alt="img"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    {[0, 1, 2, 3].map((i: number) => (
                        <div key={i} className={`${i == 0 ? "h-[40%]" : i == 1 ? "h-[25%]" : i == 2 ? "h-[20%]" : "h-[15%]"} anim-element`}>
                            <Image
                                className="w-full h-full object-cover rounded-lg"
                                src={"/images/img.png"}
                                width={1000}
                                height={1000}
                                alt="img"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    {[0, 1, 2, 3].map((i: number) => (
                        <div key={i} className={`${i == 0 ? "h-[35%]" : i == 1 ? "h-[25%]" : i == 2 ? "h-[30%]" : "h-[10%]"} anim-element`}>
                            <Image
                                className="w-full h-full object-cover rounded-lg"
                                src={"/images/img.png"}
                                width={1000}
                                height={1000}
                                alt="img"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-10 gap-1 my-5 md:hidden">
                {[0, 1, 2, 3, 4, 5].map((i: number) => (
                    <div
                        key={i}
                        className={`${i == 0 ? "col-span-6 h-[150px]" :
                            i == 1 ? "col-span-4 h-[150px]" :
                                i == 2 ? "col-span-10 h-[150px]" :
                                    i == 3 ? "col-span-4 h-[150px]" :
                                        i == 4 ? "col-span-6 h-[150px]" :
                                            "col-span-10 h-[150px]"
                            } anim-element`}
                    >
                        <Image
                            className="w-full h-full object-cover rounded-md"
                            src={"/images/img.png"}
                            width={1000}
                            height={1000}
                            alt="img"
                        />
                    </div>
                ))}
            </div>

            <button className="bg-yellow text-white font-medium py-3 px-9 mx-auto flex rounded-lg anim-element">СМОТРЕТЬ ГАЛЕРЕЮ</button>
        </div>
    )
}

export default Gallery
