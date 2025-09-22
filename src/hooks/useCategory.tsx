import axios from 'axios';
import {useQuery} from "@tanstack/react-query";

const fetchCategory = async () => {
  const response = await axios.get("https://api.escuelajs.co/api/v1/categories")
  return response.data;
}

type CategoriesDataType = {
  "creationAt": string;
  "id": number;
  "image": string;
  "name": string;
  "slug": string;
  "updatedAt": string;
}

export function useCategory() {
  const {data, isSuccess, isError, isLoading} = useQuery({
    queryFn: fetchCategory,
    queryKey: ["categories"],
    staleTime: 1000 * 60 * 5,
  })
  const typedData: CategoriesDataType[] = data
  return {typedData, isSuccess, isError, isLoading};
}

