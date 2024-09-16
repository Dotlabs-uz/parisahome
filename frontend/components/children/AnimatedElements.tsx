"use client" // Это клиентский компонент

import { animateElementsOnScroll } from '@/lib/animations'
import { useEffect, useRef } from 'react'

const AnimatedElements = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (section) {
            const elements = section.querySelectorAll('.anim-element') // Находим элементы с нужным классом

            // Запускаем анимацию только на клиенте
            animateElementsOnScroll(elements)
        }
    }, [])

    return <div ref={sectionRef}></div> // Контейнер для отслеживания элементов
}

export default AnimatedElements
