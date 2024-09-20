"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(pathname === href);
    }, [pathname, href]);

    return (
        <Link
            href={href}
            className={cn(
                `flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2`,
                isActive && "bg-gray-100 text-blue-600"
            )}
        >
            {Icon}
            <span>{children}</span>
        </Link>
    );
}
