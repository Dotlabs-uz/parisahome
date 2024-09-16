"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoodsForm from "@/components/custom/GoodsForm";
import GoodsPreview from "@/components/custom/GoodsPreview";

interface Good {
	id: number;
	images: string[];
	title: string;
	description: string;
}

export default function GoodsPage() {
	const [goods, setGoods] = useState<Good[]>([]);
	const [newGood, setNewGood] = useState<Good>({
		id: 0,
		images: [],
		title: "",
		description: "",
	});
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setNewGood((prev) => ({ ...prev, [name]: value }));
	};

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files) {
			Array.from(files).forEach((file) => {
				const reader = new FileReader();
				reader.onloadend = () => {
					setNewGood((prev) => ({
						...prev,
						images: [...prev.images, reader.result as string],
					}));
				};
				reader.readAsDataURL(file);
			});
		}
	};

	const removeImage = (index: number) => {
		setNewGood((prev) => ({
			...prev,
			images: prev.images.filter((_, i) => i !== index),
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (newGood.title && newGood.description && newGood.images.length > 0) {
			setGoods((prev) => [...prev, { ...newGood, id: Date.now() }]);
			setNewGood({ id: 0, images: [], title: "", description: "" });
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}
			console.log(newGood);
		}
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Goods Management</h1>

			<Tabs defaultValue="add" className="mb-6">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="add">Add New Good</TabsTrigger>
					<TabsTrigger value="preview">Preview</TabsTrigger>
				</TabsList>
				<TabsContent value="add">
					<GoodsForm
						newGood={newGood}
						onSubmit={handleSubmit}
						onInputChange={handleInputChange}
						onImageUpload={handleImageUpload}
						removeImage={removeImage}
						fileInputRef={fileInputRef}
					/>
				</TabsContent>
				<TabsContent value="preview">
					<GoodsPreview good={newGood} />
				</TabsContent>
			</Tabs>

			<Card>
				<CardHeader>
					<CardTitle>List of Goods</CardTitle>
				</CardHeader>
				<CardContent>
					{goods.length === 0 ? (
						<p className="text-center text-gray-500">
							No goods added yet.
						</p>
					) : (
						<ul className="space-y-4">
							{goods.map((good) => (
								<li
									key={good.id}
									className="border rounded-lg p-4"
								>
									<h3 className="font-bold text-lg mb-2">
										{good.title}
									</h3>
									<p className="text-gray-600 mb-2">
										{good.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{good.images.map((image, index) => (
											<img
												key={index}
												src={image}
												alt={`${good.title} - Image ${
													index + 1
												}`}
												className="w-20 h-20 object-cover rounded"
											/>
										))}
									</div>
								</li>
							))}
						</ul>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
