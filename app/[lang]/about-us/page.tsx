import HorizontalScroll from '@/components/HorizontalScroll'
import Image from 'next/image'

const Page = () => {
    return (
        <>
            <section>
                <HorizontalScroll />
            </section>

            <section>
                <div className="custom-container flex max-lg:flex-col gap-10 justify-between max-lg:items-center pt-32 max-md:pt-12 pb-20 max-md:pb-10 text-white">
                    <div className="h-fit">
                        <div className="max-w-sm max-lg:w-80 max-lg:h-[300px] relative">
                            <div className="absolute -z-10 top-3 -right-3 max-sm:-right-2 max-sm:top-2 w-full h-full rounded-md bg-white/30 border border-white"></div>
                            <Image
                                className='w-full h-full object-cover rounded-md'
                                src={"/images/image.png"}
                                width={1000}
                                height={1000}
                                alt='img'
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 max-xl:gap-7 max-w-xl max-xl:max-w-none w-fit">
                        <div className="flex gap-32 max-xl:gap-10 max-lg:gap-5 items-start justify-between">
                            <div className="max-md:hidden">
                                <p className='text-4xl font-medium underline underline-offset-4'>01</p>
                            </div>
                            <div className="lg:max-w-[417px]">
                                <div className="flex gap-4 max-md:mb-2">
                                    <p className='text-4xl font-medium underline underline-offset-4 md:hidden'>01</p>
                                    <h2 className='text-3xl max-xl:text-2xl md:mb-2'>Ориентированный на производительность</h2>
                                </div>
                                <p className='text-sm leading-[23.8px]'>
                                    Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-32 max-xl:gap-10 max-lg:gap-5 items-start justify-between">
                            <div className="max-md:hidden">
                                <p className='text-4xl font-medium underline underline-offset-4'>02</p>
                            </div>
                            <div className="lg:max-w-[417px]">
                                <div className="flex gap-4 max-md:mb-2">
                                    <p className='text-4xl font-medium underline underline-offset-4 md:hidden'>02</p>
                                    <h2 className='text-3xl max-xl:text-2xl md:mb-2'>Ориентированных на клиента</h2>
                                </div>
                                <p className='text-sm leading-[23.8px]'>
                                    Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-32 max-xl:gap-10 max-lg:gap-5 items-start justify-between">
                            <div className="max-md:hidden">
                                <p className='text-4xl font-medium underline underline-offset-8'>03</p>
                            </div>
                            <div className="lg:max-w-[417px]">
                                <div className="flex gap-4 max-md:mb-2">
                                    <p className='text-4xl font-medium underline underline-offset-8 md:hidden'>03</p>
                                    <h2 className='text-3xl max-xl:text-2xl md:mb-2'>Инновационный</h2>
                                </div>
                                <p className='text-sm leading-[23.8px]'>
                                    Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full h-screen relative z-10 bg-[url("/images/hero-img.png")] bg-no-repeat bg-cover bg-center'>
                <div className="absolute -z-10 top-0 left-0 w-full h-full bg-black/50" />
                <div className="custom-container h-full w-full">
                    <div className="max-w-xl py-10 max-md:py-14 max-md:mb-5">
                        <Image
                            className='w-96 mb-3'
                            src={"/images/parisahome.svg"}
                            width={1000}
                            height={1000}
                            alt='img'
                        />
                        <p className='text-[56px] max-xl:text-5xl max-lg:text-4xl max-md:text-3xl leading-[50.97px] text-white/50'>специализируется на полотенцах и общепромышленной продукции.</p>
                    </div>
                    <div className="w-full max-w-[430px] flex flex-col justify-end pb-32 ml-auto">
                        <p className='text-sm font-light leading-[23.8px] mb-5 text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией </p>
                        <button className='w-fit max-md:text-sm font-medium py-3 max-md:py-2 px-10 max-md:px-6 max-md:m-auto rounded-lg bg-yellow text-white'>ИЗУЧИТЬ УСЛУГИ</button>
                    </div>
                </div>
            </section>

            <section>
                <div className="custom-container h-screen flex items-center justify-center relative">
                    <div className="w-96 max-md:w-80 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <Image
                            className='w-full h-full'
                            src={'/images/flower.svg'}
                            width={1000}
                            height={1000}
                            alt='img'
                        />
                    </div>
                    <h2 className='text-white/50 text-4xl max-md:text-3xl max-sm:text-xl text-center max-w-[800px]'>
                        «<span className='text-white'>Наше видение</span> — переосмыслить потенциал
                        промышленного сектора посредством
                        <span className='text-white'> инноваций</span> и <span className='text-white'>оптимизации»</span>.
                    </h2>
                </div>
            </section>

            <section>
                <div className="custom-container flex gap-24 max-xl:gap-10 justify-between py-20">
                    <div className="flex flex-col items-center justify-between pt-10 pb-20 max-md:hidden">
                        <h2 className='text-[56px] max-xl:text-4xl text-white'>ПАРТНЕРЫ</h2>

                        <Image
                            className='w-28 max-lg:w-20'
                            src={"/images/parisahome-gray.svg"}
                            width={1000}
                            height={1000}
                            alt='img'
                        />

                        <Image
                            className='w-72'
                            src={"/images/flower.svg"}
                            width={1000}
                            height={1000}
                            alt='img'
                        />
                    </div>
                    <div className="max-w-2xl">
                        <div className="mb-8 md:hidden">
                            <h2 className='text-3xl text-white'>ПАРТНЕРЫ</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-x-5 gap-y-10 max-lg:gap-5 px-10 max-xl:px-0 mb-20 max-lg:mb-10 max-md:px-10 max-sm:px-0">
                            <div className="">
                                <div className="flex items-center justify-center py-32 max-xl:py-28 max-lg:py-24 max-sm:py-16 mb-7 max-lg:mb-5 rounded-md border border-white">
                                    <Image
                                        className='w-40 max-md:w-32 max-xs:w-28 text-white'
                                        src={"/images/partners/partner-white-1.svg"}
                                        width={1000}
                                        height={1000}
                                        alt='partner'
                                    />
                                </div>
                                <div className="">
                                    <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ.</p>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center justify-center py-32 max-xl:py-28 max-lg:py-24 max-sm:py-16 mb-7 max-lg:mb-5 rounded-md border border-white">
                                    <Image
                                        className='w-40 max-md:w-32 max-xs:w-28 text-white'
                                        src={"/images/partners/partner-white-1.svg"}
                                        width={1000}
                                        height={1000}
                                        alt='partner'
                                    />
                                </div>
                                <div className="">
                                    <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ.</p>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center justify-center py-32 max-xl:py-28 max-lg:py-24 max-sm:py-16 mb-7 max-lg:mb-5 rounded-md border border-white">
                                    <Image
                                        className='w-40 max-md:w-32 max-xs:w-28 text-white'
                                        src={"/images/partners/partner-white-1.svg"}
                                        width={1000}
                                        height={1000}
                                        alt='partner'
                                    />
                                </div>
                                <div className="">
                                    <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ.</p>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center justify-center py-32 max-xl:py-28 max-lg:py-24 max-sm:py-16 mb-7 max-lg:mb-5 rounded-md border border-white">
                                    <Image
                                        className='w-40 max-md:w-32 max-xs:w-28 text-white'
                                        src={"/images/partners/partner-white-1.svg"}
                                        width={1000}
                                        height={1000}
                                        alt='partner'
                                    />
                                </div>
                                <div className="">
                                    <p className='text-sm max-lg:text-xs leading-6 max-lg:leading-5 font-light text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-14 md:hidden flex items-center justify-between">
                            <Image
                                className='w-48'
                                src={"/images/flower.svg"}
                                width={1000}
                                height={1000}
                                alt='img'
                            />

                            <Image
                                className='w-14'
                                src={"/images/parisahome-gray.svg"}
                                width={1000}
                                height={1000}
                                alt='img'
                            />
                        </div>
                        <div className="py-7 max-md:py-5 border-t-4 border-white">
                            <p className='text-4xl max-xl:text-3xl max-lg:text-2xl max-lg:leading-6 max-sm:text-center mb-7 max-md:mb-5 text-white'>Мы всегда ищем новые партнерства и варианты сотрудничества!</p>
                            <button className='max-sm:text-xs font-medium py-3 max-md:py-2 px-10 max-md:px-7 max-md:m-auto flex rounded-lg text-white bg-yellow'>СВЯЗАТЬСЯ С НАМИ</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="custom-container flex max-md:flex-col gap-5 max-md:gap-8 py-20 max-md:py-10">
                    <div className="">
                        <div className="h-[500px] max-xl:h-[400px] max-lg:h-[350px] max-md:h-[300px] relative z-10 flex flex-col justify-between p-6 max-lg:p-3 rounded-md overflow-hidden border-2 border-white">
                            <div className="w-full h-full absolute -z-10 top-0 left-0 bg-black/20"></div>
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
                            <p className='text-sm leading-6 max-md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией </p>
                        </div>
                        <div className="mt-3">
                            <p className='text-xs leading-5 md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="h-[500px] max-xl:h-[400px] max-lg:h-[350px] max-md:h-[300px] relative z-10 flex flex-col justify-between p-6 max-lg:p-3 rounded-md overflow-hidden border-2 border-white">
                            <div className="w-full h-full absolute -z-10 top-0 left-0 bg-black/20"></div>
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
                            <p className='text-sm leading-6 max-md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией </p>
                        </div>
                        <div className="mt-3">
                            <p className='text-xs leading-5 md:hidden text-white'>Parisa Home была основана в 2009 году, Наша компания также известна, как ООО"Sam Rafoat Textile". В начале эта компания начала производить плющ. С 2009 года ООО"Sam Rafoat Текстиль" обеспечивал местные рынки своей продукцией </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
