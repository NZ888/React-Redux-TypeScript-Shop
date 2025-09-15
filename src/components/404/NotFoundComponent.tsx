import React from 'react';
import styles from "./NotFound.module.css"
import notFoundImage from "../../assets/images/404/IMAGE 2025-09-15 23:08:16.jpg"
interface NotFoundComponentProps {

}

const NotFoundComponent: React.FC<NotFoundComponentProps> = ({  }) => {
  return (
    <div className={styles.container}>
        <img src={notFoundImage} alt="page not found"/>
    </div>
  );
};

export default NotFoundComponent;
