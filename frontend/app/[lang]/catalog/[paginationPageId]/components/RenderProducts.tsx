import getProducts from "@/actions/getProducts";
import Pagination from "@/components/children/Pagination";
import Products from "./children/Products";

// const RenderProducts =  ({ searchParams, params }: any) => {
const RenderProducts = ({ arr, searchParams, total }: any) => {
    // const categoryId = searchParams["categoryId"]

    // const products = await getProducts(+params.paginationPageId, categoryId);

    // if (products.status == 500) {
    //     return "error"
    // }

    return (
        <>
            {arr.length == 0 ? (
                <p className="text-white text-center w-full">
                    Мы не смогли найти подходящих продуктов.
                </p>
            ) : (
                <Products products={arr} />
            )}
            <Pagination searchParams={searchParams} products={total} />
        </>
    );
};

export default RenderProducts;
