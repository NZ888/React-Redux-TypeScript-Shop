import React from 'react';
import styles from "./CategoriesComponent.module.css";

interface CategoriesComponentProps {
  
}

const CategoriesComponent: React.FC<CategoriesComponentProps> = ({  }) => {
  return (
      <div className={styles.catContainer}>
          <h2>CATEGORIES</h2>
          <div className={styles.categoriesDiv}>
              <p>Clothes</p>
              <p>Shoes</p>
              <p>Furniture</p>
              <p>Cosmetics</p>
              <p>Travel</p>
              <p>Automotive</p>
          </div>
      </div>
  );
};

export default CategoriesComponent;
