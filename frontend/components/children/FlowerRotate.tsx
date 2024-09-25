"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ModelProps {
    rotation: number[];
}

const Model = ({ rotation }: ModelProps) => {
    const { scene } = useGLTF(`/models/gold.gltf`); // Replace 'gold' with the model type if needed
    const modelRef = useRef<any>();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.set(rotation[0], rotation[1], rotation[2]);
        }
    });

    return <primitive object={scene} ref={modelRef} scale={[20, 20, 20]} position={[0, -2, 0]} />;
};

const FlowerRotate = ({ rotation }: ModelProps) => {
    return (
        <Canvas className='w-full h-full'>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1000} />
            <Model rotation={rotation} />
        </Canvas>
    );
};

export default FlowerRotate;
