import axios from 'axios'
import React from 'react'
import FAQ from './FAQ';

const FAQcon = async ({ faqTitle }: any) => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/question`)

    console.log(data);

    return (
        <div className="custom-container">
            <div className="py-20 max-md:py-10 max-sm:py-5 rounded-3xl shadow-md bg-white">
                <FAQ faqTitle={faqTitle} data={data} />
            </div>
        </div>
    )
}

export default FAQcon
