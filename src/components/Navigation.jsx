import React from "react";
import content from "../content/index";
import { Link as ScrollLink } from "react-scroll";
const Navigation = () => {
  return (
    <div
      style={{ background: "#091C29" }}
      className={`fixed top-0 z-40 w-screen `}
    >
      <div className="flex item-center justify-between py-3 w-10/12 mx-auto cursor-pointer text-white">
        <ScrollLink to="header" smooth={true}>
          <h1 className="text-5xl ">
            {content.nav.logo}
            <span className="h-3 w-3 rounded-full bg-red-500 inline-block ml-4"></span>
          </h1>
        </ScrollLink>
        {content.nav.links.map((link, index) => {
          return (
            <span className="text-2xl" key={index}>
              <ScrollLink to={link.path} smooth={true}>
                {link.text}
              </ScrollLink>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
