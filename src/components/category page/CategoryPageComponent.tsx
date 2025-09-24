import React from "react";
import { useParams } from "react-router";
import { useProductsByCategory } from "../../hooks/useProductsByCategory";
import {message, Spin} from "antd";
import TrendingComponent from "../main page/main page components/TrendingComponent.tsx";

const CategoryComponent: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useProductsByCategory(id);
  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Error',
    });
  };

  if (isError) {
    error();
  }
  return (
      <>
        {contextHolder}
        <div>
          {isLoading && <Spin />}
          {data && (
              <TrendingComponent
                  //@ts-ignore
                  title={ data ? data[0]?.category.name : "loading"}
                  isItemComponent={true}
                  items={data}
              />
          )}
        </div>
      </>

  );
};

export default CategoryComponent;
