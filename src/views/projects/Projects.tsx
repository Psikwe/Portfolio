import wk_login from "../../assets/images/wk_login.png";
import rester from "../../assets/images/rester.png";
import ttom from "../../assets/images/ttom.png";
import stockup from "../../assets/images/stockup.png";
import ProjectCard from "../../reusables/project-cards/ProjectCard";
import {
  resterData,
  resterDescription,
  resterFooter,
  stockupData,
  stockupDescription,
  stockupFooter,
  ttomData,
  ttomDescription,
  ttomFooter,
  workoutDescription,
  workoutFooter,
  workoutStack,
} from "./data";
import { BiStop } from "react-icons/bi";

const Projects = () => {
  return (
    <>
      <div id="projects" className="scroll-mt-32 mt-28 laptop-xl:mx-72 ">
        <div className="text-gray-500 flex justify-center text-center uppercase text-2xl tracking-xl">
          <div className="mobile:w-4 flex items-center">
            <BiStop color="#ef4444" />
          </div>
          projects
          <div className="mobile:w-4 flex items-center">
            <BiStop
              className="from-laptop-to-laptop-xl:mr-20"
              color="#ef4444"
            />
          </div>
        </div>
        <ProjectCard
          direction="flex-row-reverse"
          img={rester}
          caption="Rester (for a client)"
          stack={resterData.map((stack, index) => (
            <span
              key={index}
              className="text-xs mr-2 p-1 border-solid border-sm border-red-700 rounded-sm"
            >
              {stack.stack}
            </span>
          ))}
          description={resterDescription.desc}
          footer={resterFooter.map((link, index) => (
            <a target="_blank" href={link.link}>
              <span
                key={index}
                className="flex items-center bg-gray-400 px-2 py-1 rounded-sm mr-5  text-xs"
              >
                <span className="pr-1">{link.name}</span>
                {link.github}
              </span>
            </a>
          ))}
        />
        <ProjectCard
          direction="flex-row"
          img={ttom}
          caption="T-TOM Construction (for a client)"
          stack={ttomData.map((stack, index) => (
            <span
              key={index}
              className="text-xs mr-2 p-1 border-solid border-sm border-red-700 rounded-sm"
            >
              {stack.stack}
            </span>
          ))}
          description={ttomDescription.desc}
          footer={ttomFooter.map((link, index) => (
            <a target="_blank" href={link.link}>
              <span
                key={index}
                className="flex items-center bg-gray-400 px-2 py-1 rounded-sm mr-5  text-xs"
              >
                <span className="pr-1">{link.name}</span>
                {link.github}
              </span>
            </a>
          ))}
        />
        <ProjectCard
          direction="flex-row-reverse"
          img={stockup}
          caption="Stockup"
          stack={stockupData.map((stack, index) => (
            <span
              key={index}
              className="text-xs mr-2 p-1 border-solid border-sm border-red-700 rounded-sm"
            >
              {stack.stack}
            </span>
          ))}
          description={stockupDescription.desc}
          footer={stockupFooter.map((link, index) => (
            <a target="_blank" href={link.link}>
              <span
                key={index}
                className="flex items-center bg-gray-400 px-2 py-1 rounded-sm mr-5  text-xs"
              >
                <span className="pr-1">{link.name}</span>
                {link.github}
              </span>
            </a>
          ))}
        />
        <ProjectCard
          direction="flex-row"
          img={wk_login}
          caption="Workout Logger"
          stack={workoutStack.map((stack, index) => (
            <span
              key={index}
              className="text-xs mr-2 p-1 border-solid border-sm border-red-700 rounded-sm"
            >
              {stack.stack}
            </span>
          ))}
          description={workoutDescription.desc}
          footer={workoutFooter.map((link, index) => (
            <a target="_blank" href={link.link}>
              <span
                key={index}
                className="flex items-center bg-gray-400 px-2 py-1 rounded-sm mr-5  text-xs"
              >
                <span className="pr-1">{link.name}</span>
                {link.github}
              </span>
            </a>
          ))}
        />
      </div>
    </>
  );
};

export default Projects;
