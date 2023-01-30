import React, { useState } from "react";
import Step from "../../reusables/Step";
import { data } from "./_data";

type Props = {};

const Experience: React.FC = (props: Props) => {
  const [expData] = useState(data.experienceData);

  return (
    <>
      {expData.map((e) => (
        <Step step={e.company} text={e.text} imgSrc={e.img} />
      ))}
    </>
  );
};

export default Experience;
