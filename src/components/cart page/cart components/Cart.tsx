import React from 'react';
import styles from "./Cart.module.css"
import StylizedBtn from "../../buttons/stylized btn/StylizedBtn.tsx";
import CartItem from "./CartItem.tsx";
interface CartProps {

}

const Cart: React.FC<CartProps> = ({  }) => {
  return (
    <div className={styles.container}>
        <h3>Your cart</h3>
        <div className={styles.itemsDiv}>
            <CartItem />
            <CartItem />
        </div>
        <div className={styles.underMainDiv}>
            <h3>TOTAL PRICE: 198$</h3>
            <StylizedBtn title="Proceed to checkout" />
        </div>
    </div>
  );
};

export default Cart;
