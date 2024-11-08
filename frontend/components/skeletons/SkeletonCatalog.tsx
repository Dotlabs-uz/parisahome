import React from 'react'

const SkeletonCatalog = () => {
    return (
        <div
            className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-3 gap-y-7 mb-10 max-md:mb-5"
        >
            {
                [0, 1, 2, 3].map((i) => (
                    <div key={i} className="">
                        <div className="w-full h-80 max-md:h-60 bg-black/30 animate-pulse"></div>
                        <div className="mt-1.5 px-2">
                            <div className="flex items-center justify-between">
                                <div className="h-4 w-20 rounded-full bg-black/30 animate-pulse"></div>
                                <div className="h-3 w-10 rounded-full bg-black/30 animate-pulse"></div>
                            </div>
                            <div className="h-4 mt-2 w-full rounded-full bg-black/30 animate-pulse"></div>
                            <div className="h-4 mt-2 w-full rounded-full bg-black/30 animate-pulse"></div>
                            <div className="h-4 mt-2 w-1/2 rounded-full bg-black/30 animate-pulse"></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SkeletonCatalog
