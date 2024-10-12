import { Suspense } from "react";
import CategoriesContainer from "./components/CategoriesContainer";
import RenderProducts from "./components/RenderProducts";

const Page = async ({ searchParams }: any) => {
    return (
        <div className="custom-container min-h-screen pt-14">
            <Suspense fallback={<p>Loading...</p>}>
                <CategoriesContainer />
            </Suspense>

            <Suspense fallback={<p>Loading...</p>}>
                <RenderProducts searchParams={searchParams} />
            </Suspense>
        </div>
    );
};

export default Page;
