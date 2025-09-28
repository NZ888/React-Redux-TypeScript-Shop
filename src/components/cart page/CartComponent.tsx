import React from 'react';
import styles from "./CartComponent.module.css"
import CategoriesComponent from "../main page/main page components/CategoriesComponent.tsx";
import Cart from './cart components/Cart.tsx';

interface CartComponentProps {

}

const CartComponent: React.FC<CartComponentProps> = ({  }) => {
  return (
    <div className={styles.container}>
        <div className={styles.topRow}>
            <CategoriesComponent/>
            <Cart/>
        </div>
    </div>
  );
};

export default CartComponent;
