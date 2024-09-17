import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Certificate from "./Certificate";
import CertificateForm from "./Create";
import { cookies } from "next/headers";

interface pageProps {}

const page: React.FC<pageProps> = async () => {
	const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/machines", {
		cache: "no-store",
	});
	if (!res.ok) return <h1>Something went wrong</h1>;
	const {data} = await res.json();
	const cookieStore = cookies();
	const token = cookieStore.get("token") as { name: string; value: string };

	return (
		<Card className="">
			<CardHeader>
				<CardTitle>Manage categories</CardTitle>
			</CardHeader>
			<div className="w-full flex flex-col p-2">
				<CertificateForm token={token} />
				<div className="w-full">
					<h2 className="text-2xl my-2">List of certificates</h2>
					<div className="grid grid-cols-2 gap-2 w-full">
						{data.map((item: any) => (
							<Certificate item={item} />
						))}
					</div>
				</div>
			</div>
		</Card>
	);
};

export default page;
