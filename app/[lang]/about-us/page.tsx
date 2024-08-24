import AboutPartners from '@/components/AboutPartners'
import AboutСompany from '@/components/AboutСompany'
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
                <div className="custom-container flex max-md:flex-col gap-5 max-md:gap-8 py-20 max-md:py-10">
                    <div className="about-partner">
                        <div className=" h-[500px] max-xl:h-[400px] max-lg:h-[350px] max-md:h-[300px] relative z-10 flex flex-col justify-between p-6 max-lg:p-3 rounded-md overflow-hidden border-2 border-white">
                            <div className="w-full h-full absolute -z-10 top-0 left-0 bg-black/30"></div>
                            <Image
                                className='w-full h-full absolute -z-20 top-0 left-0 object-cover'
                                src={"/images/image-2.png"}
                                width={1000}
                                height={1000}
                                alt='img'
                            />
                            <Image
                                className='w-36 mb-'
                                src={"/images/vector.svg"}
                                width={1000}
                                height={1000}
                                alt='vector'
                            />
                            <p className='text-sm leading-6 max-md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные рынки своей продукцией </p>
                        </div>
                        <div className="mt-3">
                            <p className='text-xs leading-5 md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные рынки своей продукцией </p>
                        </div>
                    </div>
                    <div className="about-partner">
                        <div className="h-[500px] max-xl:h-[400px] max-lg:h-[350px] max-md:h-[300px] relative z-10 flex flex-col justify-between p-6 max-lg:p-3 rounded-md overflow-hidden border-2 border-white">
                            <div className="w-full h-full absolute -z-10 top-0 left-0 bg-black/30"></div>
                            <Image
                                className='w-full h-full absolute -z-20 top-0 left-0 object-cover'
                                src={"/images/image-2.png"}
                                width={1000}
                                height={1000}
                                alt='img'
                            />
                            <Image
                                className='w-36 mb-'
                                src={"/images/vector.svg"}
                                width={1000}
                                height={1000}
                                alt='vector'
                            />
                            <p className='text-sm leading-6 max-md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные рынки своей продукцией</p>
                        </div>
                        <div className="mt-3">
                            <p className='text-xs leading-5 md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО Sam Rafoat Textile. В начале эта компания начала производить плющ. С 2009 года ООО Sam Rafoat Текстиль обеспечивал местные рынки своей продукцией </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
