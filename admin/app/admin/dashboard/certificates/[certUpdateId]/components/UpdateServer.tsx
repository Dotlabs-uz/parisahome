import { PatchGoodModal } from "@/components/custom/modals/PatchGoodModal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PatchCertificate } from "./children/PatchCertificate";

const UpdateServer = async ({ certUpdateId }: { certUpdateId: number }) => {
    const resCert = await fetch(`${process.env.API_URL}/certificate/${certUpdateId}`, {
        cache: "no-store",
    });
    const resCategory = await fetch(`${process.env.API_URL}/cert-category`);

    if (!resCert.ok || !resCategory.ok) return "error!";

    const certificate = await resCert.json();
    const categories = await resCategory.json();
    return (
        <div className="bg-white p-5 rounded-xl">
            <div className="mb-5 flex flex-col gap-5">
                <Link
                    href={"/admin/dashboard/certificates"}
                    className="flex items-center gap-1 border w-fit py-1 px-2 rounded-sm bg-black hover:bg-black/80 duration-150"
                >
                    <ArrowLeft size={20} /> Назад
                </Link>
                <h1 className="text-2xl font-bold text-black">
                    Update Product: {certificate.ruTitle}
                </h1>
            </div>
            <PatchCertificate id={certUpdateId} certificate={certificate} categories={categories} />
        </div>
    );
};

export default UpdateServer;
