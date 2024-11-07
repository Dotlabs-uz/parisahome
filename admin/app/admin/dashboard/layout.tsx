import {
    TbCategoryFilled,
    TbPackageExport,
    TbCalendarCog,
} from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import { MdQuestionAnswer } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import NavLink from "./NavLink";
import { cookies } from "next/headers";
import { IoMdSettings } from "react-icons/io";
import LogOutButton from "@/components/custom/logOut";
import { GrGallery } from "react-icons/gr";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = cookies();
    const resRole = cookieStore.get("role") as { value: string }

    const role = JSON.parse(decodeURIComponent(resRole?.value));

    return (
        <div className="flex h-full bg-gray-100">
            <aside className="fixed left-0 top-0 w-64 h-screen bg-white shadow-md">
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
                        href="/admin/dashboard/cert-category"
                        Icon={<TbCategoryFilled />}
                    >
                        Certificates Categories
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
                    <NavLink
                        href="/admin/dashboard/gallery"
                        Icon={<GrGallery />}
                    >
                        Gallery
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
            <main className="flex-1 ml-64 p-8">{children}</main>
        </div>
    );
}
