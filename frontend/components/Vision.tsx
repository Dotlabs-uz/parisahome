"use clen"
import Image from 'next/image'
import React from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const Vision = () => {
    // useGSAP(() => {
    //     gsap.from("vision-text", {

    //     })
    // })

    return (
        <div className="custom-container h-screen flex items-center justify-center relative">
            <div className="w-96 max-md:w-80 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 select-none pointer-events-none">
                <Image
                    className='w-full h-full'
                    src={'/images/flower.svg'}
                    width={1000}
                    height={1000}
                    alt='img'
                />
            </div>

            <h2 className='text-white/50 text-4xl max-md:text-3xl max-sm:text-xl text-center max-w-[800px] vision-text'>
                «<span className='text-white'>Наше видение</span> — переосмыслить потенциал
                промышленного сектора посредством
                <span className='text-white'> инноваций</span> и <span className='text-white'>оптимизации»</span>.
            </h2>
        </div>
    )
}

export default Vision
