import acsLogo from "../../assets/images/acsLogo.png";
import afriwaveLogo from "../../assets/images/Afriwave.png";
import ttesLogo from "../../assets/svgs/ttes-logo-1.svg";
import projectImg from "../../assets/images/nabs.png";

// interface experienceBody {
//   id: number,
//   img: string,
//   company: string,
//   duration: string,
//   body: string,
//   content: React.ReactNode
// }

interface experienceData {
  content: string;
  id: number;
  img: string;
  company: string;
  projectImg?: string;
  body: string;
  duration: string;
}

export const experienceData: experienceData[] = [
  {
    id: 2,
    img: acsLogo,
    company: "Adative Computer Solutions",
    duration: "October 2021 - Present",
    body: "Software Engineer",
    projectImg: projectImg,
    content:
      "As a developer at ACS I had the opportunity to work on a project aimed to assit users login to a portal to apply for a trip and jobs. Kindly check out link to project: ",
  },
  {
    id: 3,
    img: ttesLogo,
    company: "Ttes Construction Ltd",
    duration: "September 2020 - April 2021",
    body: "Frontend Developer",
    content:
      "ttes Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
  {
    id: 1,
    img: afriwaveLogo,
    company: "Afriwave Telecom",
    duration: "October 2019 - October 2021",
    body: "NOC Engineer",
    content:
      "afriwave Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
  },
];
