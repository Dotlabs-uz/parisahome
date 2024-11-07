import axios from 'axios'
import React from 'react'
import SwiperCom from './components/SwiperCom';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const ProductPage = async ({ params: { id, lang } }: { params: { id: string, lang: Locale } }) => {
    const { data } = await axios.get(`${process.env.API_URL}/product/${id}`)
    const { product } = await getDictionary(lang);

    return (
        <div>
            <SwiperCom data={data} transition={product} />
        </div>
    )
}

export default ProductPage
