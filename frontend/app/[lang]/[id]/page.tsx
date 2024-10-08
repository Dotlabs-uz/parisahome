import Fancybox from '@/components/Fancybox'
import React from 'react'

const page = () => {
    return (
        <div className='custom-container py-28'>
            <div className="mb-5">
                <p className='text-2xl font-medium text-white'>Lorem, ipsum.</p>
            </div>
            <Fancybox
                options={{
                    Carousel: {
                        infinite: false,
                    },
                }}
            >
                <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                    <img className='w-full h-full' src="https://lipsum.app/id/60/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
                    <img className='w-full h-full' src="https://lipsum.app/id/61/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
                    <img className='w-full h-full' src="https://lipsum.app/id/62/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
                    <img className='w-full h-full' src="https://lipsum.app/id/63/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
                    <img className='w-full h-full' src="https://lipsum.app/id/62/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
                    <img className='w-full h-full' src="https://lipsum.app/id/64/200x150" width="200" height="150" />
                </a>
            </Fancybox>
        </div>
    )
}

export default page
