import Categories from '@/components/children/Categories';
import CataloProducts from '@/components/children/CataloProducts';
import { Suspense } from 'react';

const Page = async ({ searchParams }: any) => {
    const category = searchParams['category'] ?? 'all'

    console.log(category);

    return (
        <div className="custom-container min-h-screen pt-14">
            <Categories />

            <Suspense fallback={'loading'}>
                <CataloProducts category={category} />
            </Suspense>
        </div>
    );
};

export default Page;
