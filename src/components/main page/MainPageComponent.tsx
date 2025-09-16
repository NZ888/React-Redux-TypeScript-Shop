import React from 'react';
import styles from './MainPage.module.css';
import promoImage from '../../assets/images/promo/image 1.png'

const MainPageComponent: React.FC = () => {
    return (
        <div className={styles.container}>
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

            <div className={styles.promoContainer}>
                <div className={styles.salePromoDiv}>BIG SALE 20%</div>
                <div className={styles.promoContent}>
                    <div className={styles.promoDescriptionDiv}>
                        <p>the bestseller of 2022</p>
                        <h3>
                            LENNON r2d2 <br />
                            with NVIDIA 5090 TI
                        </h3>
                        <button>Shop Now</button>
                    </div>
                    <div className={styles.promoImageDiv}>
                        <img src={promoImage} alt="promo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPageComponent;
