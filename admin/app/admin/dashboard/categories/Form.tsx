"use client";

import action from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function AddForm({
	token,
}: {
	token: string;
}) {
	const [loading, setLoading] = useState(false);
	const [ruTitle, setRuTitle] = useState("");
	const [enTitle, setEnTitle] = useState("");
	const [uzTitle, setUzTitle] = useState("");
	const [jpTitle, setJpTitle] = useState("");

	const { toast } = useToast();

	async function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		setLoading(true);

		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/category`,
				{
					method: "POST",
					body: JSON.stringify({
						ruTitle,
						enTitle,
						uzTitle,
						jpTitle,
					}),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (!res.ok) {
				toast({
					title: "Error!",
					description: "Something went wrong!",
					variant: "destructive",
				});
				return;
			}

			toast({
				title: "Success!",
				description: "Category added successfully.",
				variant: "default",
			});

			// Clear input fields on success
			setRuTitle("");
			setEnTitle("");
			setUzTitle("");
			setJpTitle("");

			// Optionally perform any additional action
			action("/category");
		} catch (e: any) {
			toast({
				title: "Error!",
				description: e.message || "Something went wrong!",
				variant: "destructive",
			});
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="mb-3 grid grid-cols-2 gap-3 px-4">
			<Input
				type="text"
				placeholder="category ru"
				className="rounded-lg"
				value={ruTitle}
				onChange={(e) => setRuTitle(e.target.value)}
			/>
			<Input
				type="text"
				placeholder="category en"
				className="rounded-lg"
				value={enTitle}
				onChange={(e) => setEnTitle(e.target.value)}
			/>
			<Input
				type="text"
				placeholder="category uz"
				className="rounded-lg"
				value={uzTitle}
				onChange={(e) => setUzTitle(e.target.value)}
			/>
			<Input
				type="text"
				placeholder="category jp"
				className="rounded-lg"
				value={jpTitle}
				onChange={(e) => setJpTitle(e.target.value)}
			/>
			<Button
				variant="outline"
				className="w-fit rounded-lg"
				type="submit"
			>
				{loading ? "Loading..." : "Add category"}
			</Button>
		</form>
	);
}
