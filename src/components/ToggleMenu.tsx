import React from "react";
import profile from "../assets/images/profile.png";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

interface Props {
  onclick: any;
  toggleMobileMenu: boolean;
}

const ToggleMenu = (props: Props) => {
  return (
    <div className="flex justify-between fixed bg-black z-50 w-full">
      <img className="logo mt-2 w-12 opacity-75" src={profile} />
      <div>
        {props.toggleMobileMenu ? (
          <IoClose
            size={30}
            color="red"
            onClick={props.onclick}
            className="mt-4 z-50"
          />
        ) : (
          <CgMenuLeftAlt
            size={30}
            color="red"
            onClick={props.onclick}
            className="mt-4  z-50"
          />
        )}
      </div>
    </div>
  );
};

export default ToggleMenu;
