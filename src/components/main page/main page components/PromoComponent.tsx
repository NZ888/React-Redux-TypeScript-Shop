import React from 'react';
import styles from "./PromoComponent.module.css";
import promoImage from "../../../assets/images/promo/image 1.png";
import StylizedBtn from "../../buttons/stylized btn/StylizedBtn.tsx";

interface PromoComponentProps {
  
}

const PromoComponent: React.FC<PromoComponentProps> = ({  }) => {
  return (
      <div className={styles.promoContainer}>
          <div className={styles.salePromoDiv}>BIG SALE 20%</div>
          <div className={styles.promoContent}>
              <div className={styles.promoDescriptionDiv}>
                  <p>the bestseller of 2022</p>
                  <h3>
                      LENNON r2d2 <br />
                      with NVIDIA 5090 TI
                  </h3>
                  <StylizedBtn title={"See more"}/>
              </div>
              <div className={styles.promoImageDiv}>
                  <img src={promoImage} alt="promo" />
              </div>
          </div>
      </div>
  );
};

export default PromoComponent;
