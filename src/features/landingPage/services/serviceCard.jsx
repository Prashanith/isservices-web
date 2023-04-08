import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ServiceCard({ service }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.3 } },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }else{
      controls.start('hidden')
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    >
      <div className="rounded-lg shadow-lg w-80 m:w-96 mx-4 my-4 h-[300px] p-8 flex gap-5 flex-row justify-center items-center">
        <img src={`assets/${service.image_name}`} className="h-12" />
        <div>
          <p className="text-lg text-textHightLight">{service.title}</p>
          <p className="text-sm text-primary">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
