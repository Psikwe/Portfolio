import React from "react";
import { IProjectCard } from "../../core/interfaces";

const ProjectCard = (props: IProjectCard) => {
  return (
    <div
      className={`flex ${props.direction} mobile:flex-col items-center light-black from-laptop-to-laptop-xl:mx-20 mt-10 laptop-xl:mx-72 p-8`}
    >
      <div>
        <img className="w-full h-full object-contain" src={props.img} />
      </div>
      <div className="w-full text-white text-center m-10">
        <h3 className="text-xl">{props.caption}</h3>
        <span className="text-xs">{props.stack}</span>
        <p className="mt-8 text-sm">{props.description}</p>
        <span className="flex justify-center mt-10">{props.footer}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
