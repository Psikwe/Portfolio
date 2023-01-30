import React from "react";
import Card from "../../reusables/Card";

type IAbout = {};

const About: React.FC<IAbout> = ({}) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="">
          <Card header="About Me" body="" />
        </div>
        <div>
          <p className="text-white">
            I am a frontend developer with a passion for creating responsive and
            functional websites and web applications. With experience in HTML,
            CSS, and JavaScript, I have the skills and knowledge to bring ideas
            to life and create engaging user experiences. In my previous roles,
            I have had the opportunity to work on a variety of projects,
            including small business websites, e-commerce platforms, and large
            scale web applications. On this portfolio site, you will find a
            selection of my past work and some information about my skills and
            experience. Thank you for stopping by and please don't hesitate to
            reach out if you have any questions or are interested in working
            together.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
