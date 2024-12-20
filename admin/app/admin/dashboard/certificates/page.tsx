
import { cookies } from "next/headers";
import Certificate from "./Certificate";
import CertificateForm from "./Create";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const page = async () => {
    const res = await fetch(process.env.API_URL + "/certificate", {
        cache: "no-store"
    });
    if (!res.ok) return <h1>Something went wrong</h1>;
    const certificate = await res.json();
    const cookieStore = cookies();
    const resToken = cookieStore.get("token") as {
        name: string;
        value: string;
    };
    const token = JSON.parse(decodeURIComponent(resToken.value));

    return (
        <Card>
            <CardHeader>
                <CardTitle>Manage certificates</CardTitle>
            </CardHeader>
            <div className="w-full flex flex-col p-2">
                <CertificateForm token={token} />
                <div className="w-full">
                    <h2 className="text-2xl my-2">List of certificates</h2>
                    <div className="grid grid-cols-3 gap-2 w-full">
                        {certificate.map((item: any, index: number) => (
                            <Certificate token={token} key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default page;
