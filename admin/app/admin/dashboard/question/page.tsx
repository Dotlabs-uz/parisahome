import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Questions from "./Questions";
import { cookies } from "next/headers";
import QuestionForm from "./Create";

interface pageProps {}

const page: React.FC<pageProps> = async () => {
    const res = await fetch(process.env.API_URL + "/question", {
        cache: "no-store",
    });
    if (!res.ok) return <h1>Something went wrong</h1>;
    const question = await res.json();
    const cookieStore = cookies();
    const resToken = cookieStore.get("token") as {
        name: string;
        value: string;
    };
    const token = JSON.parse(decodeURIComponent(resToken.value));

    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Manage questions</CardTitle>
            </CardHeader>
            <div className="w-full flex flex-col p-2">
                <QuestionForm token={token} />
                <div className="w-full">
                    <h2 className="text-2xl my-2">List of questions</h2>
                    <div className="grid grid-cols-2 gap-2 w-full">
                        {question.map((item: any, index: number) => (
                            <Questions key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default page;
