import React from 'react';
import styles from './MainPage.module.css';
import CategoriesComponent from "./main page components/CategoriesComponent.tsx";
import PromoComponent from "./main page components/PromoComponent.tsx";
import Promo2Component from "./main page components/Promo2Component.tsx";
import TrendingComponent from './main page components/TrendingComponent.tsx';
import {useProductsByCategory} from "../../hooks/useProductsByCategory.tsx";
import {message, Spin} from "antd";

const MainPageComponent: React.FC = () => {

    const [messageApi, contextHolder] = message.useMessage();
    const { data, isLoading, isError } = useProductsByCategory("clothes");
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
            <div className={styles.container}>
                {isLoading && <Spin />}
                <div className={styles.topRow}>
                    <CategoriesComponent/>
                    <PromoComponent/>
                </div>
                {data && (
                    <TrendingComponent title="Trending" isItemComponent={true} items={data}/>
                )}
                {/*<TrendingComponent title="Worth seeing" isItemComponent={false}/>*/}
                <Promo2Component/>
                {/*<TrendingComponent title="Less than 100$" isItemComponent={true}/>*/}
            </div>
        </>

    );
};

export default MainPageComponent;
