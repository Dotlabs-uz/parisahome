"use server"

const URL = `${process.env.API_URL}/product`;

const getPublications = async (
    page: number,
    categoryId: number | undefined
): Promise<any> => {
    let queryUrl = "";

    if (categoryId !== undefined) {
        queryUrl += `&categoryId=${categoryId}`
    }

    try {
        const res = await fetch(`${URL}?page=${page}${queryUrl}`);

        return res.json();
    } catch (error) {
        return {
            status: 500,
            massage: error,
        };
    }
};

export default getPublications;
