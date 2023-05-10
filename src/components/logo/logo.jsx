import React from "react";

function Logo() {
  return (
    <div className="flex flex-row items-center justify-center">
      <img src={`assets/logo.png`} className="h-12 rounded-full"/>
      <p className="text-3xl font-bold pl-2 text-primary">iSingoji Service`S</p>
    </div>
  );
}

export default Logo;
