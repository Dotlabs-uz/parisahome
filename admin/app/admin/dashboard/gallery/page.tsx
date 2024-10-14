
import { cookies } from "next/headers";
import Gallery from "./Gallery";
import GalleryForm from "./Create";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const page = async () => {
    const res = await fetch(process.env.API_URL + "/gallery", {
        cache:"no-store"
    });
    if (!res.ok) return <h1>Something went wrong</h1>;
    const galleries = await res.json();
    const cookieStore = cookies();
    const resToken = cookieStore.get("token") as {
        name: string;
        value: string;
    };
    const token = JSON.parse(decodeURIComponent(resToken.value));

    return (
        <Card>
            <CardHeader>
                <CardTitle>Manage gallery</CardTitle>
            </CardHeader>
            <div className="w-full flex flex-col p-2">
                <GalleryForm token={token} />
                <div className="w-full">
                    <h2 className="text-2xl my-2">List of gallery</h2>
                    <div className="grid grid-cols-3 gap-2 w-full">
                        {galleries.map((item: any, index: number) => (
                            <Gallery token={token} key={index} item={item} index={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default page;
