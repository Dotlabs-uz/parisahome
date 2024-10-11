import {
    TbCategoryFilled,
    TbPackageExport,
    TbCalendarCog,
} from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import { MdQuestionAnswer } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { parseJwt } from "@/lib/utils";
import NavLink from "./NavLink";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { IoMdSettings } from "react-icons/io";
import LogOutButton from "@/components/custom/logOut";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = cookies();
    const coockied = cookieStore.get("token");
    const resRole = cookieStore.get("role");

    if (!coockied || !resRole) redirect("/admin/login");
    const jwt = parseJwt(decodeURIComponent(coockied?.value));

    const role = JSON.parse(decodeURIComponent(resRole?.value));

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
                    <NavLink
                        href="/admin/dashboard/goods"
                        Icon={<TbCategoryFilled />}
                    >
                        Goods
                    </NavLink>
                    <NavLink
                        href="/admin/dashboard/categories"
                        Icon={<TbPackageExport />}
                    >
                        Categories
                    </NavLink>
                    <NavLink
                        href="/admin/dashboard/certificates"
                        Icon={<TbCalendarCog />}
                    >
                        Certificates
                    </NavLink>
                    <NavLink
                        href="/admin/dashboard/machines"
                        Icon={<AiFillProduct />}
                    >
                        Machines
                    </NavLink>
                    <NavLink
                        href="/admin/dashboard/question"
                        Icon={<MdQuestionAnswer />}
                    >
                        FAQ
                    </NavLink>
                    {role === "superAdmin" && (
                        <>
                            <NavLink
                                href="/admin/dashboard/admins"
                                Icon={<RiAdminFill />}
                            >
                                Admins
                            </NavLink>
                            <NavLink
                                href="/admin/dashboard/settings"
                                Icon={<IoMdSettings />}
                            >
                                Settings
                            </NavLink>
                        </>
                    )}
                    <LogOutButton />
                </nav>
            </aside>
            <main className="flex-1 p-8 overflow-y-auto">{children}</main>
        </div>
    );
}
