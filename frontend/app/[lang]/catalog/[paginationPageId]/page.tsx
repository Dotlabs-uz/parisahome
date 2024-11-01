import { Suspense } from "react";
import CategoriesContainer from "./components/CategoriesContainer";
import RenderProducts from "./components/RenderProducts";
import Pagination from "@/components/children/Pagination";

const Page = ({ searchParams, params }: any) => {
    return (
        <div className="custom-container min-h-screen pt-16">
            <Suspense fallback={<p>Loading...</p>}>
                <CategoriesContainer />
            </Suspense>

            <Suspense fallback={<p>Loading...</p>}>
                <RenderProducts searchParams={searchParams} params={params} />
            </Suspense>
        </div>
    );
};

export default Page;
