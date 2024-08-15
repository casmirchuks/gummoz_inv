"use client"; // Mark as a Client Component if using the App Router

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Importing icons from react-icons


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return  (
    <div className="relative h-full ">
      {/* Hamburger Icon */}
      <button
        className="text-white p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 h-full w-64 transform bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon for Sidebar */}
        <button
          className="text-white p-4  focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? <HiX size={30} /> : <></>}
        </button>

        <nav className="flex flex-col items-start p-6 space-y-4 text-white">
          <a href="#" className=" hover:bg-violet-600 active:bg-violet-700  focus:ring focus:ring-violet-300 p-2 rounded w-full">Ball Joints</a>
          <a href="#" className="  hover:bg-violet-600 active:bg-violet-700  focus:ring focus:ring-violet-300 p-2 rounded w-full">Linkage</a>
          <a href="#" className=" hover:bg-violet-600 active:bg-violet-700  focus:ring focus:ring-violet-300 p-2 rounded w-full">Oil Filters</a>
          <a href="#" className="  hover:bg-violet-600 active:bg-violet-700  focus:ring focus:ring-violet-300 p-2 rounded w-full">Air Filters</a>
        </nav>
      </div>  

      {/* Sidebar Hover Effect */}
      <div
        className={`fixed top-0 left-0 h-full w-screen transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-50 bg-gray-900" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />
    </div>
  )
}

export default Navbar;