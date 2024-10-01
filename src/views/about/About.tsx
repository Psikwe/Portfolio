import React from "react";
import { BiStop } from "react-icons/bi";
import me from "../../assets/images/me.jpg";
import { data } from "./_about";

type IAbout = {};

const About: React.FC<IAbout> = ({}) => {
  return (
    <div className="laptop-xl:mx-72">
      <div
        id="about"
        className="laptop-xl:mx-72 from-laptop-to-laptop-xl:mx-20 tablet:mt-4 tablet:flex-col mobile:flex-col mobile:mt-2 from-laptop-to-laptop-xl:mt-24 scroll-mt-32 flex justify-between items-center"
      >
        <img
          src={me}
          className="from-laptop-to-laptop-xl:rounded-xl object-contain mr-20 w-96 h-[400px] mobile:m-auto from-tablet-to-mobile:rounded-full from-tablet-to-mobile:w-40 from-tablet-to-mobile:h-40 mobile:h-40 mobile:w-40"
        />
        <div className="slide-in-left">
          <div className="text-2xl mobile:text-sm flex justify-center uppercase tracking-xl text-gray-500 mobile:pt-8 mobile:pb-1 ">
            <div className="mobile:w-4 flex items-center">
              <BiStop color="#ef4444" />
            </div>
            about me
            <div className="mobile:w-4 flex items-center">
              <BiStop
                className="from-laptop-to-laptop-xl:mr-20"
                color="#ef4444"
              />
            </div>
          </div>
          <p className="text-white from-laptop-to-laptop-xl:mt-4 from-tablet-to-mobile:text-justify mobile:px-8 text-sm tablet:mx-10">
            {data.aboutMe}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
