import React from "react";
import ServiceCard from "./serviceCard";

function Services() {
  const services = [
    {
      title: "Construction Works",
      description:
        "We deliver high-quality construction works for a wide range of clients. We have a team of experienced and skilled professionals who are dedicated to delivering projects on time, on budget, and to the highest standards.",
      image_name: "construction_works.png",
    },
    {
      title: "Interior Works",
      description:
        "With our interior works services, we turn your dream spaces into reality. Our team of expert interior designers is dedicated to creating beautiful and functional spaces that reflect your unique style and personality.",
      image_name: "interior_works.png",
    },
    {
      title: "Solar Works",
      description:
        "Using our solar works, we are on a mission to power your world with the sun. Our team of passionate experts is committed to providing you with top-quality solar solutions that are tailored to your needs and budget.",
      image_name: "solar_works.png",
    },
    {
      title: "Electrical Works",
      description:
        "We are dedicated to providing top-quality electrical solutions that are safe, reliable, and efficient. Our team of experienced electricians is committed to meeting all of your electrical needs, whether you are a homeowner, business owner, or contractor.",
      image_name: "electricity_works.png",
    },
    {
      title: "Manpower Consultancy",
      description:
        "We are dedicated to providing top-quality labour solutions that are efficient, reliable, and cost-effective. We are committed to meeting all of your labour needs, whether you are a homeowner, contractor, or business owner.",
      image_name: "construction_worker.png",
    },
  ];
  return (
    <div className="min-h-screen flex justify-center items-start flex-col py-16 m-0 px-[calc(10vw)]">
      <h1 className="text-textHightLight text-5xl  text-left mx-4 mb-8">
        OUR SERVICES
      </h1>
      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>
    </div>
  );
}

export default Services;
