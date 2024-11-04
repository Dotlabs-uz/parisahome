"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import action from "../../actions";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CertificateForm({ token }: { token: string }) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [sertCategories, setSertCategories] = useState([]);
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
                process.env.NEXT_PUBLIC_API_URL + "/certificate",
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
                    description: `Certificate successfully added!`,
                });
                setImagePreview(null);
                e.target.reset(); // Очистка формы после успешной отправки
                action("certificate");
            } else {
                toast({
                    title: "Error!",
                    description: `Error while adding certificate.`,
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error!",
                description: `Failed to send certificate data.`,
                variant: "destructive",
            });
        }
    };

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/cert-category")
            .then((res) => res.json())
            .then((res) => setSertCategories(res));
    }, []);


    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    Add New Certificate
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <Label htmlFor="ruTitle">RU Title</Label>
                        <Input
                            id="ruTitle"
                            name="ruTitle"
                            placeholder="Enter certificate title"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="enTitle">EN Title</Label>
                        <Input
                            id="enTitle"
                            name="enTitle"
                            placeholder="Enter certificate title"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="uzTitle">UZ Title</Label>
                        <Input
                            id="uzTitle"
                            name="uzTitle"
                            placeholder="Enter certificate title"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="jpTitle">JP Title</Label>
                        <Input
                            id="jpTitle"
                            name="jpTitle"
                            placeholder="Enter certificate title"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="ruDescription">RU Description</Label>
                        <Textarea
                            id="ruDescription"
                            name="ruDescription"
                            placeholder="Enter certificate description"
                            required
                            className="min-h-[100px]"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="enDescription">EN Description</Label>
                        <Textarea
                            id="enDescription"
                            name="enDescription"
                            placeholder="Enter certificate description"
                            required
                            className="min-h-[100px]"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="uzDescription">UZ Description</Label>
                        <Textarea
                            id="uzDescription"
                            name="uzDescription"
                            placeholder="Enter certificate description"
                            required
                            className="min-h-[100px]"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="jpDescription">JP Description</Label>
                        <Textarea
                            id="jpDescription"
                            name="jpDescription"
                            placeholder="Enter certificate description"
                            required
                            className="min-h-[100px]"
                        />
                    </div>
                    <Select name="categoryId">
                        <SelectTrigger className="w-full text-gray-500">
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {sertCategories &&
                                sertCategories.map((item: any) => (
                                    <SelectItem
                                        className="text-black"
                                        key={item.id}
                                        value={`${item.id}`}
                                    >
                                        {item.ruTitle}
                                    </SelectItem>
                                ))}
                        </SelectContent>
                    </Select>

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
                                    alt="Certificate preview"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    )}

                    <Button type="submit" className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Certificate
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
