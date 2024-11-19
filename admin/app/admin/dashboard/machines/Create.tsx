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

    const { toast } = useToast();

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

        const formData = new FormData(e.target);

        try {
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
                    description: "Machine successfully added!",
                });
                e.target.reset();
                setImagePreview(null);
                action("machines");
            } else {
                toast({
                    title: "Error! 2",
                    description: "Error while adding machine. 2",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast({
                title: "Error!",
                description: "Failed to send machine data.",
                variant: "destructive",
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
                    {/* Title Inputs for Different Languages */}
                    <div className="space-y-2">
                        <Label htmlFor="title_ru">Title (RU)</Label>
                        <Input
                            id="title_ru"
                            name="ruTitle"
                            placeholder="Enter machine title in Russian"
                            required
                        />
                        <Label htmlFor="title_uz">Title (UZ)</Label>
                        <Input
                            id="title_uz"
                            name="uzTitle"
                            placeholder="Enter machine title in Uzbek"
                            required
                        />
                        <Label htmlFor="title_en">Title (EN)</Label>
                        <Input
                            id="title_en"
                            name="enTitle"
                            placeholder="Enter machine title in English"
                            required
                        />
                        <Label htmlFor="title_jp">Title (JP)</Label>
                        <Input
                            id="title_jp"
                            name="jpTitle"
                            placeholder="Enter machine title in Japanese"
                            required
                        />
                    </div>

                    {/* Description Inputs for Different Languages */}
                    <div className="space-y-2">
                        <Label htmlFor="description_ru">Description (RU)</Label>
                        <Textarea
                            id="description_ru"
                            name="ruDescription"
                            placeholder="Enter machine description in Russian"
                            required
                            className="min-h-[100px]"
                        />
                        <Label htmlFor="description_uz">Description (UZ)</Label>
                        <Textarea
                            id="description_uz"
                            name="uzDescription"
                            placeholder="Enter machine description in Uzbek"
                            required
                            className="min-h-[100px]"
                        />
                        <Label htmlFor="description_en">Description (EN)</Label>
                        <Textarea
                            id="description_en"
                            name="enDescription"
                            placeholder="Enter machine description in English"
                            required
                            className="min-h-[100px]"
                        />
                        <Label htmlFor="description_jp">Description (JP)</Label>
                        <Textarea
                            id="description_jp"
                            name="jpDescription"
                            placeholder="Enter machine description in Japanese"
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
                                    alt="Machine preview"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    )}

                    <Button type="submit" className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Machine
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
