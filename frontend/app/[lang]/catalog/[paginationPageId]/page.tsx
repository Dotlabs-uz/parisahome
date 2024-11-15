"use client"
import { Suspense, useEffect, useState } from "react";
import CategoriesContainer from "./components/CategoriesContainer";
import RenderProducts from "./components/RenderProducts";
import SkeletonCatalog from "@/components/skeletons/SkeletonCatalog";
import SkeletonCtegories from "@/components/skeletons/SkeletonCtegories";
import action from "@/actions/actions"
import getProducts from "@/actions/getProducts";


// const Page = ({ searchParams, params }: any) => {
const Page = ({ searchParams, params }: any) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState();
    const categoryId = searchParams.categoryId

    let queryUrl = "";

    if (categoryId !== undefined) {
        queryUrl += `&categoryId=${categoryId}`
    }

    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/product?page=${params.paginationPageId}${queryUrl}`)
            .then(res => res.json())
            .then(res => { setProducts(res.data), setTotal(res.total) })
            .finally(() => setLoading(false))
    }, [params.paginationPageId, queryUrl])

    return (
        <div className="custom-container min-h-screen pt-16">
            <div className="mt-10 mb-5 max-md:mb-3 anim-element">
                <h1 className="text-4xl max-lg:text-3xl max-sm:text-2xl font-bold text-white">
                    Категории продукции
                </h1>
            </div>

            <CategoriesContainer searchParams={searchParams} />

            {
                loading ? <SkeletonCatalog /> : <RenderProducts arr={products} searchParams={searchParams} total={total} />
            }
        </div>
    );
};

export default Page;
