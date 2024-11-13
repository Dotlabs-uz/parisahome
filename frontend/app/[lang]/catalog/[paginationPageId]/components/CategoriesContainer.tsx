"use client"
import Categories from "@/components/children/Categories";
import SkeletonCtegories from "@/components/skeletons/SkeletonCtegories";
import axios from "axios";
import { useEffect, useState } from "react";

const CategoriesContainer = ({ searchParams }: any) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`)
            .then(res => res.json())
            .then(res => setCategories(res))
            .finally(() => setLoading(false))
    }, [])
    // const resCategories = await axios.get(`${process.env.API_URL}/category`);

    // if (resCategories.status !== 200 && resCategories.status !== 201) return null;

    // return <></>
    return loading ? <SkeletonCtegories /> : <Categories categories={categories} searchParams={searchParams} />
};

export default CategoriesContainer;
