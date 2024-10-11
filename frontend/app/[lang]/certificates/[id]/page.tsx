import React from 'react'
import axios from 'axios'
import Image from 'next/image'

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const { data } = await axios.get(`${process.env.API_URL}/certificate/${id}`)

    return (
        <div className="py-28 custom-container">
            <div className="mb-5 md:hidden">
                <p className="text-5xl max-md:text-3xl font-bold text-white">{data.title}</p>
            </div>
            {data.images.map((img: { url: string; id: number }) => (
                <div key={img.id} className="">
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
                    <p className="text-5xl max-md:text-3xl font-bold text-white">{data.title}</p>
                </div>
                <div className="md:w-1/2">
                    <p className="text-xl max-md:text-base text-white">{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default page