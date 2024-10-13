"use server"

const URL = `${process.env.API_URL}/product`;

const getGoods = async (
    page: number,
    categoryId: number | undefined
): Promise<any> => {
    let queryUrl = "";

    if (categoryId !== undefined) {
        queryUrl += `&categoryId=${categoryId}`
    }

    try {
        // const res = await fetch(`${URL}?page=${page}${queryUrl}`, { next: { revalidate: 50 } });

        const res = await fetch(`${URL}?page=${page}${queryUrl}`, { cache: "no-store" });

        return res.json();
    } catch (error) {
        return {
            status: 500,
            massage: error,
        };
    }
};

export default getGoods;