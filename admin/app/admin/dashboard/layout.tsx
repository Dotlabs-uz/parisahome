import { TbCategoryFilled, TbPackageExport, TbCalendarCog } from "react-icons/tb";
import { AiFillProduct } from "react-icons/ai";
import { parseJwt } from "@/lib/utils";
import NavLink from "./NavLink";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";



export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = cookies();
	const coockied = cookieStore.get("token");

	if (!coockied) redirect("/admin/login");
	const jwt = parseJwt(decodeURIComponent(coockied?.value));

	if (jwt.exp < Date.now() / 1000) {
		redirect("/admin/login");
	}

	return (
		<div className="flex h-screen bg-gray-100">
			<aside className="w-64 bg-white shadow-md">
				<nav className="p-5 space-y-2">
					<h1 className="text-black text-2xl mb-4">
						Admin dashboard
					</h1>
					<hr />
					<NavLink href="/admin/dashboard/goods" Icon={<TbCategoryFilled/> }>
						Goods
					</NavLink>
					<NavLink href="/admin/dashboard/categories" Icon={<TbPackageExport/> }>
						Categories
					</NavLink>
					<NavLink href="/admin/dashboard/certificates" Icon={<TbCalendarCog/> }>
						Certificates
					</NavLink>
					<NavLink href="/admin/dashboard/machines" Icon={<AiFillProduct/> }>
						Machines
					</NavLink>
					<NavLink href="/admin/dashboard/question" Icon={<AiFillProduct/> }>
						FAQ
					</NavLink>
				</nav>
			</aside>
			<main className="flex-1 p-8 overflow-y-auto">{children}</main>
		</div>
	);
}
