"use client";
import Lenis from '@studio-freight/lenis';
import React, { useEffect, useRef } from 'react';

const HeroVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.removeAttribute('controls');
        }
    }, []);

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })

    return (
        <div>
            <div className="h-[90vh] max-xl:h-[80vh] max-lg:h-[100%] w-full">
                <video ref={videoRef} preload="auto" autoPlay muted playsInline className="video w-full h-full object-cover select-none pointer-events-none">
                    <source src="/images/videos/v4.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="w-full h-[20%] absolute top-0 left-0 bg-gradient-to-b from-green" />
            <div className="w-full h-[20%] absolute -bottom-1 left-0 bg-gradient-to-t from-green" />
        </div>
    );
};

export default HeroVideo;
