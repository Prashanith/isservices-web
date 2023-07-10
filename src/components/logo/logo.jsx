import React from "react";

function Logo() {
  return (
    <div className="flex flex-row items-center justify-center">
      <img src={`assets/logo.png`} className="h-10 rounded-full"/>
      <p className="text-xl sm:text-2xl font-semibold pl-2 text-primary">iSingoji Services</p>
    </div>
  );
}

export default Logo;
