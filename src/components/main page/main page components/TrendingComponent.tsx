import React from 'react';
import styles from "../main page components/TrendingComponent.module.css";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import ItemCard from "../../cards/item card/ItemCard.tsx";
import exampleImage from "../../../assets/images/examples/Nike ZoomX 2023.png";
import WorthSeeingExampleImage from "../../../assets/images/examples/Sneakers.png"
import WorthSeeingCard from "../../cards/worth seeing card/WorthSeeingCard.tsx";
import StylizedBtn from "../../buttons/stylized btn/StylizedBtn.tsx";
interface TrendingComponentProps{
    isItemComponent: boolean;
    title: string;
}

interface item {
  id: number | string;
  image: string;
  title: string;
  description: string;
  price: number | string;
  oldPrice: number | string;
  purchased: number;
  type: "item"
}

type WorthSeeingCardType = Pick<item, "id" | "title" | "image">;

const WorthSeeingCards : WorthSeeingCardType[] = [
    {id: 1, image: WorthSeeingExampleImage, title: "Sneakers"},
    {id: 2, image: WorthSeeingExampleImage, title: "Sneakers"},
    {id: 3, image: WorthSeeingExampleImage, title: "Sneakers"},
    {id: 4, image: WorthSeeingExampleImage, title: "Sneakers"},
    {id: 5, image: WorthSeeingExampleImage, title: "Sneakers"},
]

const items: item[] = [
  {id:1, image: exampleImage, title: "Nike ZoomX 2023", description: "Sneakers", price: `${79}$`, oldPrice: `${99}$`, purchased: 19, type: "item"},
  {id:2, image: exampleImage, title: "Nike ZoomX 2023", description: "Sneakers", price: `${79}$`, oldPrice: `${99}$`, purchased: 19, type: "item"},
  {id:3, image: exampleImage, title: "Nike ZoomX 2023", description: "Sneakers", price: `${79}$`, oldPrice: `${99}$`, purchased: 19, type: "item"},
  {id:4, image: exampleImage, title: "Nike ZoomX 2023", description: "Sneakers", price: `${79}$`, oldPrice: `${99}$`, purchased: 19, type: "item"},
  {id:5, image: exampleImage, title: "Nike ZoomX 2023", description: "Sneakers", price: `${79}$`, oldPrice: `${99}$`, purchased: 19, type: "item"},

]

const TrendingComponent: React.FC<TrendingComponentProps> = ({ isItemComponent, title }) => {
  return (
      <div className={styles.trendingContainer}>
        <div className={styles.articleDiv}>
          <p>{title}</p>
        </div>
        <div className={styles.cardsDiv}>
          <ResponsiveMasonry
              columnsCountBreakPoints={{ 900: 5 }}
          >
            <Masonry>
                {isItemComponent
                    ? items.map((item) => (
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
                    ))
                    : WorthSeeingCards.map((item) => (
                        <WorthSeeingCard key={item.id} id={item.id} image={item.image} title={item.title}/>
                    ))
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
