import React from 'react';

interface WorthSeeingProps {
    id: number | string;
    image: string;
    title: string;
}

const WorthSeeing: React.FC<WorthSeeingProps> = ({ id, image, title }) => {
  return (
    <div data-id={id} className="">
      <img src={image} alt={title}/>
      <p>{title}</p>
    </div>
  );
};

export default WorthSeeing;
