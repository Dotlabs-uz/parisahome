"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { animateElementsOnScroll } from '@/lib/animations'
import Link from 'next/link'

const Partners = ({ partnersCom }: any) => {
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
            <div className="max-w-3xl m-auto mb-16 max-md:mb-10 anim-element">
                <h2 className="text-2xl max-sm:text-xl font-extrabold text-center text-yellow">
                    {partnersCom.partnersTitle}
                </h2>
            </div>

            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-xs:grid-cols-1 gap-10 max-sm:gap-7">
                <div className="flex flex-col items-center gap-5 anim-element">
                    <Link href={"https://benningergroup.com/en/"} className="h-40 w-60">
                        <Image
                            className="w-full h-full object-contain"
                            src={"/images/partners/logo-5.webp"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </Link>
                    <div>
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">Benninger AG</span> – {partnersCom.benningerDescription}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 anim-element">
                    <Link href={"https://www.prashantgroup.com/"} className="h-40 w-60">
                        <Image
                            className="w-full h-full object-contain"
                            src={"/images/partners/logo-3.webp"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </Link>
                    <div className="">
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">Prashant Westpoint Group </span> – {partnersCom.prashantDescription}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 anim-element">
                    <Link href={"https://www.toyota-industries.com/index.html"} className="h-40 w-60">
                        <Image
                            className="w-full h-full object-contain"
                            src={"/images/partners/logo-2.webp"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </Link>
                    <div className="">
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">Toyota Industries Corporation (Airjet Looms) </span> – {partnersCom.toyotaDescription}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 anim-element">
                    <Link href={"https://www.dilmenler.com.tr/"} className="h-40 w-60">
                        <Image
                            className="w-full h-full object-contain"
                            src={"/images/partners/logo-4.webp"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </Link>
                    <div className="">
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">Dilmenler Tekstil Makinaları (Dilmenler Softflow Dyeing) </span> – {partnersCom.dilmenlerDescription}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 anim-element">
                    <Link href={"https://www.xetma.com/"} className="h-40 w-60">
                        <Image
                            className="w-full h-full object-contain"
                            src={"/images/partners/logo-1.webp"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </Link>
                    <div className="">
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">Xetma Vollenweider GmbH </span> – {partnersCom.xetmaDescription}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 anim-element">
                    <Link href={"https://www.juki.co.jp/en/"} className="h-40 w-60">
                        <Image
                            className="w-full h-full object-contain"
                            src={"/images/partners/logo-6.webp"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </Link>
                    <div className="">
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">Juki Corporation (Juki Stitching Machine) </span> – {partnersCom.jukiDescription}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 anim-element">
                    <Link href={"https://www.hashima.co.jp/en/"} className="h-40 w-60">
                        <Image
                            className="w-full h-full object-contain"
                            src={"/images/partners/logo-7.webp"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </Link>
                    <div className="">
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">Hashima Co., Ltd. </span> – {partnersCom.hashimaDescription}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 anim-element">
                    <Link href={"https://www.pentek.it/"} className="h-40 w-60">
                        <Image
                            className="w-full h-full object-contain"
                            src={"/images/partners/logo-8.webp"}
                            width={1000}
                            height={1000}
                            alt="logo"
                        />
                    </Link>
                    <div className="">
                        <p className="text-center text-sm leading-6">
                            <span className="text-yellow">Pentek Textile Machinery </span> – {partnersCom.pentekDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners
