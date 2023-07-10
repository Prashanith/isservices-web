import React from "react";
import { motion } from "framer-motion";

function IntroComponent() {
  const scroll = () => {
    const section = document.querySelector("#contactForm");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="flex flex-row justify-center justify-items-center items-start sm:items-center px-[calc(10vw)] bg-landingbg bg-center bg-cover  h-[calc(100vh-60px)]">
      {/* <img src={"assets/landing.svg"} className="w-1/2 hidden lg:block" /> */}
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{duration:1.5}}
      className=" mt-[calc(20vh)] sm:mt-0 text-center">
        <p className=" text-primary text-5xl sm:text-6xl lg:text-8xl font-bold">
          Our Services<br />
          <span className="mt-5 text-4xl sm:text-5xl lg:text-7xl text-textHightLight">Your Project</span>
        </p>
        <p className=" text-secondary mt-5 text-lg">
          Building your dreams, one brick at a time.
          <br />
          We specialize in making things easier for your project.
          <br />
          From start to stop, we are with you
        </p>
        <div className="mt-5 flex flex-row justify-center ">
          <button
            onClick={() => scroll()}
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-md"
          >
            Contact Us
          </button>
          {/* <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-md">
            About Us
          </button> */}
        </div>
      </motion.div>
    </div>
  );
}

export default IntroComponent;
