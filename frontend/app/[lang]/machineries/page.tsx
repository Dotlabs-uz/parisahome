import React from 'react'

import Technologies from '@/components/Technologies'
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
    const { technologiesComp } = await getDictionary(lang);

    return (
        <section className='pt-14'>
            <Technologies technologiesComp={technologiesComp} />
        </section>
    )
}

export default Page
