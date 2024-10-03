"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { use } from "react";
import action from "../../actions";
import { getCookies } from "@/lib/cookies.request";

interface CertificateProps {
    item: any;
}

const Questions: React.FC<CertificateProps> = ({
    item,
}: {
    item: { id: number; question: string; answer: string };
}) => {
    const deleteFIQ = async () => {
        try {
            const token = await getCookies("token");

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/question/${item.id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!res.ok) {
                alert("Error while delete question.");
            };
            alert("Question successfully deleted!");
            action("/question");

        } catch (error) {}
    };

    return (
        <div className="w-full rounded overflow-hidden shadow-lg bg-white">
            <div className="flex items-center justify-end p-2">
                <AlertDialog>
                    <AlertDialogTrigger className="bg-red-500 py-2 px-4 rounded-md text-white">
                        Delete
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={deleteFIQ}
                                className="bg-red-600 hover:bg-red-400"
                            >
                                Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <div className="px-6 pb-4">
                <div className="font-bold text-xl mb-2">{item.question}</div>
                <p className="text-gray-700 text-base">{item.answer}</p>
            </div>
        </div>
    );
};

export default Questions;
