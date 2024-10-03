"use client"
import action from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import React from "react";

interface CertificateProps {
	item: any;
	token: { value: string };
}

const Certificate: React.FC<CertificateProps> = ({ item, token }) => {

	const {toast} = useToast()
	async function handleRemove() {
		const forSure = confirm("Are you sure you want to delete?");
		if (forSure) {
			try {
				const res = await fetch(
					process.env.NEXT_PUBLIC_API_URL + "/machines/" + item.id,
					{
						method: "delete",
						headers: {
							Authorization: `Bearer ${token.value}`,
						},
					}
				);

				if (!res.ok) {
					throw new Error(res.statusText);
				}
				toast({
					title: "Success!",
					description: "Question successfully deleted.",
				});
			} catch (e: any) {
				toast({
                    title: "Error!",
                    description: "Something went wrong!",
                    variant:"destructive"
                });
				console.error(e.message);
			}
			action("/machines");
		}
	}

	return (
		<div className="w-full rounded overflow-hidden shadow-lg bg-white">
			<Image
				unoptimized={true}
				className="w-full h-48 object-cover bg-gray-200"
				src={item.image.url}
				alt={item.title || "parisahome"}
				width={200}
				height={200}
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{item.title}</div>
				<p className="text-gray-700 text-base">{item.description}</p>
				<hr className="my-4" />
				<Button variant="destructive" onClick={handleRemove} >Delete</Button>
			</div>
		</div>
	);
};

export default Certificate;
