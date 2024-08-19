"use client"
import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
const Gallery = () => {
    const gallerSection = useRef(null)

    useGSAP(() => {
        const images = gsap.utils.toArray('.img');
        images.forEach((img: any) => {
            gsap.from(img, {
                y: 50,
                ease: "none",
                duration: 2,
                opacity: 0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: img,
                    // containerAnimation: img,
                    start: 'center bottom',
                    end: 'bottom 80%',
                    scrub: true,
                    // markers: true
                }
            })
        })

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
    }, { scope: gallerSection })

    return (
        <div ref={gallerSection} className="custom-container py-20 max-md:py-10 gallerySection">
            <hr className='border-none w-0 h-0.5 bg-green hr-1 galleryTitle' />
            <div className="py-7 max-md:py-5 ">
                <h2 className="text-3xl max-sm:text-xl text-center img text-yellow">\\НАША ГАЛЕРЕЯ</h2>
            </div>
            <div className="w-full h-0.5 hr-2 translate-y-0.5 bg-white"></div>
            <hr className='border-none w-full h-0.5 bg-green' />

            <div className="grid grid-cols-3 gap-3 px-60 max-xl:px-40 max-lg:px-10 my-7 max-md:hidden">
                <div className="flex flex-col gap-3">
                    {
                        [0, 1, 2, 3].map((i: number) => (
                            <div key={i} className={`${i == 0 ? "h-[25%]" : i == 1 ? "h-[25%]" : i == 2 ? "h-[25%]" : "h-[25%]"} img`}>
                                <Image
                                    className="w-full h-full object-cover rounded-lg"
                                    src={"/images/img.png"}
                                    width={1000}
                                    height={1000}
                                    alt="img"
                                />
                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-col gap-3">
                    {
                        [0, 1, 2, 3].map((i: number) => (
                            <div key={i} className={`${i == 0 ? "h-[30%]" : i == 1 ? "h-[25%]" : i == 2 ? "h-[25%]" : "h-[20%]"} img`}>
                                <Image
                                    className="w-full h-full object-cover rounded-lg"
                                    src={"/images/img.png"}
                                    width={1000}
                                    height={1000}
                                    alt="img"
                                />
                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-col gap-3">
                    {
                        [0, 1, 2, 3].map((i: number) => (
                            <div key={i} className={`${i == 0 ? "h-[25%]" : i == 1 ? "h-[20%]" : i == 2 ? "h-[35%]" : "h-[25%]"} img`}>
                                <Image
                                    className="w-full h-full object-cover rounded-lg"
                                    src={"/images/img.png"}
                                    width={1000}
                                    height={1000}
                                    alt="img"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="grid grid-cols-10 gap-1 my-5 md:hidden">
                {
                    [0, 1, 2, 3, 4, 5].map((i: number) => (
                        <div key={i} className={`${i == 0 ? "col-span-6" : i == 1 ? "col-span-4" : i == 2 ? "col-span-10" : i == 3 ? "col-span-4" : i == 4 ? "col-span-6" : "col-span-10"} img`}>
                            <Image
                                className="w-full h-40 object-cover rounded-md"
                                src={"/images/img.png"}
                                width={1000}
                                height={1000}
                                alt="img"
                            />
                        </div>
                    ))
                }
            </div>

            <button className="bg-yellow text-white font-medium py-3 px-9 mx-auto flex rounded-lg img">СМОТРЕТЬ ГАЛЕРЕЮ</button>
        </div>
    )
}

export default Gallery
