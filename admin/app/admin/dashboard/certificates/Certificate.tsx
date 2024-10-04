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
import { Pencil, Trash } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";
import action from "../../actions";
import { useToast } from "@/hooks/use-toast";

interface CertificateProps {
    item: any;
    token: any;
}

const Certificate: React.FC<CertificateProps> = ({ item, token }) => {
    const { toast } = useToast();

    async function deleteCertificate() {
        const res = await fetch(
            process.env.NEXT_PUBLIC_API_URL + `/certificate/${item.id}`,
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
                description: "Error while delete certificate.",
                variant: "destructive",
            });
            return;
        }
        toast({
            title: "Success!",
            description: "Certificate successfully deleted.",
        });
        action("/certificate");
    }

    return (
        <div className="w-full rounded overflow-hidden shadow-lg bg-white p-3 border">
            <div className="w-full flex justify-end items-center gap-2 mb-2">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete</Button>
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
                            <AlertDialogAction onClick={deleteCertificate}>
                                Continue
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <Image
                className="w-full h-48 object-cover bg-gray-200"
                unoptimized={true}
                src={item.images[0].url}
                alt={item.title}
                width={200}
                height={200}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
            </div>
        </div>
    );
};

export default Certificate;
