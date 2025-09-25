import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import type {CategoriesDataType} from "../components/types/types.ts";

const fetchCategory = async (): Promise<CategoriesDataType[]> => {
  const { data } = await axios.get<CategoriesDataType[]>(
      "https://api.escuelajs.co/api/v1/categories"
  );
  return data.slice(0, 15);
};

export function useCategory() {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryFn: fetchCategory,
    queryKey: ["categories"],
    staleTime: 1000 * 60 * 5,
  });
  const typedData: CategoriesDataType[] = data || [];

  return { typedData, isSuccess, isError, isLoading };
}
