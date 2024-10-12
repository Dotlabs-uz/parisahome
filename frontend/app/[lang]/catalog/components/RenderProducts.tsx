import getProducts from "@/actions/getProducts";
import Image from "next/image";
import Link from "next/link";

const RenderProducts = async ({ searchParams }: any) => {
    const page = searchParams["page"] || 1;
    const categoryId = searchParams["categoryId"]

    const products = await getProducts(page, categoryId);

    if(products.status == 500){
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
                    {products.data.map((i: any, idx: number) => (
                        <Link
                            href={`/${i.id}`}
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
                                            {i.name.toLocaleString("uz")}
                                        </p>
                                        <p>{i.price} сум</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>2 colors</p>
                                        <p className="text-white/50 line-through">
                                            $124
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default RenderProducts;
