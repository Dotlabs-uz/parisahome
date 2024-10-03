"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoodsForm from "@/components/custom/GoodsForm";
import GoodsPreview from "@/components/custom/GoodsPreview";
import { getCookies } from "@/lib/cookies.request";

export interface Good {
    id: number;
    images: string[];
    name: string;
    price: number;
    categoryId: number;
    description: string;
}

export default function GoodsPage() {
    const [goods, setGoods] = useState<Good[]>([]);
    const [categories, setCategories] = useState<[]>([]);
    const [formData, setFormData] = useState<any>(null);
    const [newGood, setNewGood] = useState<Good>({
        id: 0,
        images: [],
        name: "",
        price: 0,
        categoryId: 0,
        description: "",
    });
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fm = new FormData();

            Array.from(files).forEach((file) => {
                fm.append("image[]", file);
                console.log(file);

                const reader = new FileReader();
                reader.onloadend = () => {
                    setNewGood((prev) => ({
                        ...prev,
                        images: [...prev.images, reader.result as string],
                    }));
                };
                reader.readAsDataURL(file);
            });
            setFormData(fm);
        }
    };

    const removeImage = (index: number) => {
        setNewGood((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const token = await getCookies("token");

        const fm = new FormData(e.target as any);

        formData.forEach((elem: any) => {
            fm.append("images", elem);
        });

        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/product", {
            method: "POST",
            body: fm,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (res.ok) {
            const data = await res.json();
            setGoods((prev) => [...prev, data]);
            setNewGood((prev) => ({
                ...prev,
                images: [],
            }));
            e.target.reset();

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } else {
            console.error("Error uploading product:", res.statusText);
        }
    };

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/category")
            .then((res) => res.json())
            .then((res) => setCategories(res));

        fetch(process.env.NEXT_PUBLIC_API_URL + "/product")
            .then((res) => res.json())
            .then((res) => setGoods(res));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-black">
                Goods Management
            </h1>

            <Tabs defaultValue="add" className="mb-6">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="add">Add New Good</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="add">
                    <GoodsForm
                        newGood={newGood}
                        onSubmit={handleSubmit}
                        onImageUpload={handleImageUpload}
                        removeImage={removeImage}
                        fileInputRef={fileInputRef}
                        categories={categories}
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
                                        Title: {good.name}
                                    </h3>
                                    <p className="text-gray-600 mb-2">
                                        Price: {good.price}
                                    </p>

                                    <p className="text-gray-600 mb-2">
                                        Description: {good.description}
                                    </p>

                                    <p className="text-gray-600 mb-2">
                                        Images:
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {good.images.map(
                                            (image: any, index) => {
                                                return (
                                                    <img
                                                        key={index}
                                                        src={image.url}
                                                        alt={`${
                                                            good.name
                                                        } - Image ${index + 1}`}
                                                        className="w-20 h-20 object-cover rounded"
                                                    />
                                                );
                                            }
                                        )}
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
