"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import action from "../../actions";

export default function MachinesForm({ token }: { token: string }) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const {toast} = useToast()

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Создаем FormData объект для отправки
        const formData = new FormData(e.target);

        try {
            formData.append("name", "");
            const response = await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/machines",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                toast({
                    title: "Success!",
                    description: "Machines successfully added!",
                });
                e.target.reset(); 
                setImagePreview(null)
                action("machines")
            } else {
                toast({
                    title: "Error!",
                    description: "Error while adding machines.",
                    variant:"destructive"
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast({
                title: "Error!",
                description: "Failed to send machines data.",
                variant:"destructive"
            });
        }
    };

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    Add New Machine
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="Enter machines title"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input
                            id="price"
                            name="price"
                            placeholder="Enter machines price"
                            defaultValue={0}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Enter machines description"
                            required
                            className="min-h-[100px]"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">Upload Image</Label>
                        <div className="flex items-center space-x-2">
                            <Input
                                id="image"
                                name="image"
                                type="file"
                                required
                                onChange={handleImageChange}
                                className="h-auto file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                            />
                        </div>
                    </div>

                    {imagePreview && (
                        <div className="mt-4">
                            <Label>Image Preview</Label>
                            <div className="mt-2 relative aspect-video rounded-lg overflow-hidden border border-gray-200">
                                <img
                                    src={imagePreview}
                                    alt="Machines preview"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    )}

                    <Button type="submit" className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Machines
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
