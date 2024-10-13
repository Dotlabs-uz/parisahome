import UpdateServer from "./components/UpdateServer";
import { Suspense } from "react";

const GoodsUpdatePage = async ({ params: { updateId } }: any) => {
    return (
        <div className="bg-white p-5 rounded-xl">
            <Suspense fallback={"Loading.."}>
                <UpdateServer updateId={updateId} />
            </Suspense>
        </div>
    );
};

export default GoodsUpdatePage;
