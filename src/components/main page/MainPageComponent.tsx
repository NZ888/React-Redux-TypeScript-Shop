import React from 'react';
import styles from './MainPage.module.css'
interface MainPageComponentProps {
  
}

const MainPageComponent: React.FC<MainPageComponentProps> = ({  }) => {
  return (
    <div className={styles.container}>
        <div className={styles.catContainer}>
          <div>
            <h2>CATEGORIES</h2>
          </div>
          <div className={styles.categoriesDiv}>

            <p>Clothes</p>
            <p>Shoes</p>
            <p>Furniture</p>
            <p>Cosmetics</p>
            <p>Travel</p>
            <p>Automotive</p>
          </div>
        </div>
        <div className={styles.promoContainer}>
          2
        </div>
    </div>
  );
};

export default MainPageComponent;
