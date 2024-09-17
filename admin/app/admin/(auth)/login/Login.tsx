"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
        setLoading(true)

		const res = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/admin/signin",
			{
				method: "post",
				body: JSON.stringify({ login, password }),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			alert("Somethin went wrong!");
            setLoading(false)
			return;
		}

		const data = await res.json();

		Cookies.set("token", data.accessToken, {
			expires: 7, // срок действия куки, например, 7 дней
			secure: process.env.NODE_ENV === "production", // Только для HTTPS в продакшн
		});

        setLoading(false)
		router.push("/admin/dashboard");
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-2xl font-bold">Login</CardTitle>
					<CardDescription>
						Enter your credentials to access your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="login">Username or Email</Label>
							<Input
								id="login"
								type="text"
								placeholder="Enter your username or email"
								value={login}
								onChange={(e) => setLogin(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<CardFooter>
							<Button
								disabled={loading}
								className="w-full"
								type="submit"
							>
								{loading ? "loading" : "Log In"}
							</Button>
						</CardFooter>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
