"use client";

import action from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function AddForm({
	token,
}: {
	token: string
}) {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");

	const {toast} = useToast()

	async function handleSubmit(event: any) {
		event.preventDefault();
		setLoading(true);

		try {
			const res = await fetch(
				process.env.NEXT_PUBLIC_API_URL + "/category",
				{
					method: "post",
					body: JSON.stringify({ name: name }),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (!res.ok) {
				toast({
					title: "Error!",
					description: `Somethin went wrong!`,
					variant:"destructive"
				});
				return;
			}
			action("/category");
		} catch (e: any) {
			toast({
				title: "Error!",
				description: `${e.message}`,
				variant:"destructive"
			});
		}

		setLoading(false);
	}
	return (
		<form onSubmit={handleSubmit} className="mb-3 flex px-4">
			<Input
				type="text"
				placeholder="category"
				className={`mb-3 rounded-r-none rounded-l-lg`}
				name="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Button
				variant="outline"
				className="w-36 rounded-r-lg rounded-l-none "
				type="submit"
			>
				{loading ? "Loading..." : "Add category"}
			</Button>
		</form>
	);
}
