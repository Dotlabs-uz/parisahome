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
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

interface CertificateProps {
    item: {
        id: number
        ruQuestion: string
        uzQuestion: string
        enQuestion: string
        jpQuestion: string
        ruAnswer: string
        uzAnswer: string
        enAnswer: string
        jpAnswer: string
    };
}

const Questions: React.FC<CertificateProps> = ({
    item,
}) => {

    const { toast } = useToast()

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
                toast({
                    title: "Error!",
                    description: "Error while delete question.",
                    variant: "destructive"
                });
                return
            };
            toast({
                title: "Success!",
                description: "Question successfully deleted.",
            });
            action("/question");

        } catch (error) { }
    };

    return (
        <div className="w-full rounded overflow-hidden shadow-lg bg-white">
            <div className="flex items-center justify-end p-2">
                <Link
                    href={`/admin/dashboard/question/${item.id}`}
                    className="mr-3 px-6 py-1.5 rounded-md border border-gray-300 hover:bg-gray-100 duration-200"
                >
                    Edit
                </Link>
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
                <div className="font-bold mb-2 py-2 border-b">
                    <p className="text-lg">{item.ruQuestion}</p>
                    <p className="text-sm text-gray-700">{item.ruAnswer}</p>
                </div>
                <div className="font-bold mb-2 py-2 border-b">
                    <p className="text-lg">{item.uzQuestion}</p>
                    <p className="text-sm text-gray-700">{item.uzAnswer}</p>
                </div>
                <div className="font-bold mb-2 py-2 border-b">
                    <p className="text-lg">{item.enQuestion}</p>
                    <p className="text-sm text-gray-700">{item.enAnswer}</p>
                </div>
                <div className="font-bold mb-2 py-2 border-none">
                    <p className="text-lg">{item.jpQuestion}</p>
                    <p className="text-sm text-gray-700">{item.jpAnswer}</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;
