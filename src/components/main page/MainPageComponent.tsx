import React from 'react';
import styles from './MainPage.module.css';
import CategoriesComponent from "./main page components/CategoriesComponent.tsx";
import PromoComponent from "./main page components/PromoComponent.tsx";
import TrendingComponent from "./main page components/TrendingComponent.tsx";
import StylizedBtn from "../buttons/stylized btn/StylizedBtn.tsx";
import promoProduct1image from "../../assets/images/promo/image 4.png"
import promoProduct2image from "../../assets/images/promo/image 3.png"
import promoImage from "../../assets/images/promo/Rectangle 14.png"

const MainPageComponent: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topRow}>
                <CategoriesComponent/>
                <PromoComponent/>
            </div>
            <TrendingComponent title="Trending" isItemComponent={true}/>
            <TrendingComponent title="Worth seeing" isItemComponent={false}/>
            <div className={styles.promo2Container}>
                <div className={styles.promo}>
                    <h3>NEW YEAR</h3>
                    <h2>SALE</h2>
                    <StylizedBtn title={"See more"}/>
                    <div className={styles.promoImage1}>
                        <img src={promoProduct1image} alt=""/>
                    </div>
                    <div className={styles.promoImage2}>
                        <img src={promoProduct2image} alt=""/>
                    </div>
                </div>
                <div className={styles.promoImageDiv}>
                    <div className={styles.promoImage}>
                        <img src={promoImage} alt=""/>
                        <div className={styles.text}>
                            <p>save up to <span style={{fontWeight: 700, color: "#6c3eb8"}}>50% </span>off</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPageComponent;
