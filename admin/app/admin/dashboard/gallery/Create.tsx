"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import action from "../../actions";
import { useToast } from "@/hooks/use-toast";

export default function GalleryForm({ token }: { token: string }) {
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

        // Создаем FormData объект для отправки
        const formData = new FormData(e.target);

        try {
            const response = await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/gallery",
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
                    description: `Gallery successfully added!`,
                });
                setImagePreview(null);
                e.target.reset(); // Очистка формы после успешной отправки
                action("gallery");
            } else {
                toast({
                    title: "Error!",
                    description: `Error while adding gallery.`,
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error!",
                description: `Failed to send gallery data.`,
                variant: "destructive",
            });
        }
    };

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    Add New Gallery
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="space-y-6"
                >
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
                                    alt="gallery preview"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    )}

                    <Button type="submit" className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Gallery
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
