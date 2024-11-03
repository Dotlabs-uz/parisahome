"use server"

const URL = `${process.env.API_URL}/certificate`;

const getCertificates = async (
    categoryId: number | undefined
): Promise<any> => {
    let queryUrl = "";

    if (categoryId !== undefined) {
        queryUrl += `?categoryId=${categoryId}`
    }

    try {
        const res = await fetch(`${URL}${queryUrl}`, { cache: "no-store" });

        return res.json();
    } catch (error) {
        return {
            status: 500,
            massage: error,
        };
    }
};

export default getCertificates;
