import React from 'react';
import styles from "./CategoriesComponent.module.css";
import {useCategory} from "../../../hooks/useCategory.tsx";
import { Spin } from 'antd';
import { message } from 'antd';
import {NavLink} from "react-router";

interface CategoriesComponentProps {
  
}

const CategoriesComponent: React.FC<CategoriesComponentProps> = ({  }) => {
  const {isSuccess, isError, typedData, isLoading} = useCategory();
  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Unable to retrieve category information. Please check your internet connection or try again later.',
        });
  };

  if (isError) {
      error();
  }

  return (
      <>
          {contextHolder}
          <div className={styles.catContainer}>
              <h2>CATEGORIES</h2>
              <div className={styles.categoriesDiv}>
                  {isLoading && <Spin />}
                  {isSuccess &&
                      typedData.map((category) =>(
                          <NavLink className={styles.navLink} to={`/category/${category.slug}`} key={category.slug}>
                              <p data-catrgory-id={category.id} data-slug={category.slug}>{category.name}</p>
                          </NavLink>
                      ))}
              </div>
          </div>
      </>

  );
};

export default CategoriesComponent;
