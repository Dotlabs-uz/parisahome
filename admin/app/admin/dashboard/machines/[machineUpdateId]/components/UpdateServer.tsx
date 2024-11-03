import { PatchGoodModal } from "@/components/custom/modals/PatchGoodModal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PatchMachine } from "./children/PatchMachine";

const UpdateServer = async ({ machineUpdateId }: { machineUpdateId: number }) => {
    const resMachine = await fetch(`${process.env.API_URL}/machines/${machineUpdateId}`, {
        cache: "no-store",
    });

    if (!resMachine.ok) return "error!";

    const machine = await resMachine.json();

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
                    Update Product: {machine.ruTitle}
                </h1>
            </div>

            <PatchMachine id={machineUpdateId} machine={machine} />
        </div>
    );
};

export default UpdateServer;
