import React from "react";
import { ICard } from "../core/interfaces";

const CertificationCard = (props: ICard) => {
  return (
    <div id={props.id} className="w-80 text-justify">
      <div className="relative">
        <img
          id={props.id}
          src={props.src}
          alt={props.alt}
          className={props.className}
        />
      </div>
      <h4 className="font-bold p-2 text-white uppercase">{props.cardHeader}</h4>
      <p className="mt-4 p-2">{props.cardDescription}</p>
      <div className="-mt-14">
        <a
          target="_blank"
          href={props.link}
          className=" text-white underline cursor-pointer"
        >
          <small>link</small>
        </a>
      </div>
    </div>
  );
};

export default CertificationCard;
