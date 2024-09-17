"use client"
import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Model = ({ type }: any) => {
    const { scene } = useGLTF(`/models/${type}.gltf`)
    const modelRef = useRef<any>()

    const clonedScene = scene.clone()

    useFrame(() => {
        // No changes to the scale or other properties, only rotation is applied
        if (modelRef.current) {
            // Leave the rotation control here for any future updates if needed
        }
    })

    useEffect(() => {
        // GSAP animation to rotate the model on scroll
        gsap.to(modelRef.current.rotation, {
            y: 10, // Rotate around the Y-axis (no scale changes)
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true, // Smooth the animation
            }
        });
    }, []);

    return <primitive object={clonedScene} scale={[20, 20, 20]} ref={modelRef} position={[0, -2, 0]} />
}

const FlowerRotate = ({ type }: any) => {
    return (
        <Canvas className='w-full h-full'>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1000} />
            <Model type={type} />
        </Canvas>
    )
}

export default FlowerRotate
