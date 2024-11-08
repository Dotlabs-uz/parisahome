import React, { Suspense } from 'react'
import axios from 'axios'
import RenderCertificates from './components/RenderCertificates'
import Categories from './components/Categories'
import getCertificates from '@/actions/getCertificates'
import { getDictionary } from '@/lib/dictionary'
import SkeletonCtegories from '@/components/skeletons/SkeletonCtegories'

const Page = async ({ searchParams, params: { lang } }: any) => {
    const { nav } = await getDictionary(lang);
    const categoryId = searchParams["categoryId"]
    const certificatesCategories = await axios.get(`${process.env.API_URL}/cert-category`)

    const certificate = await getCertificates(categoryId);

    return (
        <div className='custom-container h-screen pt-14'>
            <div className="">
                <h2 className='text-4xl max-lg:text-3xl font-bold my-8 certificates text-white'>{nav.link6}</h2>
                <Suspense fallback={<SkeletonCtegories />}>
                    <Categories categories={certificatesCategories.data} />
                </Suspense>
            </div>

            <Suspense fallback={'loading...'}>
                <RenderCertificates certificate={certificate} />
            </Suspense>
        </div>
    )
}

export default Page
