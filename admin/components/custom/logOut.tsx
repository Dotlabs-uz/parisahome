"use client";

import { deleteCookies } from "@/lib/cookies.request";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

function LogOutButton() {

    const router = useRouter()

    const logOut = async () => {
        await deleteCookies("token");
        await deleteCookies("role");
        router.refresh()
    };

    return (
        <button
            title="exit"
            className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded p-2"
            onClick={logOut}
        >
            <LogOut size={23} color="red" />
            <span className="text-red-500">EXIT</span>
        </button>
    );
}

export default LogOutButton;
