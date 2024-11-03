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
    certificate: {
        ruTitle: string;
        enTitle: string;
        uzTitle: string;
        jpTitle: string;
        ruDescription: string;
        enDescription: string;
        uzDescription: string;
        jpDescription: string;
        categoryId: number;
    };
    categories: { id: number; name: string }[];
}

interface CertificateForm {
    ruTitle: string;
    enTitle: string;
    uzTitle: string;
    jpTitle: string;
    ruDescription: string;
    enDescription: string;
    uzDescription: string;
    jpDescription: string;
    categoryId: number;
    image: File[];
}

export const PatchCertificate: React.FC<Props> = ({ id, certificate, categories }) => {
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const { push } = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { isSubmitting },
    } = useForm<CertificateForm>();

    useEffect(() => {
        reset({
            ruTitle: certificate.ruTitle,
            enTitle: certificate.enTitle,
            uzTitle: certificate.uzTitle,
            jpTitle: certificate.jpTitle,
            ruDescription: certificate.ruDescription,
            enDescription: certificate.enDescription,
            uzDescription: certificate.uzDescription,
            jpDescription: certificate.jpDescription,
            categoryId: certificate.categoryId,
        });
    }, [certificate, reset]);

    const onSubmit = async (formData: CertificateForm) => {
        try {
            const token = await getCookies("token");

            const data = new FormData();
            data.append("ruTitle", formData.ruTitle);
            data.append("enTitle", formData.enTitle);
            data.append("uzTitle", formData.uzTitle);
            data.append("jpTitle", formData.jpTitle);
            data.append("ruDescription", formData.ruDescription);
            data.append("enDescription", formData.enDescription);
            data.append("uzDescription", formData.uzDescription);
            data.append("jpDescription", formData.jpDescription);
            data.append("categoryId", formData.categoryId.toString());

            if (formData.image) {
                Array.from(formData.image).forEach((file) => {
                    data.append("image", file);
                });
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/certificate/${id}`,
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
                callMessage("default", "Certificate updated successfully");
                action("certificate");
                push("/admin/dashboard/certificates");
            }
        } catch (err: any) {
            console.error(err);
            callMessage("destructive", "Something went wrong");
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray = Array.from(files);
            setPreviewImages(fileArray.map((file) => URL.createObjectURL(file)));
            setValue("image", fileArray);
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
                    {...register("ruTitle")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Certificate Name (Russian)"
                />
            </div>

            <div>
                <Label htmlFor="enName" className="block mb-2 text-sm font-medium text-black">
                    Name (English)
                </Label>
                <Input
                    id="enName"
                    {...register("enTitle")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Certificate Name (English)"
                />
            </div>

            <div>
                <Label htmlFor="uzName" className="block mb-2 text-sm font-medium text-black">
                    Name (Uzbek)
                </Label>
                <Input
                    id="uzName"
                    {...register("uzTitle")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Certificate Name (Uzbek)"
                />
            </div>

            <div>
                <Label htmlFor="jpName" className="block mb-2 text-sm font-medium text-black">
                    Name (Japanese)
                </Label>
                <Input
                    id="jpName"
                    {...register("jpTitle")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Certificate Name (Japanese)"
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
                    placeholder="Certificate Description (Russian)"
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
                    placeholder="Certificate Description (English)"
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
                    placeholder="Certificate Description (Uzbek)"
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
                    placeholder="Certificate Description (Japanese)"
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
                <Label htmlFor="images" className="block mb-2 text-sm font-medium text-black">
                    Upload Images
                </Label>
                <Input
                    type="file"
                    id="images"
                    multiple
                    {...register("image")}
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="block w-full text-sm text-gray-500"
                />
            </div>

            {/* Image Previews */}
            <ScrollArea className="h-24 w-full mt-2">
                <div className="flex gap-2 overflow-x-auto">
                    {previewImages.map((src, index) => (
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
                {isSubmitting ? "Updating..." : "Update Certificate"}
            </button>
        </form>
    );
};
