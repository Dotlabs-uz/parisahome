"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const RenderCertificates = ({ certificate }: any) => {
    const { lang } = useParams()
    const certificateTitle = `${lang}Title`;
    const certificateDescription = `${lang}Description`;

    return (
        <div className="mb-10 grid grid-cols-3 max-lg:grid-cols-2 max-xs:grid-cols-1 gap-5 max-lg:gap-3 max-sm:gap-5">
            {
                certificate.map((i: any, idx: number) => (
                    <Link href={`/${lang}/certificates/${i.id}`} key={idx} className="">
                        <div className="h-40 max-sm:h-32 overflow-hidden">
                            <Image
                                className='h-full w-full object-cover rounded-md'
                                src={i.images[0].url}
                                width={1000}
                                height={1000}
                                alt="certificates"
                            />
                        </div>
                        <p className='mt-1 max-sm:text-sm text-white'>{i[certificateTitle]}</p>
                        <p className='max-sm:text-sm text-white'>{i[certificateDescription]}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default RenderCertificates
