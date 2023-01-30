import React from "react";

interface Props {
  header?: string;
  body?: string;
  imgSrc?: string;
}

const Card = (props: Props) => {
  return (
    <div className="flex justify-center">
      <img src={props.imgSrc} />
      <div className="block p-6 rounded-lg shadow-lg max-w-sm">
        <h5 className="text-white text-xl leading-tight font-medium mb-2">
          {props.header}
        </h5>
        <p className="text-gray-700 text-base mb-4">{props.body}</p>
      </div>
    </div>
  );
};

export default Card;
