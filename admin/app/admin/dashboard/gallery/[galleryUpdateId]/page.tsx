import React, { Suspense } from 'react';
import { PatchGallery } from './components/PatchGallery';

const Page = async ({ params: { galleryUpdateId } }: any) => {
    return (
        <div className="bg-white p-5 rounded-xl">
            <Suspense fallback={"Loading.."}>
                <PatchGallery id={galleryUpdateId} />
            </Suspense>
        </div>
    );
};

export default Page;
