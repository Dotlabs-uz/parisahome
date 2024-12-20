
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { getData } from "@/lib/https.request";

const GalleryContainer = async ({ galleryTitle, galleryButton, lang }: any) => {
    // const gallery = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/gallery`)

    const gallery = await getData("/gallery");

    if (gallery.status === 500) {
        return null
    }

    return (
        <div
            className="custom-container relative z-10 py-20 max-md:py-10 h-auto"
        >
            <div className="py-7 max-md:py-5">
                <h2 className="text-3xl max-sm:text-xl text-center text-yellow anim-element">
                    \\{galleryTitle}
                </h2>
            </div>

            <div className="grid grid-cols-3 gap-3 px-60 max-xl:px-40 max-lg:px-10 max-md:px-0 max-sm:grid-cols-2 my-7">
                {gallery.map((item: any, index: number) => (
                    <div key={item.id} className="rounded-lg overflow-hidden">
                        <Image
                            className="w-full h-full object-cover"
                            src={item.url}
                            alt={`Gallery Image ${index + 1}`}
                            width={500}
                            height={500}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            <Link href={`/${lang}/catalog/1`} className={"bg-yellow text-white w-fit font-medium py-3 px-9 mx-auto flex rounded-lg anim-element"}>
                {galleryButton}
            </Link>
        </div>
    );
};

export default GalleryContainer;
