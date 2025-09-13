import React from 'react';
import HeaderComponent from "../header/HeaderComponent.tsx";
import {Outlet} from "react-router";
import styles from "./MainLayout.module.css";
interface MainLayoutProps {

}

const MainLayout: React.FC<MainLayoutProps> = ({  }) => {
  return (
    <>
        <div className={styles.layout}>
            <div className={styles.container}>
                <HeaderComponent />
                <main>
                    <Outlet />
                </main>
                {/*<Footer />*/}
            </div>


        </div>
    </>
  );
};

export default MainLayout;
