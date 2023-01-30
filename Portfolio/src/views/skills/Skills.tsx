import React, { useState } from "react";
import Slider from "react-slick";
import { slickSetting } from "./slickSetting";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./skillsImages";
import htmlLogo from "../../assets/images/html.png";
import cssLogo from "../../assets/images/css.png";
import jsLogo from "../../assets/images/javascript.png";
import tsLogo from "../../assets/images/Typescript.png";
import reactLogo from "../../assets/images/react.png";
import nodeLogo from "../../assets/images/node.png";
import mongodbLogo from "../../assets/images/mongodb.png";
import firebase from "../../assets/images/firebase.png";
import SlickCard from "../../reusables/SlickCard";
type Props = {};

const Skills: React.FC = ({}) => {
  const [sContent] = useState(data.skillsContent);

  return (
    <>
      <div className="overflow-x-hidden mx-44">
        <Slider {...slickSetting}>
          <SlickCard imgSrc={htmlLogo} />
          <SlickCard imgSrc={cssLogo} />
          <SlickCard imgSrc={jsLogo} />
          <SlickCard imgSrc={tsLogo} />
          <SlickCard imgSrc={reactLogo} />
          <SlickCard imgSrc={nodeLogo} />
          <SlickCard imgSrc={mongodbLogo} />
          <SlickCard imgSrc={firebase} />
        </Slider>
      </div>
    </>
  );
};

export default Skills;
