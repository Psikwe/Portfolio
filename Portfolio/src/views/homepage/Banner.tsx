import React from "react";
import profile from "../../assets/images/code.png";
import { Cursor, Typewriter } from "react-simple-typewriter";

type IBanner = {};

const Banner: React.FC = ({}) => {
  return (
    <>
      <div className="grid gap-0 mt-32 desktop:grid-cols-2">
        <div className="z-10 flex flex-col items-center justify-center w-full mx-20 my-40 bg-gradient-to-r  h-96 rounded-t-3xl">
          <div className="flex items-center text-9xl text-white">
            <h3 className="mt-4 text-3xl">
              &lt;
              {
                <Typewriter
                  words={[
                    "Hi there!",
                    "Dennis Boateng here",
                    "Welcome to my portfolio site!",
                  ]}
                  cursor
                  loop={true}
                  cursorStyle="_"
                  cursorColor="red"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              }
              /&gt;
            </h3>
          </div>
        </div>

        <div className="z-30 h-full ml-20 my-30 ">
          <img
            className="brightness-50 hover:brightness-90"
            alt="logo"
            src={profile}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
