"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getCookies } from "@/lib/cookies.request";
import { callMessage } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import action from "@/app/admin/actions";
import { useRouter } from "next/navigation";

interface Props {
    id: number;
    question: {
        ruQuestion: string;
        uzQuestion: string;
        enQuestion: string;
        jpQuestion: string;
        ruAnswer: string;
        uzAnswer: string;
        enAnswer: string;
        jpAnswer: string;
    };
}

interface QuestionForm {
    ruQuestion: string;
    uzQuestion: string;
    enQuestion: string;
    jpQuestion: string;
    ruAnswer: string;
    uzAnswer: string;
    enAnswer: string;
    jpAnswer: string;
}

export const PatchQuestion: React.FC<Props> = ({ id, question }) => {
    const { push } = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<QuestionForm>();

    useEffect(() => {
        reset({
            ruQuestion: question.ruQuestion,
            uzQuestion: question.uzQuestion,
            enQuestion: question.enQuestion,
            jpQuestion: question.jpQuestion,
            ruAnswer: question.ruAnswer,
            uzAnswer: question.uzAnswer,
            enAnswer: question.enAnswer,
            jpAnswer: question.jpAnswer,
        });
    }, [question, reset]);

    const onSubmit = async (data: any) => {

        try {
            const token = await getCookies("token");

<<<<<<< HEAD
            console.log(token);


=======
>>>>>>> 4ef8dd0604b4042e94b946efb5679260f585e1f1
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/question/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json", 
                    },
                    body: JSON.stringify(data),
                }
            );
            

            if (res.ok) {
                reset();
                callMessage("default", "Question updated successfully");
                action("question");
                push("/admin/dashboard/question");
            }
        } catch (err: any) {
            console.error(err);
            callMessage("destructive", "Something went wrong");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Label htmlFor="ruQuestion" className="block mb-2 text-sm font-medium text-black">
                    Question (Russian)
                </Label>
                <Input
                    id="ruQuestion"
                    {...register("ruQuestion")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Question (Russian)"
                />
            </div>

            <div className="">
                <Label htmlFor="ruDescription" className="block mb-2 text-sm font-medium text-black">
                    Answer (Russian)
                </Label>
                <Textarea
                    id="ruDescription"
                    {...register("ruAnswer")}
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Answer (Russian)"
                />
            </div>

            <div>
                <Label htmlFor="enQuestion" className="block mb-2 text-sm font-medium text-black">
                    Question (English)
                </Label>
                <Input
                    id="enQuestion"
                    {...register("enQuestion")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Question (English)"
                />
            </div>

            <div>
                <Label htmlFor="enDescription" className="block mb-2 text-sm font-medium text-black">
                    Answer (English)
                </Label>
                <Textarea
                    id="enDescription"
                    {...register("enAnswer")}
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Answer (English)"
                />
            </div>

            <div>
                <Label htmlFor="uzName" className="block mb-2 text-sm font-medium text-black">
                    Question (Uzbek)
                </Label>
                <Input
                    id="uzName"
                    {...register("uzQuestion")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Question (Uzbek)"
                />
            </div>

            <div>
                <Label htmlFor="uzDescription" className="block mb-2 text-sm font-medium text-black">
                    Answer (Uzbek)
                </Label>
                <Textarea
                    id="uzDescription"
                    {...register("uzAnswer")}
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Answer (Uzbek)"
                />
            </div>

            <div>
                <Label htmlFor="jpName" className="block mb-2 text-sm font-medium text-black">
                    Question (Japanese)
                </Label>
                <Input
                    id="jpName"
                    {...register("jpQuestion")}
                    type="text"
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Question (Japanese)"
                />
            </div>

            <div>
                <Label htmlFor="jpDescription" className="block mb-2 text-sm font-medium text-black">
                    Answer (Japanese)
                </Label>
                <Textarea
                    id="jpDescription"
                    {...register("jpAnswer")}
                    className="block w-full p-2 border border-black text-black rounded"
                    placeholder="Answer (Japanese)"
                />
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Updating..." : "Update Question"}
            </button>
        </form>
    );
};
