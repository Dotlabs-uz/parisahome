import Image from "next/image";

export default function Loading() {
    return (
        <div className="w-full h-screen flex items-center justify-center px-20">
            <Image
                className="max-w-xl w-full animate-pulse opacity-70"
                src={"/images/logo.svg"}
                width={1000}
                height={1000}
                alt="logo"
            />
        </div>
    )
}
