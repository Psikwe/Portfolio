import React from "react";
import { Link } from "react-router-dom";
import { footerItems } from "./_data";

interface Props {}

const Footer = (props: Props) => {
  return (
    <>
      <div className="flex justify-center p-5 mt-20">
        {footerItems.map((f) => (
          <a key={f.key} target="_blank" href={f.link}>
            <ul>
              <li className="mr-8 text-gray-500 hover:text-white hover:-translate-y-1 duration-500">
                {f.icon}
              </li>
            </ul>
          </a>
        ))}
      </div>
      <h3 className="text-gray-500 flex justify-center text-sm -mt-2 mb-3">
        Designed <span className="text-red-700 px-1">&</span>built by Dennis
        Boateng
      </h3>
    </>
  );
};

export default Footer;
