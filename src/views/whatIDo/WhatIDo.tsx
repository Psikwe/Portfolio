import React, { useState } from "react";
import { BiStop } from "react-icons/bi";
import ImgCard from "../../components/ImgCard";
import { skillsData } from "./_data";

type Props = {};

const WhatIDo: React.FC = (props: Props) => {
  return (
    <>
      <div className="laptop-xl:mx-72">
        <div className="slide-in-left overflow-hidden text-2xl from-laptop-to-laptop-xl:mt-40 from-tablet-to-mobile:mt-20 flex justify-center uppercase tracking-xl text-gray-500 mb-4">
          <div className="flex">
            <div className="mobile:w-4 flex items-center">
              <BiStop color="#ef4444" />
            </div>
            what i do
            <div className="mobile:w-4 flex items-center">
              <BiStop
                className="from-laptop-to-laptop-xl:mr-20"
                color="#ef4444"
              />
            </div>
          </div>
        </div>
        <div
          id="what-i-do"
          className="mobile:p-8 p-8 light-black grid grid-cols-3 mobile:grid-cols-1 tablet:grid-cols-2 gap-10 from-laptop-to-laptop-xl:mx-20 text-white scroll-mt-44"
        >
          <div>
            <p className="mobile:text-justify text-sm">{skillsData.passage}</p>
          </div>
          {skillsData.skills.map((data) => (
            <ImgCard
              key={data.skillsID}
              imgSrc={data.skillsIcon}
              title={data.skillsTitle}
              passage={data.skillsPassage}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatIDo;
