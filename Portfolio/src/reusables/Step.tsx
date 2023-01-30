import React from "react";

type Props = {
  step?: string;
  text?: string;
  imgSrc?: string;
};

const Step = (props: Props) => {
  return (
    <div className="flex flex-row items-center my-12 mx-44">
      <span className="w-32 h-20 bg-slate-300 flex justify-center items-center">
        <div>
          <img src={props.imgSrc} />
          {props.step}
        </div>
      </span>
      <span className="w-24 h-1 flex justify-center items-center bg-red-700"></span>
      <span className=" p-4 bg-slate-600 text-center text-white ">
        {props.text}
      </span>
    </div>
  );
};

export default Step;
