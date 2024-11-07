import getProducts from "@/actions/getProducts";
import Pagination from "@/components/children/Pagination";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import Products from "./children/Products";

const RenderProducts = async ({ searchParams, params }: any) => {
    const categoryId = searchParams["categoryId"]


    const products = await getProducts(+params.paginationPageId, categoryId);

    if (products.status == 500) {
        return "error"
    }

    return (
        <>
            {products.data.length == 0 ? (
                <p className="text-white text-center w-full">
                    Мы не смогли найти подходящих продуктов.
                </p>
            ) : (
                <Products products={products.data} />
            )}
            <Pagination searchParams={searchParams} products={products} />
        </>
    );
};

export default RenderProducts;
