import getProducts from "@/actions/getProducts";
import Pagination from "@/components/children/Pagination";
import Image from "next/image";
import Link from "next/link";

const RenderProducts = async ({ searchParams, params }: any) => {
    const categoryId = searchParams["categoryId"]
    const productName = `${params.lang}Name`;
    const productDescription = `${params.lang}Description`;

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
                <div className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-3 gap-y-7 mb-10 max-md:mb-5">
                    {
                        products.data.length > 0 ? (
                            products.data.map((i: any, idx: number) => (
                                <Link
                                    href={`/${params.lang}/${i.id}`}
                                    key={idx}
                                    className="anim-element"
                                >
                                    <div className="flex flex-col h-full w-full">
                                        <div className="w-full h-full">
                                            <Image
                                                className="w-full h-full object-cover"
                                                src={i.images[0].url}
                                                width={1000}
                                                height={1000}
                                                alt="product"
                                            />
                                        </div>
                                        <div className="mt-1.5 px-2 text-white">
                                            <div className="flex items-center justify-between">
                                                <p className="font-semibold">
                                                    {i[productName]}
                                                </p>
                                                <p>{i.price} $</p>
                                            </div>
                                            <p>{i[productDescription]}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (null)
                    }
                </div>
            )}
            <Pagination searchParams={searchParams} products={products} />
        </>
    );
};

export default RenderProducts;
