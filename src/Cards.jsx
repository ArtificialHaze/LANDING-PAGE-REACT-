import React from "react";
import single from "./assets/single.png";
import double from "./assets/double.png";
import triple from "./assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-[1.05] duration-300 transition-all ease-in-out">
          <img
            src={single}
            className="w-20 mx-auto mt-[-3rem] bg-white"
            alt="Single-Image"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
          <p className="text-center text-4xl font-bold">
            <span className="text-[#00df9a]">$</span> 149
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] font-bold rounded-md my-6 mx-auto py-3 text-black">
            Start Trial.
          </button>
        </div>
        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-[1.05] duration-300 transition-all ease-in-out">
          <img
            src={double}
            className="w-20 bg-transparent mx-auto mt-[-3rem]"
            alt="Single-Image"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
          <p className="text-center text-4xl font-bold">
            <span className="text-[#00df9a]">$</span> 149
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-black w-[200px] font-bold rounded-md my-6 mx-auto py-3 text-[#00df9a]">
            Start Trial.
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-[1.05] duration-300 transition-all ease-in-out">
          <img
            src={triple}
            className="w-20 mx-auto mt-[-3rem] bg-white"
            alt="Single-Image"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
          <p className="text-center text-4xl font-bold">
            <span className="text-[#00df9a]">$</span> 149
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] font-bold rounded-md my-6 mx-auto py-3 text-black">
            Start Trial.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
