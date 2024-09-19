import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import React from "react";
import AddForm from "./Form";
import CategoryList from "./List";
import { cookies } from "next/headers";

const page = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/category", {
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
            <CategoryList token={token} categories={categories} />
        </Card>
    );
};

export default page;
