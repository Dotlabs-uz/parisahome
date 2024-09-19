import axios from 'axios'
import Image from 'next/image'
import React, { Suspense } from 'react'

const Page = async () => {

    const certificate = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/certificate`)

    return (
        <div className='custom-container h-screen pt-14'>
            <div className="">
                <h2 className='text-4xl max-lg:text-3xl font-bold my-8 certificates text-white'>Сертификаты</h2>
            </div>

            <Suspense fallback={'loading'}>
                <div className="mb-10 grid grid-cols-3 max-md:grid-cols-2 gap-5 max-md:gap-2">
                    {
                        certificate.data.map((i: any, idx: number) => (
                            <div key={idx} className="certificates">
                                <Image
                                    className='h-full w-full object-cover'
                                    src={i.images[0].url}
                                    width={1000}
                                    height={1000}
                                    alt="certificates"
                                />
                            </div>
                        ))
                    }
                </div>
            </Suspense>

        </div>
    )
}

export default Page
