/* eslint-disable @next/next/no-img-element */
"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const Products = ({ products }: any) => {
    const { lang } = useParams()
    const productName = `${lang}Name`;
    const productDescription = `${lang}Description`;


    return (
        <div>
            <div
                className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-3 gap-y-7 mb-10 max-md:mb-5"
            >
                {
                    products.map((i: any, idx: number) => {
                        const mainImage = i.images.find((img: any) => img.isMain) || i.images[0];
                        console.log(mainImage);

                        return (
                            <Link
                                href={`/${lang}/${i.id}`}
                                key={idx}
                                className="anim-element h-fit"
                            >
                                <div className="flex flex-col h-full w-full">
                                    <div className="w-full h-80 max-md:h-60 overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={mainImage.url}
                                            // width={300}
                                            // height={300}
                                            alt="product"
                                            // unoptimized
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="mt-1.5 px-2 text-white">
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold">
                                                {i[productName]}
                                            </p>
                                            <p>{i.price !== 0 && `${i.price} $`}</p>
                                        </div>
                                        <p className="custom-truncate">{i[productDescription]}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
