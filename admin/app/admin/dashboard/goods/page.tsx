import React from 'react';
import { GoodsTable } from './GoodsTable';
import getGoods from '@/lib/getGoods';
import PaginationComponent from './components/Pagination';
import GoodsForm from './components/GoodsForm';
// import GoodsPage from './GoodsPage';

const GoodsPage = async ({ searchParams }: any) => {
    const page = searchParams['page'] || 1;
    const categoryId = searchParams['categoryId'];

    const goods = await getGoods(page, categoryId);

    if (goods.status === 500) return <p>Something went wrong!</p>;

    return (
        <div className='bg-white p-5 rounded-xl'>
            <h1 className='text-2xl font-bold mb-4 text-black'>
                Goods Management
            </h1>

            <div className='mb-5'>
                <GoodsForm />
            </div>

            <GoodsTable goods={goods} />
            <PaginationComponent searchParams={searchParams} goods={goods} />
        </div>
    );
};

export default GoodsPage;
