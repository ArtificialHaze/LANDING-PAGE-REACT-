import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center mt-[-96px]">
        <p className="text-[#00df9a] font-bold p-2">
          Lorem ipsum dolor sit amet.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Lorem, ipsum dolor.
        </h1>
        <div className="flex justify-center flex-col items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold m-5 md:pl-4 pl-2"
            strings={["BRB", "SASS", "REACT"]}
            typeSpeed={110}
            backSpeed={125}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
          possimus.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get started.
        </button>
      </div>
    </div>
  );
};

export default Hero;
