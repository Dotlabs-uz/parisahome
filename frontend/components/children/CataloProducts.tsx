"use client"
import { animateElementsOnScroll } from '@/lib/animations'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const CataloProducts = ({ category }: any) => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const section = sectionRef.current
        if (section) {
            const elements = section.querySelectorAll('.anim-element')
            animateElementsOnScroll(elements)
        }
    }, [])

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setProducts(res.data)
                }
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div ref={sectionRef} className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-3 gap-y-7 mb-10 max-md:mb-5">
            {
                products.map((i: any, idx: number) => {
                    if (category === i.category.name) {
                        return (
                            <Link href={`/${i.id}`} key={idx} className="anim-element">
                                <div className="flex flex-col h-full w-full">
                                    <div className="w-full h-full">
                                        <Image
                                            className='w-full h-full object-cover'
                                            src={i.images[0].url}
                                            width={1000}
                                            height={1000}
                                            alt='product'
                                        />
                                    </div>
                                    <div className="mt-1.5 px-2 text-white">
                                        <div className="flex items-center justify-between">
                                            <p className='font-semibold'>{i.name.toLocaleString('uz')}</p>
                                            <p>{i.price} сум</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p>2 colors</p>
                                            <p className='text-white/50 line-through'>$124</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    } else if (category === "all") {
                        return (
                            <Link href={`/${i.id}`} key={idx} className="anim-element">
                                <div className="flex flex-col h-full w-full">
                                    <div className="w-full h-full">
                                        <Image
                                            className='w-full h-full object-cover'
                                            src={i.images[0].url}
                                            width={1000}
                                            height={1000}
                                            alt='product'
                                        />
                                    </div>
                                    <div className="mt-1.5 px-2 text-white">
                                        <div className="flex items-center justify-between">
                                            <p className='font-semibold'>{i.name.toLocaleString('uz')}</p>
                                            <p>{i.price} сум</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p>2 colors</p>
                                            <p className='text-white/50 line-through'>$124</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                })
            }
        </div>
    )
}

export default CataloProducts
