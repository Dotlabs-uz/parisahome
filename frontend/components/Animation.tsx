"use client"
import { animateElementsOnScroll } from '@/lib/animations'
import React, { useEffect, useRef } from 'react'

const Animation = ({ children }: any) => {
    const sectionRef = useRef<any>(null)

    useEffect(() => {
        const elements = sectionRef.current?.querySelectorAll('.anim-element')
        if (elements) {
            animateElementsOnScroll(elements)
        }
    }, [])

    return (
        <div className='anim-element'>
            {children}
        </div>
    )
}

export default Animation
