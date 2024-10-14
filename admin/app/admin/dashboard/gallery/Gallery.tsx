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
import React from "react";
import action from "../../actions";
import { useToast } from "@/hooks/use-toast";

interface GalleryProps {
    item: any;
    token: any;
    index: number;
}

const Gallery: React.FC<GalleryProps> = ({ item, token, index }) => {
    const { toast } = useToast();

    async function deleteGallery() {
        const res = await fetch(
            process.env.NEXT_PUBLIC_API_URL + `/gallery/${item.id}`,
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
                description: "Error while delete gallery.",
                variant: "destructive",
            });
            return;
        }
        toast({
            title: "Success!",
            description: "Gallery successfully deleted.",
        });
        action("/Gallery");
    }

    return (
        <div className="w-full rounded overflow-hidden shadow-lg bg-white p-3 border">
            <div className="w-full flex justify-between items-center gap-2 mb-2">
                <p>{index + 1}.</p>
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
                            <AlertDialogAction onClick={deleteGallery}>
                                Continue
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <Image
                className="w-full h-48 object-cover bg-gray-200"
                unoptimized={true}
                src={item.url}
                alt={"gallery"}
                width={200}
                height={200}
            />
        </div>
    );
};

export default Gallery;
