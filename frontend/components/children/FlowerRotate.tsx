"use client"
import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Model = ({ type }: any) => {
    const { scene } = useGLTF(`/models/${type}.gltf`) // goldMatteHigh silver goldMatte gold silverMatter
    const modelRef = useRef<any>()

    const clonedScene = scene.clone()

    // Continuously rotate the model
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01 // Adjust the speed as needed
        }
    })

    return <primitive object={clonedScene} scale={[20, 20, 20]} ref={modelRef} position={[0, -2, 0]} />
}

const FlowerRotate = ({ type }: any) => {
    return (
        <Canvas className='w-full h-full'>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={10000} />
            <Model type={type} />
        </Canvas>
    )
}

export default FlowerRotate
