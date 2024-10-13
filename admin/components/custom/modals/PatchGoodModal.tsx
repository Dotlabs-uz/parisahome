"use client";

import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCookies } from "@/lib/cookies.request";
import { callMessage } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import action from "@/app/admin/actions";
import { useRouter } from "next/navigation";

interface Props {
    id: number;
    good: any;
    categories: any;
}

interface GoodForm {
    name: string;
    description: string;
    categoryId: number;
    images: File[];
}

export const PatchGoodModal: React.FC<Props> = ({ id, good, categories }) => {
    const [previewImages, setPreviewImages] = useState<any>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const {push} = useRouter() 

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { isSubmitting },
    } = useForm<GoodForm>();

    useEffect(() => {
        reset({
            name: good?.name,
            description: good?.description,
            categoryId: good?.categoryId,
        });
    }, []);

    const onSubmit = async (formData: GoodForm) => {
        try {
            const token = await getCookies("token");

            const data = new FormData();
            data.append("name", formData.name);
            data.append("description", formData.description);
            data.append("categoryId", formData.categoryId.toString());
            data.append("price", "0");

            if (formData.images) {
                Array.from(formData.images).forEach((file) => {
                    data.append("images", file);
                });
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/product/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: data,
                }
            );

            if (res.status === 200 || res.status === 201) {
                reset();
                callMessage("default", "Product update successfully");
                action("product")
                push("/admin/dashboard/goods")
            }
        } catch (err: any) {
            console.error(err);
            callMessage("destructive", "Something went wrong");
        }
    };

    const handleFileChange = (e: any) => {
        const files: File[] = Array.from(e.target.files);
        setPreviewImages(files.map((file: any) => URL.createObjectURL(file)));
        setValue("images", files);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Name
                </Label>
                <Input
                    id="name"
                    {...register("name")}
                    type="text"
                    className="block w-full p-2 border border-gray-300 rounded"
                    placeholder="Product Name"
                />
            </div>

            <div>
                <Label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Description
                </Label>
                <Textarea
                    id="description"
                    {...register("description")}
                    className="block w-full p-2 border border-gray-300 rounded"
                    placeholder="Product Description"
                />
            </div>

            <div>
                <Label
                    htmlFor="categoryId"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Category
                </Label>
                <select
                    id="categoryId"
                    {...register("categoryId")}
                    className="block w-full p-2 border border-gray-300 rounded"
                >
                    {categories.map((category: any) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <Label
                    htmlFor="images"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Upload Images
                </Label>
                <Input
                    type="file"
                    id="images"
                    multiple
                    {...register("images")}
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="block w-full text-sm text-gray-500"
                />
            </div>

            <ScrollArea className="h-24 w-full mt-2">
                <div className="flex gap-2 overflow-x-auto">
                    {previewImages.map((src: any, index: number) => (
                        <img
                            key={`new-${index}`}
                            src={src}
                            alt="Preview"
                            className="w-20 h-20 object-cover rounded"
                        />
                    ))}
                </div>
            </ScrollArea>

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Updating..." : "Update Product"}
            </button>
        </form>
    );
};
