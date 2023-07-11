import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
function SolarWorks() {
  const list = [
    "Reduce your carbon footprint.\n It is known that every kilowatt of green energy can reduce your carbon footprint by 3,000 pounds annually",
    "Save money on your energy bills.\n Solar panels can offset your energy usage, which can lead to significant savings on your monthly utility bills.",
    "Increased energy independence.\n Solar panels can help you become more energy independent, which means you won't be as reliant on the grid",
  ];
  const [currentIndex, setcurrentIndex] = useState(0);

  function cycle() {
    setInterval(() => {
      if (parseInt(currentIndex) == parseInt(list.length - 1)) {
        setcurrentIndex(0);
      } else {
        setcurrentIndex((e) => e + 1);
      }
    }, 2000);
  }

  useEffect(() => {
    cycle();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-[#ececec] mt-16  sm:mt-20   md:mt-40 px-[10vw]">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src="assets/solarworks.jpg"
        className="relative  bottom-16 sm:bottom-20 md:bottom-32 w-11/12 sm:w-5/6 md:w-4/6"
      />
      <div className="bottom-12 sm:bottom-16 md:bottom-20 relative text-center self-center">
        <motion.p className=" text-primary text-3xl sm:text-4xl lg:text-5xl font-bold">
          HARNESS THE POWER OF NATURE
          <br />
          <span className="mt-5 text-3xl sm:text-4xl lg:text-5xl text-textHightLight">
            GET SOLAR ENERGY TODAY
          </span>
        </motion.p>
        {list.map((ele) => {
          return (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              key={ele}
              className=" text-secondary mt-5 text-lg w-3/4 mx-auto text-center"
            >
              {ele}
            </motion.p>
          );
        })}
        <button
          onClick={() => {}}
          className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-md mt-5"
        >
          Know More
        </button>
      </div>
    </div>
  );
}

export default SolarWorks;
