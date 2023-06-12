import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleNavbarToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:text-[#00df9a] transition-all duration-300 ease-in-out font-bold">
          Home
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] transition-all duration-300 ease-in-out font-bold">
          Company
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] transition-all duration-300 ease-in-out font-bold">
          Resources
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] transition-all duration-300 ease-in-out font-bold">
          About
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] transition-all duration-300 ease-in-out font-bold">
          Contact
        </li>
      </ul>
      <div onClick={handleNavbarToggle} className="block md:hidden">
        {toggle ? (
          <AiOutlineClose className="cursor-pointer" size={20} />
        ) : (
          <AiOutlineMenu className="cursor-pointer" size={20} />
        )}
      </div>
      <ul
        className={`${
          toggle
            ? "fixed h-full left-0 top-0 w-[60%] border-r border-gray-900 bg-[#000300] transition-all ease-in-out duration-500"
            : "fixed left-[-100%] transition-all ease-in-out duration-500"
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] transition-all duration-300 ease-in-out border-b border-gray-600">
          Home
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] transition-all duration-300 ease-in-out border-b border-gray-600">
          Company
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] transition-all duration-300 ease-in-out border-b border-gray-600">
          Resources
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] transition-all duration-300 ease-in-out border-b border-gray-600">
          About
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] transition-all duration-300 ease-in-out">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
