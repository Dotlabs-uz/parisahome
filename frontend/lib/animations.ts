import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Обязательно зарегистрируйте ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Анимация для элементов
export const animateElementsOnScroll = (elements: NodeListOf<Element>, options = {}) => {
    gsap.fromTo(
        elements,
        {
            opacity: 0,   // Начальное состояние элемента (скрыт)
            y: 50,        // Начальная позиция (ниже на 50 пикселей)
        },
        {
            opacity: 1,   // Финальное состояние (полная видимость)
            y: 0,         // Возвращаем элемент на место
            duration: 1.5,
            ease: 'power4.out',
            stagger: 0.2, // Добавляем задержку между анимацией элементов
            scrollTrigger: {
                trigger: (elements[0] as HTMLElement), // Используем первый элемент в качестве триггера
                start: 'top 80%',     // Когда верх элемента достигает 80% высоты окна
                toggleActions: 'play none none none', // Запускается только один раз при прокрутке
                ...options,
            },
        }
    )
    // elements.forEach((element, index) => {
    //     gsap.fromTo(
    //         element,
    //         {
    //             opacity: 0,   // Начальное состояние элемента (скрыт)
    //             y: 50,        // Начальная позиция (ниже на 50 пикселей)
    //         },
    //         {
    //             opacity: 1,   // Финальное состояние (полная видимость)
    //             y: 0,         // Возвращаем элемент на место
    //             duration: 1.5,
    //             ease: 'power4.out',
    //             stagger: 0.2, // Добавляем задержку между анимацией элементов
    //             scrollTrigger: {
    //                 trigger: element, // Используем текущий элемент в качестве триггера
    //                 start: 'top 85%',     // Когда верх элемента достигает 80% высоты окна
    //                 toggleActions: 'play none none none', // Запускается только один раз при прокрутке
    //                 // scrub: 1,
    //                 markers: true,
    //                 ...options,
    //             },
    //         }
    //     )
    // })
}
