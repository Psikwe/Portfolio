import React from "react";

type Props = {
  imgSrc?: string;
  title?: string;
  passage?: string;
};

const ImgCard = (props: Props) => {
  return (
    <>
      <div className=" duration-300 rounded-lg shadow-2xl">
        <img
          src={props.imgSrc}
          className="h-36 w-full from-tablet-to-mobile:object-cover hover:-translate-y-1 hover:scale-105 duration-500"
        />
        <div className="text-red-200 py-2">{props.title}</div>
        <div className="mobile:text-justify text-sm">{props.passage}</div>
      </div>
    </>
  );
};

export default ImgCard;
