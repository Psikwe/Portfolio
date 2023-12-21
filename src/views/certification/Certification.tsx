import React from "react";
import { BiStop } from "react-icons/bi";
import { certificationData } from "./_data";
import Card from "../../reusables/Card";

type Props = {};

const Certification = (props: Props) => {
  return (
    <div
      id="certification"
      className="scroll-mt-32 from-laptop-to-laptop-xl:mt-96 tablet:mt-80 mobile:mt-32 laptop-xl:mx-72 "
    >
      <h3 className="text-2xl flex justify-center text-center uppercase tracking-xl text-gray-500">
        <div className="flex items-center">
          <BiStop color="#ef4444" />
        </div>
        certification
        <div className="flex items-center">
          <BiStop className="from-laptop-to-laptop-xl:mr-20" color="#ef4444" />
        </div>
      </h3>

      <div className="from-laptop-to-laptop-xl:flex from-laptop-to-laptop-xl:justify-around mx-10 from-tablet-to-mobile:grid mobile:grid-col-2 tablet:grid-cols-2 gap-4 scroll-mt-32 mt-4">
        {certificationData.map((c) => (
          <Card
            key={c.id}
            className="rounded-lg mobile:m-6 p-9 border-[1px] backdrop-blur-x"
            imgSrc={c.img}
            header={c.company}
            duration={c.duration}
            body={c.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Certification;
