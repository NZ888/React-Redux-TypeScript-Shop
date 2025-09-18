import React from 'react';
import styles from './MainPage.module.css';
import CategoriesComponent from "./main page components/CategoriesComponent.tsx";
import PromoComponent from "./main page components/PromoComponent.tsx";
import exampleImage from '../../assets/images/examples/Nike ZoomX 2023.png'
import ItemCard from "../cards/item card/ItemCard.tsx";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';


interface item {
    id: number | string;
    image: typeof exampleImage;
    title: string;
    description: string;
    price: number | string;
    oldPrice: number | string;
    purchased: number;
}

const items: item[] = [
    {id:1, image: exampleImage, title: "Nike ZoomX 2023", description: "Sneakers", price: `${79}$`, oldPrice: `${99}$`, purchased: 19},
    {id:2, image: exampleImage, title: "Nike ZoomX 2023", description: "Sneakers", price: `${79}$`, oldPrice: `${99}$`, purchased: 19},
    {id:3, image: exampleImage, title: "Nike ZoomX 2023", description: "Sneakers", price: `${79}$`, oldPrice: `${99}$`, purchased: 19},
    {id:4, image: exampleImage, title: "Nike ZoomX 2023", description: "Sneakers", price: `${79}$`, oldPrice: `${99}$`, purchased: 19},
    {id:5, image: exampleImage, title: "Nike ZoomX 2023", description: "Sneakers", price: `${79}$`, oldPrice: `${99}$`, purchased: 19},

]

const MainPageComponent: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topRow}>
                <CategoriesComponent/>
                <PromoComponent/>
            </div>

            <div className={styles.trendingContainer}>
                <div className={styles.articleDiv}>
                    <p>Trending</p>
                </div>
                <div className={styles.cardsDiv}>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 900: 5 }}
                    >
                        <Masonry>
                            {items.map((item) => (
                                <ItemCard
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    oldPrice={item.oldPrice}
                                    purchased={item.purchased}
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
                <div className={styles.articleDiv}>
                    <button>See more</button>
                </div>
            </div>
        </div>

    );
};

export default MainPageComponent;
