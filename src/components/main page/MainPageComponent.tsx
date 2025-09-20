import React from 'react';
import styles from './MainPage.module.css';
import CategoriesComponent from "./main page components/CategoriesComponent.tsx";
import PromoComponent from "./main page components/PromoComponent.tsx";
import TrendingComponent from "./main page components/TrendingComponent.tsx";
import Promo2Component from "./main page components/Promo2Component.tsx";

const MainPageComponent: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topRow}>
                <CategoriesComponent/>
                <PromoComponent/>
            </div>
            <TrendingComponent title="Trending" isItemComponent={true}/>
            <TrendingComponent title="Worth seeing" isItemComponent={false}/>
            <Promo2Component/>
            <TrendingComponent title="Less than 100$" isItemComponent={true}/>
        </div>
    );
};

export default MainPageComponent;
