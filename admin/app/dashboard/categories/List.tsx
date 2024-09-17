import { Card, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import React from "react";
import Category from "./Category";

export default function CategoryList({
	categories,
	token,
}: {
	categories: Array<any>;
	token: string | undefined;
}) {
	return (
		<Card className="p-3">
			<CardTitle>All categories</CardTitle>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Title</TableHead>

						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{categories.map((item: any, index: number) => (
						<Category item={item} index={index} token={token} />
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
