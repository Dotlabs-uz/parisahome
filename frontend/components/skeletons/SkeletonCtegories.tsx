import React from 'react'

const SkeletonCtegories = () => {
    return (
        <div className="anim-element w-full relative flex items-center max-sm:grid grid-cols-2 gap-2 pb-5 mb-5 max-md:mb-3">
            {
                [0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-center w-40 h-10 px-4 rounded-full border-2 border-[#555555] animate-pulse">
                        <div className="h-5 w-full rounded-full bg-[#555555]"></div>
                    </div>
                ))
            }
        </div>
    )
}

export default SkeletonCtegories
