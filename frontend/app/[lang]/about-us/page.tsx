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

            <section className="w-full h-screen relative z-10 bg-[url('/images/image-2.jpg')] bg-no-repeat bg-cover bg-center">
                <ExploreServices />
            </section>

            <section>
                <Vision />
            </section>

            <AboutPartners />

            <section>
                <div className="w-full h-[500px] max-md:h-80">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2869.183927942203!2d67.03235539348773!3d39.66736362034771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQwJzAzLjMiTiA2N8KwMDInMDQuMiJF!5e0!3m2!1sru!2s!4v1728681391438!5m2!1sru!2s"
                        width="100%"
                        height="100%"
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </>
    )
}

export default Page
