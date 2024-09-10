"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page = () => {

    useGSAP(() => {
        gsap.from(".certificates", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        })
    })

    return (
        <div className='custom-container h-screen'>
            <div className="">
                <h2 className='text-4xl max-lg:text-3xl font-bold my-8 certificates text-white'>Сертификаты</h2>
            </div>
            <div className="mb-10 grid grid-cols-3 gap-5">
                <div className="max-w-xs certificates">
                    <img src="https://parisahome.com/sites/default/files/20.HUZ_.26946-en%20OEKO-TEX-1%282%29_0.jpg" alt="certificates" />
                </div>
            </div>
        </div>
    )
}

export default Page
