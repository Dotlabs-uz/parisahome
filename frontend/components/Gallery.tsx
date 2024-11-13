/* eslint-disable @next/next/no-img-element */
// "use client";
import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateElementsOnScroll } from "@/lib/animations";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Gallery = async ({ galleryTitle, galleryButton, lang }: any) => {
    const gallery = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/gallery`)
    // const [gallery, setGallery] = useState<any>(null);
    // const sectionRef = useRef<any>(null);

    // const { lang } = useParams()

    // useEffect(() => {
    //     const elements = sectionRef.current?.querySelectorAll(".anim-element");
    //     if (elements) {
    //         animateElementsOnScroll(elements);
    //     }

    //     gsap.to(".hr-1", {
    //         width: "100%",
    //         scrollTrigger: {
    //             trigger: ".galleryTitle",
    //             start: "center bottom",
    //             end: "center center",
    //             scrub: 1,
    //             // markers: true
    //         },
    //     });

    //     gsap.to(".hr-2", {
    //         width: "0%",
    //         scrollTrigger: {
    //             trigger: ".hr-2",
    //             start: "center bottom",
    //             end: "bottom center",
    //             scrub: 1,
    //             // markers: true
    //         },
    //     });
    // }, []);

    // useEffect(() => {
    //     axios.get(`${process.env.NEXT_PUBLIC_API_URL}/gallery`).then((res) => {
    //         if (res.status == 200 || res.status == 201) {
    //             setGallery(res.data);
    //         }
    //     });
    // }, []);

    return (
        <>
            {gallery ? (
                <div
                    // ref={sectionRef}
                    className="custom-container py-20 max-md:py-10 h-auto bg-white"
                >
                    {/* <hr className="border w-0 h-0.5 bg-green hr-1 galleryTitle" /> */}
                    <div className="py-7 max-md:py-5">
                        <h2 className="text-3xl max-sm:text-xl text-center text-yellow anim-element">
                            \\{galleryTitle}
                        </h2>
                    </div>
                    {/* <hr className="border- hr-2 w-0 h-0.5 bg-green" /> */}

                    <Suspense fallback={"loading..."}>
                        <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-3 px-60 max-xl:px-40 max-lg:px-10 max-md:px-0 my-7">
                            {gallery.data.map((item: any, i: number) => (
                                <div
                                    key={item.id}
                                // className={`${i == 0
                                //     ? "h-[30%]"
                                //     : i == 1
                                //         ? "h-[20%]"
                                //         : i == 2
                                //             ? "h-[35%]"
                                //             : "h-[25%]"
                                //     } anim-element`}
                                >
                                    <img
                                        className="w-full h-full object-cover rounded-lg"
                                        src={item.url}
                                        alt="img"
                                    />
                                </div>
                            ))}

                            {/* <div className="flex flex-col gap-3">
                                {gallery.data.slice(4, 8).map((item: any, i: number) => (
                                    <div
                                        key={item.id}
                                    // className={`${i == 0
                                    //     ? "h-[40%]"
                                    //     : i == 1
                                    //         ? "h-[25%]"
                                    //         : i == 2
                                    //             ? "h-[20%]"
                                    //             : "h-[15%]"
                                    //     } anim-element`}
                                    >
                                        <img
                                            className="w-full h-full object-cover rounded-lg"
                                            src={item.url}
                                            alt="img"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-3">
                                {gallery.data
                                    .slice(8, 12)
                                    .map((item: any, i: number) => (
                                        <div
                                            key={item.id}
                                        // className={`${i == 0
                                        //     ? "h-[35%]"
                                        //     : i == 1
                                        //         ? "h-[25%]"
                                        //         : i == 2
                                        //             ? "h-[30%]"
                                        //             : "h-[10%]"
                                        //     } anim-element`}
                                        >
                                            <img
                                                className="w-full h-full object-cover rounded-lg"
                                                src={item.url}
                                                alt="img"
                                            />
                                        </div>
                                    ))}
                            </div> */}
                        </div>

                        {/* <div className="grid grid-cols-2 gap-1 my-5 md:hidden">
                            {gallery.data.slice(0, 5).map((item: any, i: number) => (
                                <div
                                    key={item.id}
                                // className={`${i == 0
                                //     ? "col-span-6 h-[150px]"
                                //     : i == 1
                                //         ? "col-span-4 h-[150px]"
                                //         : i == 2
                                //             ? "col-span-10 h-[150px]"
                                //             : i == 3
                                //                 ? "col-span-4 h-[150px]"
                                //                 : i == 4
                                //                     ? "col-span-6 h-[150px]"
                                //                     : "col-span-10 h-[150px]"
                                //     } anim-element`}
                                >
                                    <img
                                        className="w-full h-full object-cover rounded-md"
                                        src={item.url}
                                        alt="img"
                                    />
                                </div>
                            ))}
                        </div> */}
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
