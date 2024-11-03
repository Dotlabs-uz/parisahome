"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCookies } from "@/lib/cookies.request";
import { callMessage } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import action from "@/app/admin/actions";
import { useRouter } from "next/navigation";

interface Props {
    id: number;
    gallery: {
        url: File[];
    };
}

interface CertificateForm {
    url: File[];
}

export const PatchGallery: React.FC<Props> = ({ id }) => {
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

    const onSubmit = async (formData: CertificateForm) => {
        try {
            const token = await getCookies("token");

            const data = new FormData();

            if (formData.url) {
                Array.from(formData.url).forEach((file) => {
                    data.append("url", file);
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
            setValue("url", fileArray);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Image Upload */}
            <div>
                <Label htmlFor="images" className="block mb-2 text-sm font-medium text-black">
                    Upload Images
                </Label>
                <Input
                    type="file"
                    id="images"
                    multiple
                    {...register("url")}
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
