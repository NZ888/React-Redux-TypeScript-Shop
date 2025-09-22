import React from 'react';
import { useParams } from "react-router";

interface ProductPageComponentProps {
  
}

const ProductPageComponent: React.FC<ProductPageComponentProps> = ({  }) => {

  let params = useParams();
  console.log(params);
  return (
    <div className="">
      product
    </div>
  );
};

export default ProductPageComponent;
