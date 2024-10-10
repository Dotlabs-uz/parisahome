import Image from 'next/image';
import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ZoomImageProps {
  src: string;
  alt: string;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt }) => {
  return (
    <Zoom>
      <Image
        className='w-full h-full pointer-events-none select-none rounded-2xl'
        src={src}
        width={1000}
        height={1000}
        alt={alt}
      />
    </Zoom>
  );
};

export default ZoomImage;
