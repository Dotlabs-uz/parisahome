import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Обязательно зарегистрируйте ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Анимация для элементов
export const animateElementsOnScroll = (elements: NodeListOf<Element>, options = {}) => {
    elements.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,   // Начальное состояние элемента (скрыт)
                y: 50,        // Начальная позиция (ниже на 50 пикселей)
            },
            {
                opacity: 1,   // Финальное состояние (полная видимость)
                y: 0,         // Возвращаем элемент на место
                duration: 1.5,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: element,    // Каждая анимация привязана к своему элементу
                    start: 'top 90%',    // Запуск анимации, когда верх элемента достигает 90% высоты окна
                    toggleActions: 'play none none none', // Запускается только один раз при прокрутке
                    // markers: true,
                    // scrub: 1,
                    ...options,
                },
            }
        )
    })
}

export const animateElementsOnScrollRight = (elementsRight: NodeListOf<Element>, position: number, options = {}) => {
    elementsRight.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: position,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    ...options,
                },
            }
        )
    })
}
