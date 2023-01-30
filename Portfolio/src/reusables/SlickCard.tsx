import React from "react";

type Props = {
  imgSrc: string;
};

const SlickCard: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="flex ">
        <div className=" bg-white p-2 rounded-lg">
          <div className="client-image">
            <img className="w-20" src={props.imgSrc} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlickCard;
