// components/Dashboard.js
"use client"; // Mark as a Client Component if using the App Router

import { useState, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi"; // Importing down arrow icon from react-icons
import { useRouter } from "next/navigation";
import supabase from "@/app/config/supabaseConfig";
import { useDispatch, useSelector} from 'react-redux';
import { setPart, filterParts, selectPart } from '../../store/ballJointSlice';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownFilteredParts, setDropdownFilteredParts] = useState([]);
  const [selectedPart1, setSelectedPart1] = useState("");

  const router = useRouter(); // For navigating to the Card component
  const dispatch = useDispatch();
  const ballJointParts = useSelector((state) => state.ballJoint.parts); 
  const ballFilteredParts = useSelector((state) => state.ballJoint.filteredParts);

  useEffect(() => {
    const fetchBallJoint = async () => {
      const { data, error } = await supabase
        .from("balljoint")
        .select(); 
      if (error) {
        console.error("Error fetching balljoint:", error);
        dispatch(setPart(null));
      } else {
        if (ballFilteredParts.length === 0) {
          dispatch(setPart(data));
        }
      }
    }
    fetchBallJoint();
  }, [dispatch, ballFilteredParts]);

  // const handleDropDownSearchClick = () => {
  //   let results = ballJointParts;

  //   if (selectedPart1) {
  //     results = results.filter(
  //       (part) => part.name.toLowerCase() === selectedPart1.toLowerCase()
  //     );
  //   }

  //   setFilteredParts(results);
  // };

  // const handleResetClick = () => {
  //   setSelectedPart1("");
  //   setSearchQuery("");
  //   setDropdownFilteredParts([]);
  // };

  const handleSearchClick = () => {
    if (ballJointParts && searchQuery) {
      dispatch(filterParts(searchQuery)); // Store the filtered parts in Redux
    } 
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleMoreClick = (part) => {
    dispatch(selectPart(part)); // Dispatch the action to Redux
    router.push('../../comps/card'); // Navigate to the card component
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* First Column (25% Width) */}
      <div className="w-1/4 bg-gray-800 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-white text-xl font-bold mb-6">Categories</h1>

          {/* DropDown Subheading 1 */}
          {/* <div className="mb-4">
            <h2 className="text-gray-300 text-lg mb-2">Car Marker</h2>
            <div className="relative">
              <select
                value={selectedPart1}
                onChange={(e) => setSelectedPart1(e.target.value)}
                className="w-full bg-gray-700 text-white p-2 rounded appearance-none "
              >
                <option value="">Select a part</option>
                {ballJointParts.map((part, index) => (
                  <option key={index} value={part.name}>
                    {part.name}
                  </option>
                ))}
              </select>
              <HiChevronDown
                size={20}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white pointer-events-none"
              />
            </div>
          </div> */}

        </div>

        {/* Buttons at the Bottom */}
        {/* <div className="flex space-x-4">
          <button
            onClick={handleResetClick}
            className="w-1/2 bg-orange-600 text-white p-2 rounded hover:bg-orange-500"
          >
            Reset
          </button>
          <button
            onClick={handleDropDownSearchClick}
            className="w-1/2 bg-green-600 text-white p-2 rounded hover:bg-green-500"
          >
            Search
          </button>
        </div> */}
      </div>

      {/* Second Column (75% Width) */}
      <div className="w-3/4 bg-gray-700 p-6">
        {/* Search Section */}
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search product"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 rounded-l focus:outline-green-500
             bg-gray-600 text-white
             focus:outline-none placeholder-gray-400"
          />
          <button
            onClick={handleSearchClick}
            className="bg-green-600 ml-2 text-white p-2 rounded-r hover:bg-green-500"
          >
            Search
          </button>
        </div>

        {/* Filtered List of Car Parts in Grid Format */}
        <div className="grid grid-cols-2 gap-4">
          {ballFilteredParts.map((part, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between">
              <img
                src={part.image}
                alt={part.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="mt-2 text-white">
                <h3 className="text-l font-bold">{part.name}</h3>
                <p className="text-gray-400">{part.oem_no}</p>
                <p className="text-gray-400">{part.type}</p>
                <button
                  onClick={() => handleMoreClick(part)}
                  className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500"
                >
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;