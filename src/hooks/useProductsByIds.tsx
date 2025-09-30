import axios, {type AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import type { ProductType } from "../types/types.ts";

const fetchProductsByIds = async (ids: number[]) => {
    const requests = ids.map((id) =>
        axios.get<ProductType>(`https://api.escuelajs.co/api/v1/products/${id}`)
    );
    const responses: AxiosResponse<ProductType>[] = await Promise.all(requests);
    return responses.map((res) => res.data);
};

export function useProductsByIds(ids: number[]) {
    return useQuery({
        queryKey: ["products", ids],
        queryFn: () => fetchProductsByIds(ids),
        enabled: ids.length > 0,
    });
}
