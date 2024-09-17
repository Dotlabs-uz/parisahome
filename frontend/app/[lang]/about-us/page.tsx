import AboutPartners from '@/components/AboutPartners'
import AboutСompany from '@/components/AboutСompany'
import TextAnimation from '@/components/children/TextAnimation'
import ExploreServices from '@/components/ExploreServices'
import HorizontalScroll from '@/components/HorizontalScroll'
import Vision from '@/components/Vision'
import Image from 'next/image'

const Page = () => {

    return (
        <>
            <section>
                <HorizontalScroll />
            </section>

            <section>
                <AboutСompany />
            </section>

            <section className="w-full h-screen relative z-10 bg-[url('/images/hero-img.png')] bg-no-repeat bg-cover bg-center">
                <ExploreServices />
            </section>

            <section>
                <Vision />
            </section>

            <section>
                <AboutPartners />
            </section>

            <section>
                
            </section>
        </>
    )
}

export default Page
