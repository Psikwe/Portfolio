import React, { useState } from "react";

import { data } from "./skillsImages";
import { BiStop } from "react-icons/bi";
type Props = {};

const Skills: React.FC = ({}) => {
  const [sContent] = useState(data.skillsContent);

  return (
    <>
      <div id="skills" className="scroll-mt-32 mt-28 laptop-xl:mx-72 ">
        <div className="text-gray-500 flex justify-center text-center uppercase text-2xl tracking-xl">
          <div className="mobile:w-4 flex items-center">
            <BiStop color="#ef4444" />
          </div>
          skills
          <div className="mobile:w-4 flex items-center">
            <BiStop
              className="from-laptop-to-laptop-xl:mr-20"
              color="#ef4444"
            />
          </div>
        </div>
        <div className="from-laptop-to-laptop-xl:flex tablet:flex from-laptop-to-laptop-xl:justify-center tablet:justify-center from-laptop-to-laptop-xl:mt-4 mobile:grid mobile:grid-cols-3 mobile:gap-5 from-laptop-to-laptop-xl:bg-slate-200 tablet:bg-slate-200 mx-20 tablet:mx-8 py-9">
          {sContent.map((sc) => (
            <div
              key={sc.name}
              className="border-2 flex rounded-full items-center mobile:my-5"
            >
              <img
                className="from-laptop-to-laptop-xl:w-20 tablet:w-20 mr-9 rounded-full from-laptop-to-laptop-xl:grayscale hover:grayscale-0 hover:shadow-2xl transition duration-500 ease-out hover:-translate-y-1"
                src={sc.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
