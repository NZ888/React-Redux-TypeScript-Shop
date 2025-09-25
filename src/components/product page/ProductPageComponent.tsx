import React from 'react';
import { useParams } from "react-router";
import {useProductById} from "../../hooks/useProductById.tsx";
import CategoriesComponent from "../main page/main page components/CategoriesComponent.tsx";
import styles from "./ProductPage.module.css"
import {message, Spin} from "antd";
import ProductLabelComponent from "./product page components/ProductLabelComponent.tsx";
import TrendingComponent from "../main page/main page components/TrendingComponent.tsx";
import {useProductsByCategory} from "../../hooks/useProductsByCategory.tsx";

interface ProductPageComponentProps {
  
}

const ProductPageComponent: React.FC<ProductPageComponentProps> = ({  }) => {
  let params = useParams();
  const { data, isLoading, isError } = useProductById(Number(params.id));
  const [messageApi, contextHolder] = message.useMessage();
  const { data: productsData, isLoading: isLoadingProducts, isError: isErrorProducts } = useProductsByCategory(String(data?.category?.slug));
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Error',
    });
  };
  if (isError) {
    error();
  }
  if (isErrorProducts) {
    error();
  }
  return (
      <>
        {contextHolder}
        <div className={styles.container}>
          {isLoading && <Spin />}
          <div className={styles.topRow}>
            <CategoriesComponent/>
            {data && (
                <ProductLabelComponent key={data.id} id={data.id} description={data.description} price={data.price} category={data.category} title={data.title} images={data.images} slug={data.slug} />
            )}
          </div>
          {isLoadingProducts && <Spin />}
          {productsData && (
              <TrendingComponent isItemComponent={true} items={productsData} title={"Related products"}/>
          )}
        </div>
      </>
  );
};

export default ProductPageComponent;
