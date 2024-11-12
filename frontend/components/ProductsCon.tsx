import axios from 'axios'
import React from 'react'
import Products from './Products'

const ProductsCon = async ({ products }: any) => {
    const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`)

    return (
        <div
            className="custom-container py-28 max-md:py-20 max-sm:py-10"
        >
            <div className="mb-16 max-md:mb-8 anim-element">
                <h2 className="text-3xl max-sm:text-xl text-center text-yellow">
                    \\{products.title}
                </h2>
            </div>

            <Products product={product.data.data} tran={products} />
        </div>
    )
}

export default ProductsCon
