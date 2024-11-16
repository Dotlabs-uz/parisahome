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
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";

interface Props {
    id: number;
    good: {
        id: number
        ruName: string;
        enName: string;
        uzName: string;
        jpName: string;
        ruDescription: string;
        enDescription: string;
        uzDescription: string;
        jpDescription: string;
        categoryId: number;
        price: string
        images: { id: number; url: string; }[]
    };
    categories: { id: number; name: string }[];
}

interface GoodForm {
    ruName: string;
    enName: string;
    uzName: string;
    jpName: string;
    ruDescription: string;
    enDescription: string;
    uzDescription: string;
    jpDescription: string;
    categoryId: number;
    images: File[];
    price: string
}

export const PatchGoodModal: React.FC<Props> = ({ id, good, categories }) => {
    const [previewImages, setPreviewImages] = useState<{ id: number; url: string; }[]>([]);
    const [newImages, setNewImages] = useState<File[]>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const { push } = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { isSubmitting },
    } = useForm<GoodForm>();

    useEffect(() => {
        reset({
            ruName: good.ruName,
            enName: good.enName,
            uzName: good.uzName,
            jpName: good.jpName,
            ruDescription: good.ruDescription,
            enDescription: good.enDescription,
            uzDescription: good.uzDescription,
            jpDescription: good.jpDescription,
            categoryId: good.categoryId,
            price: good.price,
        });

        setPreviewImages(
            good.images.map((image: { id: number; url: string }) => ({
                id: image.id,
                url: image.url,
            }))
        );
    }, [good, reset]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray = Array.from(files);
            setPreviewImages((prev: any) => [
                ...prev,
                ...fileArray.map((file) => ({
                    id: null, // Новые файлы не имеют id
                    url: URL.createObjectURL(file),
                })),
            ]);
            setNewImages((prev) => [...prev, ...fileArray]);
        }
    };

    const uploadImages = async (files: File[]) => {
        const token = await getCookies("token");
        const formData: any = new FormData();

        files.forEach((file) => {
            formData.append("images", file);
            console.log(file, "file");
        });
        formData.append("id", good.id);;

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/images`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        })

        if (!res.ok) {
            throw new Error("Failed to upload images");
        }
    };

    const deleteImage = async (id: number | null, url: string) => {
        if (id) {
            try {
                const token = await getCookies("token");
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/images/${id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) {
                    throw new Error("Failed to delete image");
                }
                callMessage("default", "Image deleted successfully");
            } catch (error) {
                console.error(error);
                callMessage("destructive", "Failed to delete image");
                return;
            }
        }

        // Удаляем изображение из состояния
        setPreviewImages((prev) => prev.filter((image) => image.url !== url));
        if (!id) {
            setNewImages((prev) =>
                prev.filter((file) => URL.createObjectURL(file) !== url)
            );
        }
    };

    const onSubmit = async (data: GoodForm) => {
        try {
            const token = await getCookies("token");

            // ${process.env.NEXT_PUBLIC_API_URL}/images/${good id}

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/product/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (res.status === 200 || res.status === 201) {
                if (newImages.length > 0) {
                    await uploadImages(newImages);
                }

                reset();
                callMessage("default", "Product updated successfully");
                action("product");
                push("/admin/dashboard/goods");
            }
        } catch (err: any) {
            console.error(err);
            callMessage("destructive", "Something went wrong");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Inputs */}
            <div>
                <Label htmlFor="ruName" className="block mb-2 text-sm font-medium text-black">
                    Name (Russian)
                </Label>
                <Input
                    id="ruName"
                    {...register("ruName")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Product Name (Russian)"
                />
            </div>

            <div>
                <Label htmlFor="enName" className="block mb-2 text-sm font-medium text-black">
                    Name (English)
                </Label>
                <Input
                    id="enName"
                    {...register("enName")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Product Name (English)"
                />
            </div>

            <div>
                <Label htmlFor="uzName" className="block mb-2 text-sm font-medium text-black">
                    Name (Uzbek)
                </Label>
                <Input
                    id="uzName"
                    {...register("uzName")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Product Name (Uzbek)"
                />
            </div>

            <div>
                <Label htmlFor="jpName" className="block mb-2 text-sm font-medium text-black">
                    Name (Japanese)
                </Label>
                <Input
                    id="jpName"
                    {...register("jpName")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Product Name (Japanese)"
                />
            </div>

            {/* Description Inputs */}
            <div>
                <Label htmlFor="ruDescription" className="block mb-2 text-sm font-medium text-black">
                    Description (Russian)
                </Label>
                <Textarea
                    id="ruDescription"
                    {...register("ruDescription")}
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Product Description (Russian)"
                />
            </div>

            <div>
                <Label htmlFor="enDescription" className="block mb-2 text-sm font-medium text-black">
                    Description (English)
                </Label>
                <Textarea
                    id="enDescription"
                    {...register("enDescription")}
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Product Description (English)"
                />
            </div>

            <div>
                <Label htmlFor="uzDescription" className="block mb-2 text-sm font-medium text-black">
                    Description (Uzbek)
                </Label>
                <Textarea
                    id="uzDescription"
                    {...register("uzDescription")}
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Product Description (Uzbek)"
                />
            </div>

            <div>
                <Label htmlFor="jpDescription" className="block mb-2 text-sm font-medium text-black">
                    Description (Japanese)
                </Label>
                <Textarea
                    id="jpDescription"
                    {...register("jpDescription")}
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Product Description (Japanese)"
                />
            </div>

            <div>
                <Label htmlFor="price" className="block mb-2 text-sm font-medium text-black">
                    Цена
                </Label>
                <Input
                    id="price"
                    {...register("price")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Product Name (Japanese)"
                />
            </div>

            {/* Category Select */}
            <div>
                <Label htmlFor="categoryId" className="block mb-2 text-sm font-medium text-black">
                    Category
                </Label>
                <select
                    id="categoryId"
                    {...register("categoryId")}
                    className="block w-full p-2 border border-black text-black rounded"
                >
                    {categories.map((category: any) => (
                        <option key={category.id} value={category.id} className="text-black">
                            {category.ruTitle}
                        </option>
                    ))}
                </select>
            </div>

            {/* Image Upload */}
            <div>
                <Label htmlFor="images" className="block mb-2 text-sm font-medium cursor-pointer text-black">
                    Upload Images
                </Label>
                <Input
                    type="file"
                    id="images"
                    multiple
                    {...register("images")}
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="block w-full text-sm cursor-pointer text-gray-500"
                />
            </div>

            {/* Image Previews */}
            <ScrollArea className="w-full mt-2">
                <div className="grid grid-cols-5 gap-2">
                    {previewImages.map(({ id, url }, index) => (
                        <div key={index} className="relative">
                            <Image
                                src={url}
                                width={100}
                                height={100}
                                alt="Preview"
                                className="w-full h-full object-contain rounded"
                                quality={50}
                            />
                            <button
                                type="button"
                                onClick={() => deleteImage(id, url)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1.5"
                            >
                                <AiFillDelete size={20} />
                            </button>
                        </div>
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
