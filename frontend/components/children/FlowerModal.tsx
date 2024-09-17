"use client"
import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const Model = ({ type }: any) => {
    const { scene } = useGLTF(`/models/${type}.gltf`) // goldMatteHigh silver goldMatte gold silverMatter
    const modelRef = useRef<any>()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Проверяем, является ли устройство мобильным
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkIsMobile()
        window.addEventListener('resize', checkIsMobile)

        return () => {
            window.removeEventListener('resize', checkIsMobile)
        }
    }, [])

    // Используем рефы для хранения положения мыши
    const mouseX = useRef(0)
    const mouseY = useRef(0)

    useEffect(() => {
        if (!isMobile) {
            const handleMouseMove = (event: MouseEvent) => {
                // Нормализуем координаты мыши в диапазоне от -1 до 1
                mouseX.current = (event.clientX / window.innerWidth) * 2 - 1
                mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1
            }

            // Добавляем глобальный обработчик движения мыши
            window.addEventListener('mousemove', handleMouseMove)

            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
            }
        }
    }, [isMobile])

    // Клонируем сцену при каждом рендере компонента, чтобы избежать проблем с повторным использованием одного объекта
    const clonedScene = scene.clone()

    // Обновляем вращение модели при каждом кадре
    useFrame(() => {
        if (modelRef.current) {
            if (isMobile) {
                // Плавное вращение по оси Y на мобильных устройствах
                modelRef.current.rotation.y += 0.01
            } else {
                // Поворачиваем модель по осям Y и X в зависимости от положения мыши на десктопе
                modelRef.current.rotation.y = mouseX.current * 0.2 // чувствительность по оси Y
                modelRef.current.rotation.x = mouseY.current * -0.1 // чувствительность по оси X
            }
        }
    })

    return <primitive object={clonedScene} scale={[20, 20, 20]} ref={modelRef} position={[0, -2, 0]} />
}

const FlowerModal = ({ type }: any) => {
    return (
        <Canvas className='threeD'>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={10000} />
            <Model type={type} />
        </Canvas>
    )
}

export default FlowerModal
