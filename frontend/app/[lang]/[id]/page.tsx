import axios from 'axios'
import React from 'react'
import SwiperCom from './components/SwiperCom';

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
    const { data } = await axios.get(`${process.env.API_URL}/product/${id}`)

    return (
        <div>
            <SwiperCom data={data} />
        </div>
    )
}

export default ProductPage
