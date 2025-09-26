import React, { useState } from 'react';
import styles from './ProductLabel.module.css';
import type { ProductType } from "../../../types/types.ts";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import StylizedBtn from "../../buttons/stylized btn/StylizedBtn.tsx";
import {useAppDispatch} from "../../../hooks/useReduxHooks.ts";
import {addToCart} from "../../../store/Redux/cart/slices/CardSlice.ts";
const ProductLabelComponent: React.FC<ProductType> = ({ id, images, title, price, description, category }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const dispatch = useAppDispatch()
    const slides = images.map((img) => ({ src: img }));


    return (
        <div data-product-id={id} className={styles.container}>
            <div className={styles.imagesContainer}>
                <div className={styles.mainImage}>
                    <img
                        src={images[0]}
                        alt={title}
                        onClick={() => { setIndex(0); setOpen(true); }}
                    />
                </div>
                <div className={styles.anotherImages}>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            alt={title}
                            onClick={() => { setIndex(i); setOpen(true); }}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.productInfo}>
                <div className={styles.info}>
                    <h3>{title}</h3>
                    <h2>{price} $ </h2>
                    <p>{description}</p>
                    {category != undefined && (
                        <h4>{category.name}</h4>
                    )}
                </div>
                <div className={styles.buttonsDiv}>
                    <StylizedBtn title={"Add to cart"} onClick={()=>dispatch(addToCart({id: id, quantity: 1}))}/>
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
            />
        </div>
    );
};

export default ProductLabelComponent;
