import React from "react";

function IntroComponent() {
  const scroll = () => {
    const section = document.querySelector("#contactForm");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="flex flex-row justify-center items-center px-10 bg-gradient-to-r to-quarternary from-tertiary h-[calc(100vh-75px)]">
      <img src={"assets/landing.svg"} className="w-1/2 hidden lg:block" />
      <div>
        <p className=" text-primary text-6xl font-bold">
          Our Services, <br />
          <p className="mt-5 text-5xl text-textHightLight">Your Project</p>
        </p>
        <p className=" text-secondary mt-5 text-lg">
          Building your dreams, one brick at a time.
          <br />
          We specialize in making things easier for your project.
          <br />
          From start to stop, we are with you
        </p>
        <div className="mt-5 flex flex-row space-x-5">
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
      </div>
    </div>
  );
}

export default IntroComponent;
