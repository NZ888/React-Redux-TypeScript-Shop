import React from 'react';
import styles from './ItemCard.module.css'
import { NavLink } from "react-router";
import type {ProductType} from "../../../types/types.ts";

type ItemCardProps = Pick<ProductType, "id" | "title" | "description" | "price" | "images" | "slug">;

const ItemCard: React.FC<ItemCardProps> = ({ id, title, description, price, images, slug }) => {
  return (
      <NavLink className={styles.navLink} to={`/product/${id}`}>
          <div data-id={id} className={styles.container} data-slug={slug}>
              <div className={styles.imgDiv}>
                  <img src={images[0]} alt="" />
              </div>
              <div className={styles.titleDiv}>
                  <p>{title}</p>
                  <p>{description}</p>
              </div>
              <div className={styles.priceDiv}>
                  <div className={styles.pricesDiv}>
                      <p>{price} $</p>
                  </div>
                  {/*<div className={styles.purchasedDiv}>*/}
                  {/*    <p>{purchased} people purchased</p>*/}
                  {/*</div>*/}
              </div>
          </div>
      </NavLink>

  );
};

export default ItemCard;


// [
//     {
//         "id": 4,
//         "title": "Handmade Fresh Table",
//         "slug": "handmade-fresh-table",
//         "price": 687,
//         "description": "Andy shoes are designed to keeping in...",
//         "category": {
//             "id": 1,
//             "name": "Others",
//             "slug": "others",
//             "image": "https://placehold.co/600x400"
//         },
//         "images": [
//             "https://placehold.co/600x400",
//             "https://placehold.co/600x400",
//             "https://placehold.co/600x400"
//         ]
//     }
//     // Additional products...
// ]
