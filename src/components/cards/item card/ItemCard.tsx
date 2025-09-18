import React from 'react';
import exampleImage from "../../../assets/images/examples/Nike ZoomX 2023.png";
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
    <div className={styles.container}>

    </div>
  );
};

export default ItemCard;
