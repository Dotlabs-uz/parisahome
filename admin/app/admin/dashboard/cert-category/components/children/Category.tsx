"use client";
import action from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";

export default function Category({
    item,
    index,
    token,
}: {
    item: any;
    index: number;
    token: string;
}) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [ruTitle, setRuTitle] = useState(item.ruTitle);
    const [uzTitle, setUzTitle] = useState(item.uzTitle);
    const [enTitle, setEnTitle] = useState(item.enTitle);
    const [jpTitle, setJpTitle] = useState(item.jpTitle);

    const { toast } = useToast();

    async function handleChangeName() {
        // Only send changed values
        const updatedData = {
            ...(ruTitle !== item.ruTitle && { ruTitle }),
            ...(uzTitle !== item.uzTitle && { uzTitle }),
            ...(enTitle !== item.enTitle && { enTitle }),
            ...(jpTitle !== item.jpTitle && { jpTitle }),
        };

        if (Object.keys(updatedData).length === 0) {
            toast({
                title: "No changes detected",
                description: "Please modify a title before saving.",
                variant: "default",
            });
            return;
        }

        try {
            setIsProcessing(true);
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/cert-category/${item.id}`,
                {
                    method: "PATCH",
                    body: JSON.stringify(updatedData),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!res.ok) {
                throw new Error("Failed to update category.");
            }

            toast({
                title: "Success!",
                description: "Category updated successfully.",
                variant: "default",
            });
            action("/cert-category");
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

    async function handleRemove() {
        const forSure = confirm("Are you sure you want to delete?");
        if (forSure) {
            try {
                setIsProcessing(true);
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/cert-category/${item.id}`,
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

                action("/cert-category");
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

    return (
        <TableRow key={index} className="flex flex-col-reverse items-start">
            <TableCell className="font-medium flex gap-3">
                {isProcessing ? (
                    "Processing..."
                ) : (
                    <>
                        <input
                            type="text"
                            className="border p-2 mb-1 w-full rounded-lg"
                            value={ruTitle}
                            onChange={(e) => setRuTitle(e.target.value)}
                            placeholder="Category RU Title"
                        />
                        <input
                            type="text"
                            className="border p-2 mb-1 w-full rounded-lg"
                            value={enTitle}
                            onChange={(e) => setEnTitle(e.target.value)}
                            placeholder="Category EN Title"
                        />
                        <input
                            type="text"
                            className="border p-2 mb-1 w-full rounded-lg"
                            value={uzTitle}
                            onChange={(e) => setUzTitle(e.target.value)}
                            placeholder="Category UZ Title"
                        />
                        <input
                            type="text"
                            className="border p-2 mb-1 w-full rounded-lg"
                            value={jpTitle}
                            onChange={(e) => setJpTitle(e.target.value)}
                            placeholder="Category JP Title"
                        />
                    </>
                )}
            </TableCell>
            <TableCell className="flex justify-end gap-2">
                <Button variant="outline" onClick={handleChangeName} disabled={isProcessing}>
                    Edit
                </Button>
                <Button variant="outline" onClick={handleRemove} disabled={isProcessing}>
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    );
}
