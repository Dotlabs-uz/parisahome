
import Products from './Products'
import { getData } from '@/lib/https.request'

const ProductsCon = async ({ products }: any) => {

    const product = await getData('/product')

    if(product.status === 500 ){
        return null;
    }
    
    return (
        <div
            className="custom-container py-28 max-md:py-20 max-sm:py-10"
        >
            <div className="mb-16 max-md:mb-8 anim-element">
                <h2 className="text-3xl max-sm:text-xl text-center text-yellow">
                    \\{products.title}
                </h2>
            </div>

            <Products product={product.data} tran={products} />
        </div>
    )
}

export default ProductsCon
