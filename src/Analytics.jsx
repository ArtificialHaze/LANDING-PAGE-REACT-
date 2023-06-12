import React from "react";
import laptop from "./assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={laptop}
          alt="Laptop-Image"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[##00df9a font-bold]">Lorem, ipsum dolor.</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            cum aspernatur error recusandae laborum ratione sed in facere nemo
            quasi!
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-[#00df9a]">
            Get started.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
