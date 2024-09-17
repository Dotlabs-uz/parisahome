"use client"
import { Suspense, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import FlowerModal from './children/FlowerModal'
import { animateElementsOnScroll } from '@/lib/animations'
import axios from 'axios'

const Technologies = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [machines, setMachines] = useState([]);

    useEffect(() => {
        const section = sectionRef.current
        if (section) {
            const elements = section.querySelectorAll('.anim-element')
            animateElementsOnScroll(elements)
        }
    }, [])

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/machines`)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setMachines(res.data.data)
                }
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    console.log(machines);

    return (
        <div ref={sectionRef} className="custom-container pb-10 pt-20">
            <div className="text-white">
                <div className="relative anim-element">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[75%] max-md:-translate-y-[100%] max-sm:hidden">
                        <FlowerModal type={"gold"} />
                    </div>
                    <div className="flex items-center justify-between mb-10 anim-element">
                        <div className="w-full flex max-sm:flex-col sm:items-center justify-between gap-3">
                            <h2 className="text-3xl max-sm:text-xl text-yellow">\\ТЕХНОЛОГИИ</h2>
                            <button className="w-fit text-sm max-sm:text-xs py-3 max-sm:py-2 px-8 max-sm:px-5 rounded-full border border-yellow">О КОМПАНИИ</button>
                        </div>
                        <div className="sm:hidden w-72 anim-element">
                            <FlowerModal type={"gold"} />
                        </div>
                    </div>
                    <div className="flex max-md:flex-col md:items-center md:justify-end gap-10 max-md:gap-2 anim-element">
                        <h2 className="max-w-md text-3xl max-lg:text-2xl max-sm:text-xl font-extrabold">Бренд идущий по пути технологических инноваций</h2>
                        <p className="max-w-sm text-sm md:text-end leading-6">Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные рынки своей продукцией</p>
                    </div>
                </div>

                <Suspense fallback={'loading'}>
                    <div className="grid grid-cols-3 max-md:grid-cols-2 max-xs:grid-cols-1 gap-5 mt-8 max-sm:px-5">
                        {
                            machines.map((i: any, idx: number) => (
                                <div key={idx} className="border-b-4 border-green hover:border-white max-sm:border-white anim-element">
                                    <div className="">
                                        <Image
                                            className='w-full h-full object-cover rounded-lg'
                                            src={i.image.url}
                                            width={1000}
                                            height={1000}
                                            alt="img"
                                        />
                                    </div>

                                    <div className="mt-8 max-lg:mt-3 px-4 max-lg:px-3">
                                        <h3 className="text-2xl text-center">{i.name}</h3>
                                        <p className="text-base max-lg:text-sm leading-6 my-5 max-lg:my-2">{i.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Suspense>
            </div>
        </div>
    )
}

export default Technologies
