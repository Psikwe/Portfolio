import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";
import ToggleMenu from "./ToggleMenu";
import profile from "../assets/images/profile.png";
import { Offcanvas, Ripple, initTE } from "tw-elements";
import { footerItems } from "../views/footer/_data";

type INavbar = {
  navName?: string;
  navLink?: string;
  navId?: number;
};

const Navbar: React.FC<INavbar> = ({}) => {
  initTE({ Offcanvas, Ripple });
  const [toggleMobileMenu, setToggleMobileMenu] =
    React.useState<boolean>(false);
  const navItems: INavbar[] = [
    {
      navName: "About",
      navLink: "#about",
      navId: 2,
    },

    {
      navName: "Projects",
      navLink: "#projects",
      navId: 1,
    },
    {
      navName: "Skills",
      navLink: "#skills",
      navId: 4,
    },
    {
      navName: "Certification",
      navLink: "#certification",
      navId: 3,
    },
    {
      navName: "Experience",
      navLink: "/#experience",
      navId: 5,
    },
    {
      navName: "Whatsapp",
      navLink: "https://api.whatsapp.com/send?phone=233506068327",
      navId: 6,
    },
  ];

  const divVariantsFromLeft = {
    hidden: { x: "-800%", filter: "blur(10px)", font: "" },
    visible: { x: "0%", filter: "blur(0px)" },
  };
  const divVariantsFromRight = {
    hidden: { x: "100%" },
    visible: { x: "0%" },
  };

  return (
    <>
      {/* ************** Desktop Nav ***************/}
      <nav className="mobile:hidden tablet:hidden py-2 top-0 fixed w-full mb-8 z-50 ">
        <div className="flex items-center justify-between mx-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={divVariantsFromRight}
            transition={{ duration: 1.2 }}
            className="border-radius-full"
          >
            <a href="#main">
              <img className="logo w-12 opacity-75" src={profile} />
            </a>
          </motion.div>

          <div className="justify-between">
            <ul className="p-4 mt-4 text-gray-500 from-laptop-to-laptop-xl:flex from-laptop-to-laptop-xl:justify-center">
              {navItems.map((navItem, index) => (
                <div key={index}>
                  <a
                    className="hover:text-white hover:underline"
                    href={navItem.navLink}
                  >
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 1.5 }}
                      className="hover:-translate-y-1 mr-8 list text-sm"
                    >
                      {navItem.navName}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
                    </motion.li>
                  </a>
                </div>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            {footerItems
              .filter((i) => {
                return i.key !== "3";
              })
              .map((f) => (
                <a key={f.key} target="_blank" href={f.link}>
                  <ul>
                    <li className="mr-8 text-gray-500 hover:text-white hover:-translate-y-1 duration-500">
                      {f.icon}
                    </li>
                  </ul>
                </a>
              ))}{" "}
            <a
              className="flex"
              target={"_blank"}
              href="mailto:kwesiboateng436@gmail.com"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={divVariantsFromLeft}
                transition={{ duration: 1.2 }}
                className="p-2 border-solid border-sm w-full text-red-500 border-red-600 rounded-sm hover:bg-red-600 hover:text-white mobile:hidden duration-500"
              >
                <h2 className="text-sm">Get In Touch</h2>
              </motion.div>
            </a>
          </div>
        </div>
      </nav>

      {/*************** Mobile Nav ***************/}
      <div className="from-nav-laptop-to-laptop-xl:hidden">
        {toggleMobileMenu && (
          <div className="slide-in-right backdrop-blur-lg h-full fixed z-50 w-full flex justify-center">
            <ul className="mt-8 text-red-500">
              {navItems.map((navItem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1.5 }}
                  className="hover:-translate-y-1 mb-8"
                  onClick={() => setToggleMobileMenu(false)}
                >
                  <a
                    className="hover:text-white hover:underline"
                    href={navItem.navLink}
                  >
                    {navItem.navName}
                  </a>
                </motion.li>
              ))}
            </ul>

            <a
              className="absolute bottom-0 right-0"
              target={"_blank"}
              href="mailto:frontechie@gmail.com"
            >
              <div className="m-3">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={divVariantsFromLeft}
                  transition={{ duration: 1.2 }}
                  className=" pr-5 flex items-center  text-white border-solid border-sm border-red-600"
                >
                  <BsDot className="animate-ping" size={50} color="red" />
                  <h2 className="text-sm">Get In Touch</h2>
                </motion.div>
              </div>
            </a>
          </div>
        )}
        {
          <ToggleMenu
            onclick={() => setToggleMobileMenu(!toggleMobileMenu)}
            toggleMobileMenu={toggleMobileMenu}
          />
        }
      </div>
    </>
  );
};

export default Navbar;
