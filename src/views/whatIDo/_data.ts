import webappImg from "../../assets/images/webapp.jpg";
import websiteImg from "../../assets/images/website.jpg";
import mobileImg from "../../assets/images/mobile_dev.jpg";

export const skillsData = {
  passage:
    "As a software engineer, I specialize in creating visually stunning and user-friendly websites and applications. My skillset includes HTML, CSS, JavaScript, and TypeScript, which I use to bring ideas to life and create engaging user experiences. Whether I am building a simple landing page or a complex web application, I am dedicated to delivering high-quality and functional products that exceed expectations. In my work, I constantly strive to stay up-to-date with the latest web development technologies and best practices to provide the best possible solutions for the people I work with",
  skills: [
    {
      skillsID: 2,
      skillsTitle: "Web Application Development",
      skillsIcon: webappImg,
      skillsPassage:
        "A web application is run on web browsers, and I use TypeScript or JavaScript, along with frameworks such as React and Node. Testing is an essential part of web application development, ensuring that the application functions as intended and any bugs or issues are identified and fixed. Once the application is tested and refined, it is deployed to a server and made available to users.",
    },

    {
      skillsID: 1,
      skillsTitle: "Mobile Development",
      skillsIcon: mobileImg,
      skillsPassage:
        "Dennis uses cross-platform app development tools to create applications that can be deployed on multiple platforms using a single codebase. He achieves this through the use of a cross-platform development framework, React Native.",
    },
    // {
    //   skillsTitle: "UI/UX Development",
    //   skillsIcon: "/assets/images/uiux.jpg",
    //   skillsPassage:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    // },
  ],
};
