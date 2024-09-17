"use client";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

export default function Category({
	item,
	index,
	token,
}: {
	item: any;
	index: number;
	token: string | undefined;
}) {
	return (
		<TableRow key={index}>
			<TableCell className="font-medium">{item.name}</TableCell>
			<TableCell className="flex justify-end gap-2 ">
				{/* <UpdateModal>
                    <UpdateCategory
                        item={item}
                        handleChangeAction={handleChangeAction}
                    />
                </UpdateModal> */}
				<Button
					variant="outline"
					// onClick={() => deleteCat(item)}
				>
					delete
				</Button>
			</TableCell>
		</TableRow>
	);
}
