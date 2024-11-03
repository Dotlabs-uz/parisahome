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

interface GoodsFormProps { }

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = await getCookies("token");

        const fm = new FormData(e.currentTarget);

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
            e.currentTarget.reset();

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
            action("product");
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

                    {/* Title inputs for different languages */}
                    <Input
                        type="text"
                        name="ruName"
                        placeholder="Title in Russian"
                        className="w-full"
                        required
                    />
                    <Input
                        type="text"
                        name="uzName"
                        placeholder="Title in Uzbek"
                        className="w-full"
                        required
                    />
                    <Input
                        type="text"
                        name="enName"
                        placeholder="Title in English"
                        className="w-full"
                        required
                    />
                    <Input
                        type="text"
                        name="jpName"
                        placeholder="Title in Japanese"
                        className="w-full"
                        required
                    />

                    {/* Description inputs for different languages */}
                    <Textarea
                        name="ruDescription"
                        placeholder="Description in Russian"
                        required
                        className="w-full"
                    />
                    <Textarea
                        name="uzDescription"
                        placeholder="Description in Uzbek"
                        required
                        className="w-full"
                    />
                    <Textarea
                        name="enDescription"
                        placeholder="Description in English"
                        required
                        className="w-full"
                    />
                    <Textarea
                        name="jpDescription"
                        placeholder="Description in Japanese"
                        required
                        className="w-full"
                    />

                    {/* Price input */}
                    <Input
                        type="text"
                        name="price"
                        placeholder="Price"
                        className="w-full"
                        defaultValue="0"
                    />

                    {/* Category selector */}
                    <Select name="categoryId">
                        <SelectTrigger className="w-full text-black">
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
                                        {item.ruTitle}
                                    </SelectItem>
                                ))}
                        </SelectContent>
                    </Select>


                    <Button type="submit" className="w-full">
                        <Plus className="mr-2 h-4 w-4" /> Add Good
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default GoodsForm;
