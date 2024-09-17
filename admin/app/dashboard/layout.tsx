"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PackageIcon, CogIcon, HelpCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { parseJwt } from "@/lib/utils";

function NavLink({
	href,
	icon: Icon,
	children,
}: {
	href: string;
	icon: React.ElementType;
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={`flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2 ${
				isActive ? "bg-gray-100 text-blue-600" : ""
			}`}
		>
			<Icon className="h-5 w-5" />
			<span>{children}</span>
		</Link>
	);
}

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const token = Cookies.get("token");

	if (!token) {
		router.push("/login");
		return;
	}
	const jwt = parseJwt(token);

	if (jwt.exp < Date.now() / 1000) {
		router.push("/login");
	}

	return (
		<div className="flex h-screen bg-gray-100">
			<aside className="w-64 bg-white shadow-md">
				<nav className="p-5 space-y-2">
					<h1 className="text-black text-2xl mb-4">
						Admin dashboard
					</h1>
					<hr />
					<NavLink href="/dashboard/goods" icon={PackageIcon}>
						Goods
					</NavLink>
					<NavLink href="/dashboard/categories" icon={HelpCircleIcon}>
						Categories
					</NavLink>
					<NavLink href="/dashboard/certificates" icon={PackageIcon}>
						Certificates
					</NavLink>
					<NavLink href="/dashboard/machines" icon={CogIcon}>
						Machines
					</NavLink>
				</nav>
			</aside>
			<main className="flex-1 p-8 overflow-y-auto">{children}</main>
		</div>
	);
}
