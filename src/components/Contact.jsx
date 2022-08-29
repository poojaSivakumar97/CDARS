import React from "react";
import content from "../content/index";

const Contact = () => {
  return (
    <div
      style={{ backgroundColor: "#091C29" }}
      className={`min-h-screen flex flex-col items-center justify-around text-white`}
      id="contact"
    >
      <h1 className="text-5xl ">
        {content.nav.logo}
        <span className="h-3 w-3 rounded-full bg-red-500 inline-block ml-4"></span>
      </h1>
      <h1 className="text-7xl ">Connect With Us.</h1>
      <h1 className="text-5xl ">
        Reach us at uuu@jjjj.in or through +8056075652
      </h1>
      <h1 className="text-5xl ">
        Have Questions? Check our Frequently Asked Questions
      </h1>
    </div>
  );
};

export default Contact;
