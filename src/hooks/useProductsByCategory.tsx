import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import type {CategoryType, ProductType} from "../components/types/types.ts";


const fetchCategoryIdBySlug = async (slug: string) => {
    const { data } = await axios.get<CategoryType[]>(
        `https://api.escuelajs.co/api/v1/categories`
    );
    const category = data.find((c) => c.name.toLowerCase() === slug.toLowerCase());
    if (!category) throw new Error("Category not found");
    return category.id;
};


const fetchProductsByCategory = async (categoryId: number) => {
    const { data } = await axios.get<ProductType[]>(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
    );
    return data;
};

export function useProductsByCategory(slug: string | undefined) {
    return useQuery({
        queryKey: ["productsByCategory", slug],
        queryFn: async () => {
            if (!slug) return [];
            const categoryId = await fetchCategoryIdBySlug(slug);
            return fetchProductsByCategory(categoryId);
        },
        staleTime: 1000 * 60 * 5,
    });
}
