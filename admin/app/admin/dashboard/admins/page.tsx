import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
// import Questions from "./Questions";
import { cookies } from "next/headers";
import Admins from "./Admins";
import AdminForm from "./Create";
import { redirect } from "next/navigation";
// import QuestionForm from "./Create";

interface pageProps {}

const page: React.FC<pageProps> = async () => {

    const cookieStore = cookies();
    const resToken = cookieStore.get("token") as {
        name: string;
        value: string;
    };
    const token = JSON.parse(decodeURIComponent(resToken.value));

    const resRole = cookieStore.get("role") as {
        name: string;
        value: string;
    };

    const role = JSON.parse(decodeURIComponent(resRole.value));

    if(role !== "superAdmin"){
        redirect("/admin")
    }


    const res = await fetch(process.env.API_URL + "/admin", {
        cache: "no-store",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!res.ok) return <h1 className="text-red-500">Something went wrong</h1>;
    const admins = await res.json();

    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Manage questions</CardTitle>
            </CardHeader>
            <div className="w-full flex flex-col p-2">
                <AdminForm token={token} />
                <div className="w-full">
                    <h2 className="text-2xl my-2">List of questions</h2>
                    <div className="grid grid-cols-1 gap-2 w-full">
                        {admins.map((item: any, index: number) => (
                            <Admins key={index} item={item} token={token}/>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default page;
