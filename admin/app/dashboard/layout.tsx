import Link from "next/link";
import { HomeIcon, PackageIcon, CogIcon, HelpCircleIcon } from "lucide-react";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex h-screen bg-gray-100">
			<aside className="w-64 bg-white shadow-md">
				<nav className="p-5 space-y-2">
					<h1 className="text-black text-2xl mb-4" >Admin dashboard</h1>
					<hr/>
					<Link
						href="/dashboard/goods"
						className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
					>
						<PackageIcon className="h-5 w-5" />
						<span>Goods</span>
					</Link>
					<Link
						href="/dashboard/categories"
						className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
					>
						<HelpCircleIcon className="h-5 w-5" />
						<span>Categories</span>
					</Link>
					<Link
						href="/dashboard/certificates"
						className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
					>
						<PackageIcon className="h-5 w-5" />
						<span>Certificates</span>
					</Link>
					<Link
						href="/dashboard/machines"
						className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
					>
						<CogIcon className="h-5 w-5" />
						<span>Machines</span>
					</Link>
				</nav>
			</aside>
			<main className="flex-1 p-8 overflow-y-auto">{children}</main>
		</div>
	);
}
