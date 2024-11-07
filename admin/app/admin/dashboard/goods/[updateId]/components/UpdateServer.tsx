import { PatchGoodModal } from "@/components/custom/modals/PatchGoodModal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const UpdateServer = async ({ updateId }: { updateId: number }) => {
    const resGood = await fetch(`${process.env.API_URL}/product/${updateId}`, {
        cache: "no-store",
    });
    const resCategory = await fetch(`${process.env.API_URL}/category`);

    if (!resGood.ok || !resCategory.ok) return "error!";

    const good = await resGood.json();
    const categories = await resCategory.json();

    return (
        <div className="bg-white p-5 rounded-xl">
            <div className="mb-5 flex flex-col gap-5">
                <Link
                    href={"/admin/dashboard/goods"}
                    className="flex items-center gap-1 border w-fit py-1 px-2 rounded-sm bg-black hover:bg-black/80 duration-150 text-white"
                >
                    <ArrowLeft size={20} /> Назад
                </Link>
                <h1 className="text-2xl font-bold text-black">
                    Update Product: {good.name}
                </h1>
            </div>
            <PatchGoodModal good={good} categories={categories} id={updateId} />
        </div>
    );
};

export default UpdateServer;
