"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";
import action from "../../actions";
import { useToast } from "@/hooks/use-toast";

export default function AdminForm({ token }: { token: string }) {
    const { toast } = useToast();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        let info: any = {};

        const formData = new FormData(e.target);

        formData.forEach((value, key) => {
            info[key] = value;
        });
        
        try {
            const response = await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/admin/create",
                {
                    method: "POST",
                    body: JSON.stringify(info),
                    headers: {
						"Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                toast({
                    title: "Success!",
                    description: `Admin successfully added!`,
                });
                e.target.reset();
                action("admin");
            } else {
                toast({
                    title: "Error!",
                    description: `Error while adding admin.`,
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error!",
                description: `Failed to send admin data.`,
                variant: "destructive",
            });
        }
    };

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    Add New Admin
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <Label htmlFor="login">Login</Label>
                        <Input
                            id="login"
                            name="login"
                            placeholder="Enter admin login"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Enter admin password"
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4" /> Create Admin
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
