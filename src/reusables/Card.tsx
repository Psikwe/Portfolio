import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

interface Props {
  header?: string;
  body?: string;
  duration?: string;
  imgSrc?: string;
  className?: string;
  onClick?: () => void;
}

const Card = (props: Props) => {
  const divVariantsFromRight: any = {
    hidden: { x: "100%" },
    visible: { x: "0%" },
  };
  return (
    <>
      <div className={props.className}>
        <img className="w-24 mt-4 flex m-auto" src={props.imgSrc} alt="logo" />
        <div className="p-6 text-center">
          <h5 className="text-xl font-medium mb-2 text-white">
            {props.header}
          </h5>
          <p className="text-gray-400 text-sm">{props.duration}</p>
          <p className="text-gray-400 text-sm">{props.body}</p>
        </div>
        {/* <Button
          btnName="Read more..."
          className="bg-red-300 left-1/3 absolute bottom-0 text-xs p-1 rounded-sm mb-3 ml-7"
          onClick={props.onClick}
        /> */}
      </div>
    </>
  );
};

export default Card;
