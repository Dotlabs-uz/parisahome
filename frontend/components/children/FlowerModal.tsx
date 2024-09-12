"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Model = () => {
    //   const { scene } = useGLTF('https://modelviewer.dev/shared-assets/models/Astronaut.glb')
    const { scene } = useGLTF('/models/silver.gltf')
    // Error: Could not load /models/silver.gltf: fetch for "http://localhost:3000/ru/models/silver.gltf" responded with 404: Not Found
    // http://localhost:3000/models/silver.gltf

    // короче если в браузере поставить вот эту http://localhost:3000/models/silver.gltf ссылку 
    // то он добавляет /ru http://localhost:3000/ru/models/silver.gltf вот так
    // иза это модельку не находит 

    // компонент исползуется в компонент Technologies контейнере

    return <primitive object={scene} scale={[1, 1, 1]} />
}

const FlowerModal = () => {
    return (
        <Canvas style={{ height: 400 }}>
            {/* Управление камерой */}
            <OrbitControls />
            {/* Освещение */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            {/* Отображаем модель */}
            <Model />
        </Canvas>
    )
}

export default FlowerModal
