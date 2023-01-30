import React from "react";

type Props = {
  imgSrc?: string;
  title?: string;
  passage?: string;
};

const ImgCard = (props: Props) => {
  return (
    <>
      <div className="p-8 duration-300 rounded-lg shadow-2xl hover:-translate-y-1 hover:scale-105 hover:bg-indigo-200">
        <img src={props.imgSrc} />
        <div>{props.title}</div>
        <div>{props.passage}</div>
      </div>
    </>
  );
};

export default ImgCard;
