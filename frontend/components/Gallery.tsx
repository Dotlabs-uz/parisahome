"use client"
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Gallery = ({ galleryTitle, galleryButton, lang }: any) => {
    // const gallery = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/gallery`)
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/gallery`)
            .then((res) => {
                if (res.status === 200 || res.status === 200) {
                    setGallery(res.data);
                }
            })
    }, [])

    return (
        <>
            {gallery.length > 0 ? (
                <div
                    className="custom-container relative z-10 py-20 max-md:py-10 h-auto"
                >
                    <div className="py-7 max-md:py-5">
                        <h2 className="text-3xl max-sm:text-xl text-center text-yellow anim-element">
                            \\{galleryTitle}
                        </h2>
                    </div>

                    <Suspense fallback={"loading..."}>
                        <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-3 px-60 max-xl:px-40 max-lg:px-10 max-md:px-0 my-7">
                            {gallery.map((item: any, i: number) => (
                                <div
                                    key={item.id}
                                >
                                    <Image
                                        className="w-full h-full object-cover rounded-lg"
                                        src={item.url}
                                        data-src={item.url}
                                        width={200}
                                        height={300}
                                        alt="Gallery Image"
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={item.url}
                                        quality={5}
                                    />
                                </div>
                            ))}
                        </div>
                    </Suspense>

                    <Link href={`/${lang}/catalog/1`} className={"bg-yellow text-white w-fit font-medium py-3 px-9 mx-auto flex rounded-lg anim-element"}>
                        {galleryButton}
                    </Link>
                </div>
            ) : null}
        </>
    );
};

export default Gallery;
