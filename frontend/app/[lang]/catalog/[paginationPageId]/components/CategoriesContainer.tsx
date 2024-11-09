import Categories from "@/components/children/Categories";
import axios from "axios";

const CategoriesContainer = async ({ searchParams }: any) => {
    const resCategories = await axios.get(`${process.env.API_URL}/category`);
    console.log(searchParams);
    if (resCategories.status !== 200 && resCategories.status !== 201) return null;

    return <Categories categories={resCategories.data} searchParams={searchParams} />;
};

export default CategoriesContainer;
