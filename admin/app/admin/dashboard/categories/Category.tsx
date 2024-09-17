"use client";
import action from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import React, { useState } from "react";

export default function Category({
	item,
	index,
	token,
}: {
	item: any;
	index: number;
	token: { name: string; value: string };
}) {
	const [isProcessing, setIsProcessing] = useState(false);

	async function handleChangeName() {
		const newTitle = prompt(item.name)?.trim();
		if (newTitle !== "" && newTitle !== item.name && newTitle) {
			try {
				setIsProcessing(true);
				const res = await fetch(
					process.env.NEXT_PUBLIC_API_URL + "/category/" + item.id,
					{
						method: "PATCH",
						body: JSON.stringify({ name: newTitle }),
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token.value}`,
						},
					}
				);
				if (!res.ok) return;
			} catch (e: any) {
				alert("Something went wrong!");
				console.error(e.message);
			}
			action("/category");
			setIsProcessing(false);
		}
	}


    async function handleRemove() {
        const forSure = confirm("Are you sure you want to delete?");
		if (forSure) {
			try {
				setIsProcessing(true);
				const res = await fetch(
					process.env.NEXT_PUBLIC_API_URL + "/category/" + item.id,
					{
						method: "delete",
						headers: {
							Authorization: `Bearer ${token.value}`,
						}
					}
				);

                if(!res.ok) {
                    throw new Error(res.statusText)
                }
                setIsProcessing(false);
			} catch (e: any) {
				alert("Something went wrong!");
				console.error(e.message);
    			setIsProcessing(false);
			}
			action("/category");
			setIsProcessing(false);
		}
    }

	return (
		<TableRow key={index}>
			<TableCell className="font-medium">
				{isProcessing ? "processing..." : item.name}
			</TableCell>
			<TableCell className="flex justify-end gap-2 ">
				<Button variant="outline" onClick={handleChangeName}>
					Edit
				</Button>
				<Button
					variant="outline"
					onClick={handleRemove}
				>
					Delete
				</Button>
			</TableCell>
		</TableRow>
	);
}
