import { Suspense } from "react";
import CategoriesContainer from "./components/CategoriesContainer";
import RenderProducts from "./components/RenderProducts";
import SkeletonCatalog from "@/components/skeletons/SkeletonCatalog";
import SkeletonCtegories from "@/components/skeletons/SkeletonCtegories";
import action from "@/actions/actions"

const Page = ({ searchParams, params }: any) => {
    action('product');

    return (
        <div className="custom-container min-h-screen pt-16">
            <div className="mt-10 mb-5 max-md:mb-3 anim-element">
                <h1 className="text-4xl max-lg:text-3xl max-sm:text-2xl font-bold text-white">
                    Категории продукции
                </h1>
            </div>

            <Suspense fallback={<SkeletonCtegories />}>
                <CategoriesContainer searchParams={searchParams} />
            </Suspense>

            <Suspense fallback={<SkeletonCatalog />}>
                <RenderProducts searchParams={searchParams} params={params} />
            </Suspense>
        </div>
    );
};

export default Page;
