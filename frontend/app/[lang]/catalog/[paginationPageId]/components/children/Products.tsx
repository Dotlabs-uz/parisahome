"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import Masonry from 'react-masonry-css'

const Products = ({ products }: any) => {
    const { lang } = useParams()
    const productName = `${lang}Name`;
    const productDescription = `${lang}Description`;

    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        500: 2
    };

    return (
        <div>
            <div
                // breakpointCols={breakpointColumnsObj}
                // className="my-masonry-grid"
                // columnClassName="my-masonry-grid_column"
                className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-3 gap-y-7 mb-10 max-md:mb-5"
            >
                {
                    products.length > 0 ? (
                        products.map((i: any, idx: number) => (
                            <Link
                                href={`/${lang}/${i.id}`}
                                key={idx}
                                className="anim-element h-fit"
                            >
                                <div className="flex flex-col h-full w-full">
                                    <div className="w-full h-80 overflow-hidden">
                                        <Image
                                            className="w-full h-full object-cover"
                                            src={i.images[0].url}
                                            width={300}
                                            height={300}
                                            alt="product"
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
                        ))
                    ) : (null)
                }
            </div>
        </div>
    )
}

export default Products
