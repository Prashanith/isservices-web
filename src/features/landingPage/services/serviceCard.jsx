import React from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <div className="rounded-lg shadow-lg w-full sm:w-80 m:w-96 sm:mx-4 my-4 h-[300px] p-8 flex gap-5 flex-row justify-center items-center">
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
