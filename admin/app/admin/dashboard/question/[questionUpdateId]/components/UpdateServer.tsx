import { PatchGoodModal } from "@/components/custom/modals/PatchGoodModal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PatchQuestion } from "./children/PatchQuestion";


const UpdateServer = async ({ questionUpdateId }: { questionUpdateId: number }) => {
    const resQuestion = await fetch(`${process.env.API_URL}/question/${questionUpdateId}`, {
        cache: "no-store",
    });

    if (!resQuestion.ok) return "error!";

    const question = await resQuestion.json();

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
                    Update Product: {question.ruTitle}
                </h1>
            </div>

            <PatchQuestion id={questionUpdateId} question={question} />
        </div>
    );
};

export default UpdateServer;
