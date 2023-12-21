import React from "react";

type Props = {
  imgSrc: string;
};

const SlickCard: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="flex justify-center">
        <img className="w-8/12 h-auto2" src={props.imgSrc} />
        <h3></h3>
      </div>
    </>
  );
};

export default SlickCard;
