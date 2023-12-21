import React from "react";

type BtnProps = {
  btnName: string;
  className: string;
  onClick?: any;
};

const Button: React.FC<BtnProps> = ({ btnName, className, onClick }) => {
  return (
    <div className="">
      <button type="submit" className={className} onClick={onClick}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
