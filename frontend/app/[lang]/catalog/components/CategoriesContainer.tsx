import Categories from "@/components/children/Categories";
import axios from "axios";

const CategoriesContainer = async () => {
    const resCategories = await axios.get(`${process.env.API_URL}/category`);

    if (resCategories.status !== 200 && resCategories.status !== 201) return null;

    return <Categories categories={resCategories.data} />;
};

export default CategoriesContainer;
