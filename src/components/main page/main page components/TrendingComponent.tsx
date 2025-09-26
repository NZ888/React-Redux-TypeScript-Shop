import React from 'react';
import styles from "../main page components/TrendingComponent.module.css";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import ItemCard from "../../cards/item card/ItemCard.tsx";
import type {ProductType} from "../../../types/types.ts";
import StylizedBtn from "../../buttons/stylized btn/StylizedBtn.tsx";
interface TrendingComponentProps{
    isItemComponent: boolean;
    title: string;
    items: ProductType[]
}




const TrendingComponent: React.FC<TrendingComponentProps> = ({ isItemComponent, title, items }) => {
  return (
      <div className={styles.trendingContainer}>
        <div className={styles.articleDiv}>
          <p>{title}</p>
        </div>
        <div className={styles.cardsDiv}>
          <ResponsiveMasonry
              columnsCountBreakPoints={{ 500: 2, 800: 3, 1450: 4, 1550: 5  }}
          >
            <Masonry>
                {isItemComponent
                    ? items.map((item) => (
                        <ItemCard
                            key={item.id}
                            id={item.id}
                            images={item.images}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            slug={item.slug}
                        />
                    ))
                    : null
                }

            </Masonry>
          </ResponsiveMasonry>
        </div>
        <div className={styles.articleDiv}>
            {isItemComponent && (
                <StylizedBtn title={"See more"}/>
            )}
        </div>
      </div>
  );
};

export default TrendingComponent;
