import React from "react";

type Props = {
  step?: string;
  text?: string;
  imgSrc?: string;
  parentClassName?: string;
};

const Step = (props: Props) => {
  return (
    <>
      <div className="absolute flex flex-row items-center my-12 mx-44">
        <span className="w-full py-3 backdrop-blur-xl bg-white/30 flex justify-center items-center rounded-lg">
          <div>
            <img className="w-12 h-12" src={props.imgSrc} />
            {props.step}
          </div>
        </span>
        <span className="w-24 h-1 flex justify-center items-center bg-red-700"></span>
        <span className=" p-4 bg-slate-600 text-center text-white ">
          {props.text}
        </span>
      </div>
    </>
  );
};

export default Step;
