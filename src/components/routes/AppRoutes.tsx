import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import MainPageComponent from "../main page/MainPageComponent.tsx";
interface AppRoutesProps {
  
}

const AppRoutes: React.FC<AppRoutesProps> = ({  }) => {
  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPageComponent />} />
          {/*<Route path="/product/:id" element={<ProductPage />} />*/}
          {/*<Route path="/cart" element={<Cart />} />*/}
        </Route>
        <Route path="*" element={<h1>?</h1>} />
      </Routes>
  );
};

export default AppRoutes;
