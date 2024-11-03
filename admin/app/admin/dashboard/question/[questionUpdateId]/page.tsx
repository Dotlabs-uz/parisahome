import React, { Suspense } from 'react';
import UpdateServer from './components/UpdateServer';

const Page = async ({ params: { questionUpdateId } }: any) => {
    // const page = searchParams['page'] || 1;
    // const categoryId = searchParams['categoryId'];

    // const goods = await getGoods(page, categoryId);

    // if (goods.status === 500) return <p>Something went wrong!</p>;

    return (
        <div className="bg-white p-5 rounded-xl">
            <Suspense fallback={"Loading.."}>
                <UpdateServer questionUpdateId={questionUpdateId} />
            </Suspense>
        </div>
    );
};

export default Page;
