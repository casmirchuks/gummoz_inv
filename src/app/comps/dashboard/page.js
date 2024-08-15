// components/Dashboard.js
"use client"; // Mark as a Client Component if using the App Router

import { useState, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi"; // Importing down arrow icon from react-icons
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredParts, setFilteredParts] = useState([]);
  const [dropdownFilteredParts, setDropdownFilteredParts] = useState([]); 
  const [selectedPart1, setSelectedPart1] = useState("");
  const [carParts, setCarParts] = useState([
    // Sample data, replace with  data from your database
    { name: "Air Filter", description: "High-quality air filter", imageUrl: "/images/air-filter.jpg" },
    { name: "Alternator", description: "Durable alternator", imageUrl: "/images/alternator.jpg" },
    { name: "Axle", description: "Reliable axle", imageUrl: "/images/axle.jpg" },
    { name: "Battery", description: "Long-lasting battery", imageUrl: "/images/battery.jpg" },
    { name: "Brake Pads", description: "High-performance brake pads", imageUrl: "/images/brake-pads.jpg" },
    { name: "Clutch", description: "Smooth clutch operation", imageUrl: "/images/clutch.jpg" },
  ]);
  const [data, setData] = useState([]);
  setData(data);

  useEffect(() => {
    console.log(data)
  })
  // useEffect(() => {  
  //   if (searchQuery) {
  //     setFilteredParts(
  //       carParts.filter((part) =>
  //         part.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  //       )
  //     );
  //   } else {
  //     setFilteredParts(carParts);
  //   }
  // }, [searchQuery, carParts]);

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  // };
  const router = useRouter(); // For navigating to the Card component

  const handleSearchClick = () => {
    if (searchQuery) {
      setFilteredParts(
        carParts.filter((part) =>
          part.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredParts(carParts);
    }
  };

  const handleDropDownSearchClick = () => {
    let results = carParts;

    if (selectedPart1) {
      results = results.filter((part) =>
        part.name.toLowerCase() === selectedPart1.toLowerCase()
      );
    } 

    setFilteredParts(results);
  };

  const handleResetClick = () => {
    setSelectedPart1("");
    setSearchQuery("");
    setDropdownFilteredParts([]);
  };

  const handleMoreClick = (part) => {
    router.push(`../comps/card?name=${encodeURIComponent(part.name)}&description=${encodeURIComponent(part.description)}&imageUrl=${encodeURIComponent(part.imageUrl)}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* First Column (25% Width) */}
      <div className="w-1/4 bg-gray-800 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold mb-6">Categories</h1>
          
          {/* Subheading 1 */}
          <div className="mb-4">
            <h2 className="text-gray-300 text-lg mb-2">Car Marker</h2>
            <div className="relative">
              <select 
                value={selectedPart1}
                onChange={(e) => setSelectedPart1(e.target.value)}
                className="w-full bg-gray-700 text-white p-2 rounded appearance-none ">
                <option value="">Select a part</option>
                {carParts.map((part, index) => (
                    <option key={index} value={part.name}>{part.name}</option>
                  ))}
              </select> 
              <HiChevronDown
                size={20}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none"
              />
            </div>
          </div>
          
          {/* Subheading 2 */}
          {/* <div className="mb-4">
            <h2 className="text-gray-300 text-lg mb-2">Car Model</h2>
            <div className="relative">
              <select className="w-full bg-gray-700 text-white p-2 rounded appearance-none">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <HiChevronDown
                size={20}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none"
              />
            </div>
          </div> */}
        </div>

        {/* Buttons at the Bottom */}
        <div className="flex space-x-4">
          <button 
            onClick={handleResetClick}
            className="w-1/2 bg-red-600 text-white p-2 rounded hover:bg-red-500"
            >Reset</button>
          <button
            onClick={handleDropDownSearchClick} 
            className="w-1/2 bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
          >Search</button>
        </div>
      </div>

      {/* Second Column (75% Width) */}
      {/* <div className="w-3/4 bg-gray-700 p-6">
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search product"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 rounded-l bg-gray-600 text-white placeholder-gray-400"
          />
          <button 
            className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-500"
            onClick={searchQuery}
          >
            Search
          </button>
        </div>

        
        <ul className="space-y-2">
          {filteredParts.map((part, index) => (
            <li key={index} className="bg-gray-600 p-2 rounded text-white hover:bg-gray-500">
              {part.name}
            </li>
          ))}
        </ul>
      </div> */}

      <div className="w-3/4 bg-gray-700 p-6">
        {/* Search Bar */}
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-l bg-gray-600 text-white placeholder-gray-400"
          />
          <button
            onClick={handleSearchClick}
            className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-500"
          >
            Search
          </button>
        </div>

        {/* Filtered List of Car Parts in Grid Format */}
        <div className="grid grid-cols-2 gap-4">
          {filteredParts.map((part, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src={part.imageUrl} alt={part.name} className="w-full h-32 object-cover rounded-t-lg" />
              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold">{part.name}</h3>
                <p className="text-gray-400">{part.description}</p>
                <button
                  onClick={() => handleMoreClick(part)}
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                >
                  More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
