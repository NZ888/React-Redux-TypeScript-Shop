import React from 'react';
import HeaderComponent from "../header/HeaderComponent.tsx";
import {Outlet} from "react-router";
import styles from "./MainLayout.module.css";
import Footer from "../footer/Footer.tsx";
import {useLocation} from 'react-router-dom';
interface MainLayoutProps {

}

const MainLayout: React.FC<MainLayoutProps> = ({  }) => {
  let location = useLocation();
  return (
    <>
        <div className={styles.layout}>
            <div className={styles.container}>
                <HeaderComponent />
                <main>
                    <Outlet />
                </main>
                {location.pathname === "/" && (
                    <Footer />
                )}
            </div>
        </div>
    </>
  );
};

export default MainLayout;
