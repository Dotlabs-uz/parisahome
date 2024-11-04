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
	token: string
}) {
	return (
		<Card className="p-3">
			<CardTitle>All categories</CardTitle>
			<div>
				<div>
					<div>
						<h2>Title</h2>

						<p className="text-right">Actions</p>
					</div>
				</div>
				<div>
					{categories.map((item: any, index: number) => (
						<Category key={index} item={item} index={index} token={token} />
					))}
				</div>
			</div>
		</Card>
	);
}
