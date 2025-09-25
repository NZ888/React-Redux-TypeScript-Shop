export type CategoryType = {
    id: number;
    name: string;
    image: string;
    slug: string;
};


export type ProductType = {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category?: CategoryType;
    images: string[];
};


export type CategoriesDataType = {
    creationAt: string;
    id: number;
    image: string;
    name: string;
    slug: string;
    updatedAt: string;
};