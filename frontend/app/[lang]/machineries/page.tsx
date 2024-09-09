"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)
const Page = () => {

    useGSAP(() => {
        const right = gsap.utils.toArray('.right');
        right.forEach((el: any) => {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    // containerAnimation: img,
                    start: 'center bottom',
                    end: 'bottom 80%',
                    // scrub: true,
                    // markers: true
                }
            })
        })
        const left = gsap.utils.toArray('.left');
        left.forEach((el: any) => {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    // containerAnimation: img,
                    start: 'center bottom',
                    end: 'bottom 80%',
                    // scrub: true,
                    // markers: true
                }
            })
        })

    })

    return (
        <div className='custom-container machineries'>
            <div className="flex max-lg:flex-col-reverse items-center justify-between pt-20">
                <div className="w-2/5 max-lg:w-full flex flex-col max-lg:mt-5 right">
                    <h3 className='text-3xl font-semibold mb-2 text-white'>Pivotex Hemming Machine</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti nobis. Et rerum cum, possimus, deleniti culpa quidem repudiandae deserunt similique reiciendis maxime ipsa quod veniam. Sed ad tempora eos!</p>
                    <button className='w-fit font-medium uppercase mt-10 max-md:mt-5 px-10 py-2 rounded-full bg-yellow text-white'>more</button>
                </div>
                <div className="w-1/2 max-md:w-2/3 left">
                    <img
                        className='w-full h-full object-cover'
                        src='https://parisahome.com/sites/default/files/styles/medium/public/dryer-machine-500x500_2.jpg?itok=0oCIRuTX'
                        alt='machineries'
                    />
                </div>
            </div>
            <div className="flex max-lg:flex-col items-center justify-between max-lg:mt-10">
                <div className="w-1/2 max-md:w-2/3 right">
                    <img
                        className='w-full h-full object-cover'
                        src='https://parisahome.com/sites/default/files/styles/medium/public/hqdefault_0.jpg?itok=j7OLC2x5'
                        alt='machineries'
                    />
                </div>
                <div className="w-2/5 max-lg:w-full flex flex-col lg:text-right lg:items-end max-lg:mt-5 left">
                    <h3 className='text-3xl font-semibold mb-2 text-white'>Xetma Vollenweider GmbH Optima XPS-3000</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti nobis. Et rerum cum, possimus, deleniti culpa quidem repudiandae deserunt similique reiciendis maxime ipsa quod veniam. Sed ad tempora eos!</p>
                    <button className='w-fit font-medium uppercase mt-10 max-md:mt-5 px-10 py-2 rounded-full bg-yellow text-white'>more</button>
                </div>
            </div>
            <div className="flex max-lg:flex-col-reverse items-center justify-between max-lg:mt-10">
                <div className="w-2/5 max-lg:w-full flex flex-col max-lg:mt-5 right">
                    <h3 className='text-3xl font-semibold mb-2 text-white'>Prashant sizing machine</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti nobis. Et rerum cum, possimus, deleniti culpa quidem repudiandae deserunt similique reiciendis maxime ipsa quod veniam. Sed ad tempora eos!</p>
                    <button className='w-fit font-medium uppercase mt-10 max-md:mt-5 px-10 py-2 rounded-full bg-yellow text-white'>more</button>
                </div>
                <div className="w-1/2 max-md:w-2/3 bg-white p-10 left">
                    <img
                        className='w-full h-full object-cover'
                        src='https://parisahome.com/sites/default/files/styles/medium/public/Prashant%20sizing_0.png?itok=Bbfmptz9'
                        alt='machineries'
                    />
                </div>
            </div>
            <div className="flex max-lg:flex-col items-center justify-between pb-20 max-lg:mt-10">
                <div className="w-1/2 max-md:w-2/3 right">
                    <img
                        className='w-full h-full object-cover'
                        src='https://parisahome.com/sites/default/files/styles/medium/public/machine_1.jpg?itok=MTtscK8S'
                        alt='machineries'
                    />
                </div>
                <div className="w-2/5 max-lg:w-full flex flex-col max-lg:mt-5 lg:text-right lg:items-end left">
                    <h3 className='text-3xl max-xl:text-2xl font-semibold mb-2 text-white'>JAT810 AIR JET LOOM (TOYOTA)</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti nobis. Et rerum cum, possimus, deleniti culpa quidem repudiandae deserunt similique reiciendis maxime ipsa quod veniam. Sed ad tempora eos!</p>
                    <button className='w-fit font-medium uppercase mt-10 max-md:mt-5 px-10 py-2 rounded-full bg-yellow text-white'>more</button>
                </div>
            </div>
        </div>
    )
}

export default Page
