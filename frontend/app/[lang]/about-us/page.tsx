import AboutPartners from '@/components/AboutPartners'
import AboutСompany from '@/components/AboutСompany'
import ExploreServices from '@/components/ExploreServices'
import HorizontalScroll from '@/components/HorizontalScroll'
import Vision from '@/components/Vision'

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

            <AboutPartners />

            <section>
                <div className="w-full h-96">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49142.89223643279!2d66.96584481728515!3d39.66252365922507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1728137893771!5m2!1sru!2s" width="100%" height="100%" loading="lazy"></iframe>
                </div>
            </section>
        </>
    )
}

export default Page
