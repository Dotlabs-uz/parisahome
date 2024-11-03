import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import React from "react";
import { cookies } from "next/headers";
import AddForm from "./components/Form";
import CertCategoryList from "./components/CertCategoryList";

const page = async () => {
    const res = await fetch(process.env.API_URL + "/cert-category", {
        cache: "no-store",
    });
    if (!res.ok) return <h1>Something went wrong</h1>;
    const categories = await res.json();

    const cookieStore = cookies();
    const resToken = cookieStore.get("token") as {
        name: string;
        value: string;
    };
    const token = JSON.parse(decodeURIComponent(resToken.value));

    return (
        <Card>
            <CardHeader>
                <CardTitle>Manage categories</CardTitle>
            </CardHeader>
            <AddForm token={token} />
            <CertCategoryList token={token} categories={categories} />
        </Card>
    );
};

export default page;
