"use client";


import { useState } from 'react';
import { HiOutlineSearch, HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart, HiChevronDown } from 'react-icons/hi';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full bg-white-900 text-white">
      {/* Top bar */}
      <div className="bg-white text-green-600 text-center py-1 text-sm">
        Call us on 0214489982 or WhatsApp us on 0733159386
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Modern Auto Parts" className="h-10" />
          <span className="text-xl font-bold">GUMMOZ AUTO PARTS</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-1/2">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full p-2 rounded-l-lg border-none focus:outline-none" 
          />
          <button className="bg-green-600 p-2 rounded-r-lg">
            <HiOutlineSearch size={24} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <HiOutlineUser size={24} className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <HiOutlineHeart size={24} />
            <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
          </div>
          <div className="relative cursor-pointer">
            <HiOutlineShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white-900">
        <ul className="flex justify-center space-x-8 py-2 text-white">
          <li className="cursor-pointer">Home</li>
          <li className="relative cursor-pointer" onClick={() => toggleDropdown('electrical')}>
            Electrical 
            <HiChevronDown className="inline ml-1" />
            {activeDropdown === 'electrical' && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-white-100">Batteries</li>
                <li className="px-4 py-2 hover:bg-white-100">Lighting</li>
                <li className="px-4 py-2 hover:bg-white-100">Wiring</li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer">Car Care</li>
          <li className="relative cursor-pointer" onClick={() => toggleDropdown('accessories')}>
            Accessories 
            <HiChevronDown className="inline ml-1" />
            {activeDropdown === 'accessories' && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-white-100">Interior</li>
                <li className="px-4 py-2 hover:bg-white-100">Exterior</li>
                <li className="px-4 py-2 hover:bg-white-100">Performance</li>
              </ul>
            )}
          </li>
          <li className="relative cursor-pointer" onClick={() => toggleDropdown('tools')}>
            Tools 
            <HiChevronDown className="inline ml-1" />
            {activeDropdown === 'tools' && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-white-100">Hand Tools</li>
                <li className="px-4 py-2 hover:bg-white-100">Power Tools</li>
                <li className="px-4 py-2 hover:bg-white-100">Tool Sets</li>
              </ul>
            )}
          </li>
          <li className="relative cursor-pointer" onClick={() => toggleDropdown('parts')}>
            Parts 
            <HiChevronDown className="inline ml-1" />
            {activeDropdown === 'parts' && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-white-100">Brakes</li>
                <li className="px-4 py-2 hover:bg-white-100">Suspension</li>
                <li className="px-4 py-2 hover:bg-white-100">Engine</li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer">Specials</li>
          <li className="cursor-pointer">Gift Cards</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
