import React from 'react';
import styles from "./Cart.module.css"
import StylizedBtn from "../../buttons/stylized btn/StylizedBtn.tsx";
import CartItem from "./CartItem.tsx";
import {message, Spin} from "antd";
import {makeSelectCartTotal, selectCartItems} from "../../../store/Redux/cart/selectors/CartSelectors.ts";
import {useAppSelector} from "../../../hooks/useReduxHooks.ts";
import { useProductsByIds } from '../../../hooks/useProductsByIds.tsx';


interface CartProps {

}

const Cart: React.FC<CartProps> = ({  }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const cartItems = useAppSelector(selectCartItems);
    const ids = cartItems.map(item => item.id);
    const { data: products, isLoading, isError } = useProductsByIds(ids);

    const safeProducts = products || [];
    const total = useAppSelector(makeSelectCartTotal(safeProducts));


    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Error',
        });
    };
    if (isLoading) {
        return <Spin tip="Loading cart..." />;
    }
    if (isError) {
        error();
    }
  return (
      <>
          {contextHolder}
          <div className={styles.container}>
              <h3>Your cart</h3>
              <div className={styles.itemsDiv}>
                  {products?.map((item) => (
                      <CartItem key={item.id} id={item.id} title={item.title} images={item.images} price={item.price} product={item} products={products}/>
                  ))}
              </div>
              <div className={styles.underMainDiv}>
                  {products
                      ?  <><h3>TOTAL PRICE: {total}$</h3> <StylizedBtn title="Proceed to checkout" /></>
                      : null
                  }

              </div>
          </div>
      </>

  );
};

export default Cart;
