import React, { Suspense } from 'react';
import UpdateServer from './components/UpdateServer';
// import GoodsPage from './GoodsPage';

const Page = async ({ params: { machineUpdateId } }: any) => {
    // const page = searchParams['page'] || 1;
    // const categoryId = searchParams['categoryId'];

    // const goods = await getGoods(page, categoryId);

    // if (goods.status === 500) return <p>Something went wrong!</p>;

    return (
        <div className="bg-white p-5 rounded-xl">
            <Suspense fallback={"Loading.."}>
                <UpdateServer machineUpdateId={machineUpdateId} />
            </Suspense>
        </div>
    );
};

export default Page;
