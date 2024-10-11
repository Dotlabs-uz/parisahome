import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SuperAdminForm from "./Update";

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

    const res = await fetch(process.env.API_URL + "/admin/superAdmin", {
        cache: "no-store",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!res.ok) return <h1>Something went wrong</h1>;
    const admin = await res.json();    

    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Manage SuperAdmin</CardTitle>
            </CardHeader>
            <div className="w-full flex flex-col p-2">
                <SuperAdminForm token={token} id={admin.id}/>
            </div>
        </Card>
    );
};

export default page;
