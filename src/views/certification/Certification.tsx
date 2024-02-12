import React from "react";
import { BiStop } from "react-icons/bi";
import { certificationData, flippedCertificationData } from "./_data";
import test from "../../assets/images/css.png";
import Card from "../../reusables/Card";
import CertificationCard from "../../reusables/CertificationCard";

type Props = {};

const Certification = (props: Props) => {
  const filteredData = flippedCertificationData.filter(
    (item) => item.body === "Software Engineer"
  );
  const [title, setTitle] = React.useState<string>("");
  return (
    <div id="certification" className="scroll-mt-32 mt-28 laptop-xl:mx-72">
      <h3 className="text-2xl flex justify-center text-center uppercase tracking-xl text-gray-500">
        <div className="flex items-center">
          <BiStop color="#ef4444" />
        </div>
        certifications
        <div className="flex items-center">
          <BiStop className="from-laptop-to-laptop-xl:mr-20" color="#ef4444" />
        </div>
      </h3>

      <div className="from-laptop-to-laptop-xl:flex from-laptop-to-laptop-xl:justify-around mx-10 from-tablet-to-mobile:grid mobile:grid-col-2 place-items-center tablet:grid-cols-2 gap-4 scroll-mt-32 mt-4">
        {certificationData.map((c) => (
          <>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <CertificationCard
                    id="2"
                    src={c.img}
                    alt="image"
                    className="object-cover duration-1000 h-72 overlay-card hover:bg-black"
                    priority={true}
                    cardHeader={c.company}
                    cardDescription={c.duration}
                  />
                </div>
                <div className="flip-card-back">
                  {filteredData.map((item, index) => (
                    <div key={index}>
                     
                    </div>
                  ))}
                </div>
              </div>
            </div>
          
          </>
        ))}
      </div>
    </div>
  );
};

export default Certification;
