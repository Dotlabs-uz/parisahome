import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Machines from "./Machines";
import CertificateForm from "./Create";
import { cookies } from "next/headers";

interface pageProps { }

const page: React.FC<pageProps> = async () => {
	const res = await fetch(process.env.API_URL + "/machines", {
		cache: "no-store",
	});
	if (!res.ok) return <h1>Something went wrong</h1>;
	const { data } = await res.json();
	const cookieStore = cookies();
	const resToken = cookieStore.get("token") as {
		name: string;
		value: string;
	};
	const token = JSON.parse(decodeURIComponent(resToken.value));

	return (
		<Card className="">
			<CardHeader>
				<CardTitle>Manage machines</CardTitle>
			</CardHeader>
			<div className="w-full flex flex-col p-2">
				<CertificateForm token={token} />
				<div className="w-full">
					<h2 className="text-2xl my-2">List of machines</h2>
					<div className="grid grid-cols-2 gap-2 w-full">
						{data.map((item: any, index: number) => (
							<Machines key={index} item={item} token={token} />
						))}
					</div>
				</div>
			</div>
		</Card>
	);
};

export default page;
