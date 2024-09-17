import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import React from "react";
import AddForm from "./Form";
import CategoryList from "./List";
import { cookies } from "next/headers";

const page = async () => {
	const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/category");
	if (!res.ok) return <h1>Something went wrong</h1>;
	const categories = await res.json();
    const cookieStore = cookies()
    const token = cookieStore.get('token') as string | undefined

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
