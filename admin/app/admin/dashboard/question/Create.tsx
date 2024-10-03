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

type Inputs = {
    answer: string;
    question: string;
};

export default function QuestionForm({ token }: { token: string }) {
    // const handleSubmit = async (e: any) => {
    //     e.preventDefault();

    //     let info: any = {};

    //     const formData = new FormData(e.target);

    //     formData.forEach((value, key) => {
    //         info[key] = value;
    //     });

    //
    // };

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
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
                alert("Question successfully added!");
				action("question")
                reset();
            } else {
                alert("Error while adding question.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send question data.");
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
                    <div className="space-y-2">
                        <Label htmlFor="title">Question</Label>
                        <Input
                            {...register("question", { required: true })}
                            id="question"
                            placeholder="Enter question"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Answer</Label>
                        <Textarea
                            {...register("answer", { required: true })}
                            id="answer"
                            placeholder="Enter answer"
                            required
                            className="min-h-[100px]"
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Question
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
