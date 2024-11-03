"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import action from "../../actions";
import { useToast } from "@/hooks/use-toast";

type Inputs = {
    ruQuestion: string;
    uzQuestion: string;
    enQuestion: string;
    jpQuestion: string;
    ruAnswer: string;
    uzAnswer: string;
    enAnswer: string;
    jpAnswer: string;
};

export default function QuestionForm({ token }: { token: string }) {
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        try {
            const response = await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/question",
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                toast({
                    title: "Success!",
                    description: "Question successfully added!",
                    variant: "default",
                });
                action("question");
                reset();
            } else {
                toast({
                    title: "Error!",
                    description: "Error while adding question.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast({
                title: "Error!",
                description: "Failed to send question data.",
                variant: "destructive",
            });
        }
    };

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    Add New Question
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    encType="multipart/form-data"
                    className="space-y-6"
                >
                    {/* Question Inputs */}
                    <div className="">
                        <div className="space-y-2">
                            <Label htmlFor="question_ru" className="mt-3 block">Question (RU)</Label>
                            <Input
                                {...register("ruQuestion", { required: true })}
                                id="question_ru"
                                placeholder="Enter question in Russian"
                                required
                            />
                            <Label htmlFor="answer_ru">Answer (RU)</Label>
                            <Textarea
                                {...register("ruAnswer", { required: true })}
                                id="answer_ru"
                                placeholder="Enter answer in Russian"
                                required
                                className="min-h-[100px]"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="question_uz" className="mt-3 block">Question (UZ)</Label>
                            <Input
                                {...register("uzQuestion", { required: true })}
                                id="question_uz"
                                placeholder="Enter question in Uzbek"
                                required
                            />
                            <Label htmlFor="answer_uz">Answer (UZ)</Label>
                            <Textarea
                                {...register("uzAnswer", { required: true })}
                                id="answer_uz"
                                placeholder="Enter answer in Uzbek"
                                required
                                className="min-h-[100px]"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="question_en" className="mt-3 block">Question (EN)</Label>
                            <Input
                                {...register("enQuestion", { required: true })}
                                id="question_en"
                                placeholder="Enter question in English"
                                required
                            />
                            <Label htmlFor="answer_en">Answer (EN)</Label>
                            <Textarea
                                {...register("enAnswer", { required: true })}
                                id="answer_en"
                                placeholder="Enter answer in English"
                                required
                                className="min-h-[100px]"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="question_jp" className="mt-3 block">Question (JP)</Label>
                            <Input
                                {...register("jpQuestion", { required: true })}
                                id="question_jp"
                                placeholder="Enter question in Japanese"
                                required
                            />
                            <Label htmlFor="answer_jp">Answer (JP)</Label>
                            <Textarea
                                {...register("jpAnswer", { required: true })}
                                id="answer_jp"
                                placeholder="Enter answer in Japanese"
                                required
                                className="min-h-[100px]"
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Question
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
