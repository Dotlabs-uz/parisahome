"use client"
import Image from 'next/image';
import React, { useState } from 'react';

interface ZoomImageProps {
    src: string;
    alt: string;
    scale?: number;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt, scale = 1.5 }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomPosition, setZoomPosition] = useState<any>({ x: 'center', y: 'center' });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100; // X position in percentage
        const y = ((e.clientY - top) / height) * 100; // Y position in percentage
        setZoomPosition({ x, y });
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((touch.clientX - left) / width) * 100;
        const y = ((touch.clientY - top) / height) * 100;
        setZoomPosition({ x, y });
        setIsZoomed(true);
    };

    const handleTouchEnd = () => {
        setIsZoomed(false);
    };

    return (
        <div
            className="image-container relative overflow-hidden cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <Image
                className="w-full h-full pointer-events-none select-none rounded-2xl image zoomed"
                style={{
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    transform: isZoomed ? `scale(${scale})` : 'scale(1)',
                    transition: 'transform 0.2s ease-in-out', // Smooth zoom
                }}
                src={src}
                width={1000}
                height={1000}
                alt={alt}
            />
        </div>
    );
};

export default ZoomImage;
