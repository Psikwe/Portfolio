import React, { useState } from "react";
import ImgCard from "../../components/ImgCard";
import { skillsData } from "./_data";

type Props = {};

const WhatIDo: React.FC = (props: Props) => {
  const [sData] = useState(skillsData);

  return (
    <>
      <div className="grid grid-cols-3 gap-10 mx-20 mt-40 text-white">
        <div>
          <h3 className="text-7xl">What I Do</h3>
          <p>{sData.passage}</p>
        </div>
        {sData.skills.map((data) => (
          <ImgCard
            imgSrc={data.skillsIcon}
            title={data.skillsTitle}
            passage={data.skillsPassage}
          />
        ))}
      </div>
    </>
  );
};

export default WhatIDo;
