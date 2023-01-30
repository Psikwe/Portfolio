import React from "react";
import logo from "../assets/images/logo.jfif";
import Button from "../reusables/Button";

type INavbar = {
  navName?: string;
  navLink?: string;
};

const Navbar: React.FC<INavbar> = ({}) => {
  const navItems: INavbar[] = [
    {
      navName: "About",
      navLink: "/#About",
    },
    {
      navName: "Skills",
      navLink: "/#Skills",
    },
    {
      navName: "Projects",
      navLink: "/#Projects",
    },
    {
      navName: "Certification",
      navLink: "/#Certification",
    },
    {
      navName: "Get In Touch",
      navLink: "/#GetInTouch",
    },
  ];

  return (
    <>
      <nav className="py-2.5 bg-body top-0 fixed w-full mb-8 z-50">
        <div className="flex flex-wrap items-center justify-between mx-10">
          <img className="h-10" src={logo} />
          <a
            className="flex desktop:order-2"
            target={"_blank"}
            href="mailto:kwesiboateng436@gmail.com"
          >
            <Button
              btnName="Get In Touch"
              className="text-white mobile:hidden bg-red-700 animate-bounce hover:animate-none rounded-lg text-sm px-5 py-2.5 text-center mr-3 desktop:mr-0"
            />
          </a>
          <div
            className="items-center justify-between w-full desktop:flex desktop:w-auto desktop:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 text-white desktop:flex-row desktop:space-x-8 desktop:mt-0 desktop:text-sm desktop:font-medium desktop:border-0 ">
              {navItems.map((navItem) => (
                <li>{navItem.navName}</li>
              ))}
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
