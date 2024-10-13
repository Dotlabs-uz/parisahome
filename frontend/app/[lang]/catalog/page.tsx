import { Suspense } from "react";
import CategoriesContainer from "./components/CategoriesContainer";
import RenderProducts from "./components/RenderProducts";
import Pagination from "@/components/children/Pagination";

const Page = ({ searchParams }: any) => {
    // const handlePageChange = (page: number) => {
    //     console.log(page);
    // };

    return (
        <div className="custom-container min-h-screen pt-16">
            <Suspense fallback={<p>Loading...</p>}>
                <CategoriesContainer />
            </Suspense>

            <Suspense fallback={<p>Loading...</p>}>
                <RenderProducts searchParams={searchParams} />
            </Suspense>
            {/* <Pagination totalPages={10} itemsPerPage={5} onPageChange={handlePageChange} /> */}
        </div>
    );
};

export default Page;
