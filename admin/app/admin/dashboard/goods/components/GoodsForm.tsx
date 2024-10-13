"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageUploader from "../../../../../components/custom/ImageUploader";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { GoodItemType } from "@/types";
import { useEffect, useRef, useState } from "react";
import { getCookies } from "@/lib/cookies.request";
import { callMessage } from "@/lib/utils";
import action from "@/app/admin/actions";

interface GoodsFormProps {}

const GoodsForm: React.FC<GoodsFormProps> = () => {
    const [categories, setCategories] = useState<any>(null);
    const [formData, setFormData] = useState<FormData | null>(null);
    const [newGood, setNewGood] = useState<GoodItemType>({
        id: 0,
        images: [],
        name: "",
        price: 0,
        categoryId: 0,
        description: "",
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const token = await getCookies("token");

        const fm = new FormData(e.target as any);

        if (!formData) return;

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
            setFormData(null);
            setNewGood({
                id: 0,
                images: [],
                name: "",
                price: 0,
                categoryId: 0,
                description: "",
            });
            e.target.reset();

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
            action("product")
            callMessage("default", "Product added successfully");
        } else {
            console.error("Error uploading product:", res.statusText);
            callMessage("destructive", "Something went wrong");
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        if (formData) {
            Array.from(files).forEach((file) => {
                formData.append("images", file);

                const reader = new FileReader();
                reader.onloadend = () => {
                    setNewGood((prev) => ({
                        ...prev,
                        images: [...prev.images, reader.result as string],
                    }));
                };
                reader.readAsDataURL(file);
            });
        } else {
            const fm = new FormData();

            Array.from(files).forEach((file) => {
                fm.append("images", file);

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
            images: prev.images.filter((_: any, i: number) => i !== index),
        }));
        if (formData) {
            setFormData((prev: FormData | null) => {
                if (!prev) return null;

                const images = prev
                    .getAll("images")
                    .filter((_, i) => i !== index) as File[];

                const newValues = new FormData();
                images.forEach((image) => newValues.append("images", image));

                return newValues;
            });
        }
    };

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/category")
            .then((res) => res.json())
            .then((res) => setCategories(res));
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add New Good</CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    onErrorCapture={(err) => {
                        console.log(err);
                    }}
                >
                    <ImageUploader
                        images={newGood.images}
                        onImageUpload={handleImageUpload}
                        removeImage={removeImage}
                        fileInputRef={fileInputRef}
                    />
                    <Input
                        type="text"
                        name="name"
                        placeholder="Title"
                        className="w-full"
                        required
                    />
                    <Input
                        type="text"
                        name="price"
                        placeholder="Price"
                        className="w-full hidden"
                        defaultValue={"0"}
                    />
                    <Select name="categoryId">
                        <SelectTrigger className="w-full text-gray-500">
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories &&
                                categories.map((item: any) => (
                                    <SelectItem
                                        className="text-black"
                                        key={item.id}
                                        value={`${item.id}`}
                                    >
                                        {item.name}
                                    </SelectItem>
                                ))}
                        </SelectContent>
                    </Select>
                    <Textarea
                        name="description"
                        placeholder="Description"
                        required
                        className="w-full"
                    />
                    <Button type="submit" className="w-full">
                        <Plus className="mr-2 h-4 w-4" /> Add Good
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default GoodsForm;
