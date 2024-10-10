"use client"
import Image from 'next/image';
import React, { useState } from 'react';

interface ZoomImageProps {
    src: string;
    alt: string;
    scale: number
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt, scale = 1.5 }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomPosition, setZoomPosition] = useState<any>({ x: 'center', y: 'center' });

    const handleMouseMove = (e: any) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100; // Позиция по X в процентах
        const y = ((e.clientY - top) / height) * 100; // Позиция по Y в процентах

        setZoomPosition({ x, y });
        setIsZoomed(true); // Включаем увеличение
    };

    const handleMouseLeave = () => {
        setZoomPosition({ x: 'center', y: 'center' }); // Сбрасываем позицию
        setIsZoomed(false); // Отключаем увеличение
    };

    return (
        <div
            className="image-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                className='w-full h-full pointer-events-none select-none rounded-2xl image zoomed'
                style={{
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    transform: isZoomed ? `scale(${scale})` : 'scale(1)', // Управляем увеличением через пропс
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
