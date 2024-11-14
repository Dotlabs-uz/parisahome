import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import { Locale } from '@/i18n.config'

const page = async ({ params: { id, lang } }: { params: { id: string, lang: Locale } }) => {
    const { data } = await axios.get(`${process.env.API_URL}/certificate/${id}`)
    const title = `${lang}Title`
    const description = `${lang}Description`

    return (
        <div className="py-28 custom-container">
            <div className="mb-5 md:hidden">
                <p className="text-5xl max-md:text-3xl font-bold text-white">{data[title]}</p>
            </div>
            {data.images.map((img: { url: string; id: number }) => (
                <div key={img.id} className="mx-auto">
                    <Image
                        className="w-full h-full rounded-2xl"
                        src={img.url}
                        width={1000}
                        height={1000}
                        alt="img"
                    />
                </div>
            ))}

            <div className="mt-5 flex">
                <div className="w-1/2 max-md:hidden">
                    <p className="text-4xl max-md:text-3xl font-bold text-white">{data[title]}</p>
                </div>
                <div className="md:w-1/2">
                    <p className="text-base text-white">{data[description]}</p>
                </div>
            </div>
        </div>
    )
}

export default page