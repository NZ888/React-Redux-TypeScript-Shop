import React from 'react';
import styles from "./Promo2Component.module.css";
import StylizedBtn from "../../buttons/stylized btn/StylizedBtn.tsx";
import promoProduct1image from "../../../assets/images/promo/image 4.png";
import promoProduct2image from "../../../assets/images/promo/image 3.png";
import promoImage from "../../../assets/images/promo/Rectangle 14.png";

interface Promo2ComponentProps {

}

const Promo2Component: React.FC<Promo2ComponentProps> = ({  }) => {
  return (
      <div className={styles.promo2Container}>
          <div className={styles.promo}>
              <h3>NEW YEAR</h3>
              <h2>SALE</h2>
              <StylizedBtn title={"See more"}/>
              <div className={styles.promoImage1}>
                  <img src={promoProduct1image} alt=""/>
              </div>
              <div className={styles.promoImage2}>
                  <img src={promoProduct2image} alt=""/>
              </div>
          </div>
          <div className={styles.promoImageDiv}>
              <div className={styles.promoImage}>
                  <img src={promoImage} alt=""/>
                  <div className={styles.text}>
                      <p>save up to <span style={{fontWeight: 700, color: "#6c3eb8"}}>50% </span>off</p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Promo2Component;
