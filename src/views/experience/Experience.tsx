import React, { useState } from "react";
import { experienceData } from "./_data";
import { motion } from "framer-motion";
import Card from "../../reusables/Card";
import { BiStop } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {};

const Experience: React.FC = (props: Props) => {
  const [expData] = useState(experienceData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedContent, setSelectedContent] = useState<string>("");
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleCardClick = (content: string) => {
    setSelectedContent(content);
    setOpenModal(true);
  };

  return (
    <>
      <div id="experience" className="scroll-mt-32  mt-28 laptop-xl:mx-72">
        <h3 className="text-2xl mobile:text-sm flex justify-center text-center uppercase tracking-xl text-gray-500">
          <div className="flex items-center">
            <BiStop color="#ef4444" />
          </div>
          experience
          <div className="flex items-center">
            <BiStop
              className="from-laptop-to-laptop-xl:mr-20"
              color="#ef4444"
            />
          </div>
        </h3>
        <div className="from-laptop-to-laptop-xl:flex from-laptop-to-laptop-xl:justify-around mx-10 from-tablet-to-mobile:grid mobile:grid-col-2 tablet:grid-cols-2 gap-4 scroll-mt-32 mt-4">
          {expData.map((e) => (
            <motion.div
              key={e.id}
              className="rounded-lg mobile:m-6 p-9 border-[1px] backdrop-blur-x"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card
                imgSrc={e.img}
                header={e.company}
                duration={e.duration}
                body={e.body}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/********************  Modal ********************* */}
      {openModal && (
        <div className="z-index-xl from-laptop-to-laptop-xl:w-3/12 rounded-lg fixed from-laptop-to-laptop-xl:top-1/2 mobile:top-1/2 mobile:left-1/3 from-laptop-to-laptop-xl:left-1/2 mobile:ml-2 -translate-x-1/3 -translate-y-1/2">
          <div className="backdrop-blur-md bg-white/30 p-10 w-full h-96 overflow-y-scroll">
            <div
              className="cursor-pointer flex justify-end top-0"
              onClick={() => setOpenModal(false)}
            >
              <AiFillCloseCircle />
            </div>

            <h3 className="text-red-500 flex justify-center">hello hello</h3>
            <p>{selectedContent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
