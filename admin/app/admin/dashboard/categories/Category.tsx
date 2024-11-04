"use client";
import action from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface QuestionForm {
    ruTitle: string;
    uzTitle: string;
    enTitle: string;
    jpTitle: string;
}

export default function Category({
    item,
    index,
    token,
}: {
    item: any;
    index: number;
    token: string;
}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<QuestionForm>();

    const [isProcessing, setIsProcessing] = useState(false);
    const { toast } = useToast();

    async function handleChangeName(data: QuestionForm) {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/category/${item.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Failed to update category: ${errorText}`);
            }

            toast({
                title: "Success!",
                description: "Category updated successfully.",
                variant: "default",
            });
            action("/category");
        } catch (e: any) {
            toast({
                title: "Error!",
                description: e.message || "Something went wrong!",
                variant: "destructive",
            });
        }
    }

    async function handleRemove() {
        const forSure = confirm("Are you sure you want to delete?");
        if (forSure) {
            try {
                setIsProcessing(true);
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/category/${item.id}`,
                    {
                        method: "DELETE",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (!res.ok) {
                    throw new Error(res.statusText);
                }

                toast({
                    title: "Deleted",
                    description: "Category deleted successfully.",
                    variant: "default",
                });

                action("/category");
            } catch (e: any) {
                toast({
                    title: "Error!",
                    description: e.message || "Something went wrong!",
                    variant: "destructive",
                });
            } finally {
                setIsProcessing(false);
            }
        }
    }

    useEffect(() => {
        reset({
            ruTitle: item.ruTitle,
            uzTitle: item.uzTitle,
            enTitle: item.enTitle,
            jpTitle: item.jpTitle,
        });
    }, [item, reset]);

    return (
        <form onSubmit={handleSubmit(handleChangeName)} className="mb-10">
            <div key={index} className="flex flex-col-reverse items-start">
                <div className="font-medium flex gap-3">
                    {isProcessing ? (
                        "Processing..."
                    ) : (
                        <>
                            <input
                                type="text"
                                className="border p-2 mb-1 w-full rounded-lg"
                                {...register("ruTitle")}
                                placeholder="Category RU Title"
                            />
                            <input
                                type="text"
                                className="border p-2 mb-1 w-full rounded-lg"
                                {...register("enTitle")}
                                placeholder="Category EN Title"
                            />
                            <input
                                type="text"
                                className="border p-2 mb-1 w-full rounded-lg"
                                {...register("uzTitle")}
                                placeholder="Category UZ Title"
                            />
                            <input
                                type="text"
                                className="border p-2 mb-1 w-full rounded-lg"
                                {...register("jpTitle")}
                                placeholder="Category JP Title"
                            />
                        </>
                    )}
                </div>
                <div className="flex justify-end gap-2 mb-5">
                    <Button type="submit" variant="outline" disabled={isProcessing}>
                        Edit
                    </Button>
                    <Button type="button" variant="outline" onClick={handleRemove} disabled={isProcessing}>
                        Delete
                    </Button>
                </div>
            </div>
        </form>
    );
}
