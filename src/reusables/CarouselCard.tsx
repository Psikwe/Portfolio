import React from "react";

interface Props {
  img: string;
  title?: string;
  description?: string;
  links?: any;
  linksName?: any;
}

const CarouselCard = (props: Props) => {
  return <img src={props.img} className="w-full h-96 object-contain" />;
};

export default CarouselCard;
