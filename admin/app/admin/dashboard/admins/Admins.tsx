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
import React, { useState } from "react";
import action from "../../actions";
import { getCookies } from "@/lib/cookies.request";
import { useToast } from "@/hooks/use-toast";
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdEdit } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";

interface CertificateProps {
    item: any;
    token: string;
}
type Inputs = {
    login: string;
    password: string;
};

const Admins: React.FC<CertificateProps> = ({ item, token }) => {
    const [changeHandle, setChangeHandle] = useState(false);
    const { toast } = useToast();

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
                process.env.NEXT_PUBLIC_API_URL + `/admin/${item.id}`,
                {
                    method: "PATCH",
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
                    description: "Admin successfully edited!",
                    variant: "default",
                });
                action("admin");
                setChangeHandle(false);
                reset();
            } else {
                toast({
                    title: "Error!",
                    description: "Error while changing admin.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast({
                title: "Error!",
                description: "Failed to send data.",
                variant: "destructive",
            });
        }
    };

    const deleteAdmin = async () => {
        try {
            const token = await getCookies("token");

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/admin/${item.id}`,
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
                    description: "Error while delete admin.",
                    variant: "destructive",
                });
                return;
            }
            toast({
                title: "Success!",
                description: "Admin successfully deleted.",
            });
            action("/admin");
        } catch (error) {}
    };

    return (
        <div className="w-full rounded overflow-hidden shadow-lg bg-white border flex items-center justify-between p-3">
            <div>
                <div className="font-medium text-lg">Login: {item.login}</div>
                <p className="text-gray-700 text-base">Role: {item.role}</p>
            </div>
            <div className="flex items-center justify-end gap-3">
                <Dialog
                    open={changeHandle}
                    onOpenChange={(event) => {
                        setChangeHandle(event);
                        !event ? reset() : null;
                    }}
                >
                    <DialogTrigger asChild>
                        <div className="p-2.5 bg-blue-500 rounded-lg cursor-pointer">
                            <MdEdit color="white" />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white">
                        <DialogHeader>
                            <DialogTitle>Edit Admin</DialogTitle>
                            <DialogDescription>
                                Make changes in admin here. Click save when
                                you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="grid gap-4 py-4"
                        >
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="login" className="text-right">
                                    Login
                                </Label>
                                <Input
                                    {...register("login", {
                                        required: true,
                                    })}
                                    id="login"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <div></div>
                                <div className="col-span-3">
                                    {errors.login && (
                                        <span className="text-rose-600">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label
                                    htmlFor="password"
                                    className="text-right"
                                >
                                    Password
                                </Label>
                                <Input
                                    {...register("password", {
                                        required: true,
                                    })}
                                    id="password"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <div></div>
                                <div className="col-span-3">
                                    {errors.password && (
                                        <span className="text-rose-600">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                            </div>

                            <DialogFooter>
                                <Button
                                    className="bg-blue-600 hover:bg-blue-500"
                                    type="submit"
                                >
                                    Save changes
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
                <AlertDialog>
                    <AlertDialogTrigger className="bg-red-500 py-2 px-2 rounded-lg text-white">
                        <MdDelete size={20} />
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
                                onClick={deleteAdmin}
                                className="bg-red-600 hover:bg-red-400"
                            >
                                Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    );
};

export default Admins;
