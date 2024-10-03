import React, { useEffect, useState, useRef } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCookies } from '@/lib/cookies.request';
import { callMessage } from '@/lib/utils';

interface Props {
    children: React.ReactNode;
    id: number;
}

interface GoodForm {
    name: string;
    description: string;
    categoryId: number;
    images: FileList;
}

export const PatchGoodModal: React.FC<Props> = ({ children, id }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [categories, setCategories] = useState<any[]>([]);
    const [existingImages, setExistingImages] = useState<any[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<GoodForm>();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);
            try {
                const productRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`);
                if (!productRes.ok) throw new Error(`Error fetching product: ${productRes.statusText}`);
                const productData = await productRes.json();

                const categoryRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
                const categoryData = await categoryRes.json();
                setCategories(categoryData);

                reset({
                    name: productData.name,
                    description: productData.description,
                    categoryId: productData.categoryId,
                });
                setExistingImages(productData.images || []);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id, reset]);

    const onSubmit = async (formData: GoodForm) => {
        try {
            const token = await getCookies("token");

            const data = new FormData();
            data.append("name", formData.name);
            data.append("description", formData.description);
            data.append("categoryId", formData.categoryId.toString());
            data.append("price", "0");

            const allImages = [...existingImages];

            if (formData.images) {
                Array.from(formData.images).forEach((file) => {
                    data.append("images", file);
                    allImages.push({ url: URL.createObjectURL(file) });
                });
            }

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: data,
            });

            if (res.status === 200 || res.status === 201) {
                reset();
                callMessage("default", "Product patched successfully");
            }

        } catch (err: any) {
            console.error(err);
            callMessage("destructive", "Something went wrong");
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white text-black">
                <DialogHeader>
                    <DialogTitle>Patch Good</DialogTitle>
                    <DialogDescription>
                        Edit the product details below:
                    </DialogDescription>
                </DialogHeader>

                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                {...register("name", { required: true })}
                                type="text"
                                className="block w-full p-2 border border-gray-300 rounded"
                                placeholder="Product Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="description"
                                {...register("description", { required: true })}
                                className="block w-full p-2 border border-gray-300 rounded"
                                placeholder="Product Description"
                            />
                        </div>

                        <div>
                            <label htmlFor="categoryId" className="block mb-2 text-sm font-medium text-gray-700">Category</label>
                            <select
                                id="categoryId"
                                {...register("categoryId", { required: true })}
                                className="block w-full p-2 border border-gray-300 rounded"
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="images" className="block mb-2 text-sm font-medium text-gray-700">Upload Images</label>
                            <input
                                type="file"
                                id="images"
                                multiple
                                {...register("images")}
                                ref={fileInputRef}
                                className="block w-full text-sm text-gray-500"
                            />
                        </div>

                        <ScrollArea className="h-24 w-full">
                            <div className="flex gap-2 overflow-x-auto">
                                {existingImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.url}
                                        alt={`Preview ${index}`}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                ))}
                                {fileInputRef.current?.files && Array.from(fileInputRef.current.files).map((file, index) => (
                                    <img
                                        key={`new-${index}`}
                                        src={URL.createObjectURL(file)}
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
                )}
            </DialogContent>
        </Dialog>
    );
};
