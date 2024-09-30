import workoutImg from "../../assets/images/workout.png";
import acs from "../../assets/images/acs.png";
import nabs from "../../assets/images/nabs.png";
import mtn from "../../assets/images/mtn.png";
import wk_login from "../../assets/images/wk_login.png";
import wk_home from "../../assets/images/wk_home.png";
import wk_signup from "../../assets/images/wk_signup.png";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

export const imgs = [
  {
    img: workoutImg,
    title: "Workout Logger",
    link: "#",
    passage:
      "A personal project built with REACT and NODE js which users are able to keep track of their daily workout activities.",
  },
  {
    img: nabs,
    title: "NABS GROUP CLIENT PORTAL",
    passage:
      "As a developer at ACS, I had the opportunity to work on a project with React and TypeScript aimed at assisting users in logging into the portal to view and apply for trips and jobs",
    link: "https://client.nabsgroupgh.com",
    linkName: "client.nabsgroupgh.com/",
  },
  {
    img: mtn,
    title: "BROADBAND ESHOP MTN",
    passage:
      "As a developer at ACS, I had the opportunity to contribute to the frontend of a project aimed at assisting users in purchasing broadband fiber services for a renowned telecommunications network in Ghana, using JavaScript, HTML, and CSS.",
    link: "https://broadband.mtn.com.gh/",
    linkName: "broadband.mtn.com.gh/",
  },
  {
    img: acs,
    title: "THE ACS WEBSITE",
    passage:
      "As a developer at ACS, I had the opportunity to build the company's website using ReactJS, where others could apply for job opportunities being offered by the company.",
    link: "https://acsint.io/",
    linkName: "acsint.io/",
  },
];

export const workoutPortal = [wk_login, wk_signup, wk_home];

export const workoutStack = [
  {
    stack: "React JS",
  },
  {
    stack: "CSS 3",
  },
  {
    stack: "Context API",
  },
];

export const workoutFooter = [
  {
    name: "Code",
    github: <AiFillGithub size={20} />,
    link: "https://github.com/Psikwe/Workout/tree/alpha",
  },
  // {
  //   name: "Demo",
  //   github: <FiExternalLink size={20} />,
  //   link: "https://github.com/Psikwe/stock-management-system",
  // },
];

export const workoutDescription = {
  desc: "A personal project built with REACT and NODE js which users are able to keep track of their daily workout activities.",
};

export const resterData = [
  {
    stack: "React TS",
  },
  {
    stack: "TailwindCSS",
  },
  {
    stack: "Redux Toolkit",
  },
];
export const ttomData = [
  {
    stack: "React TS",
  },
  {
    stack: "TailwindCSS",
  },
];
export const stockupData = [
  {
    stack: "React TS",
  },
  {
    stack: "TailwindCSS",
  },
  {
    stack: "Redux Toolkit",
  },
  {
    stack: "Express JS",
  },
  {
    stack: "Mongodb",
  },
];

export const stockupFooter = [
  {
    name: "Code",
    github: <AiFillGithub size={20} />,
    link: "https://github.com/Psikwe/StockUp/tree/alpha",
  },
];
export const resterFooter = [
  {
    name: "Demo",
    github: <FaExternalLinkAlt size={15} />,
    link: "https://rester-frontend-pi.vercel.app/",
  },
];
export const ttomFooter = [
  {
    name: "Demo",
    github: <FaExternalLinkAlt size={15} />,
    link: "https://ttomconstruction.netlify.app/",
  },
];

export const stockupDescription = {
  desc: "A personal project built to manage stock of products inventory.",
};
export const resterDescription = {
  desc: "A comprehensive HRIS application that streamlines company and employee onboarding, automates tax calculations, and manages employee payrolls and other essential HR operations.",
};
export const ttomDescription = {
  desc: "A clean and user-friendly website built for a construction firm, showcasing their services, portfolio, and contact information.",
};
