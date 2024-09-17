"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
	href,
	Icon,
	children,
}: {
	href: string;
	Icon: any;
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
			{Icon}
			<span>{children}</span>
		</Link>
	);
}
