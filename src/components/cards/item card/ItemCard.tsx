import React from 'react';
import styles from './ItemCard.module.css'
interface ItemCardProps {
    id: number | string;
    image: string;
    title: string;
    description: string;
    price: number | string;
    oldPrice: number | string;
    purchased: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, image, title, description, price, oldPrice, purchased }) => {
  return (
    <div data-id={id} className={styles.container}>
        <div className={styles.imgDiv}>
            <img src={image} alt="" />
        </div>
        <div className={styles.titleDiv}>
           <p>{title}</p>
            <p>{description}</p>
        </div>
        <div className={styles.priceDiv}>
            <div className={styles.pricesDiv}>
                <p>{price}</p>
                <p>{oldPrice}</p>
            </div>
            <div className={styles.purchasedDiv}>
                <p>{purchased} people purchased</p>
            </div>
        </div>
    </div>
  );
};

export default ItemCard;
