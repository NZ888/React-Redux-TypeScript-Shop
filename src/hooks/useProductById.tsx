import axios, {type AxiosResponse} from 'axios';
import {useQuery} from "@tanstack/react-query";
import type {ProductType} from "../components/types/types.ts";

const fetchProductsById = async (id: number) => {
    const response: AxiosResponse<ProductType> = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
    return response.data;
}

export function useProductById(id: number) {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductsById(id),
        enabled: !!id
    })
}
