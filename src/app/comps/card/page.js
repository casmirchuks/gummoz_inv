"use client";
import { useSelector } from 'react-redux';

export default function Card() {

  // Access the selected part data from the Redux store
  const selectedPart = useSelector((state) => state.ballJoint.selectedPart); 

  if (!selectedPart) {
    return (
      <div className='flex flex-row min-h-screen justify-center items-center'>
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex ">
      {selectedPart && (
        <>
          <div className='w-1/4 bg-gray-800 p-4 rounded-lg shadow-lg text-white '>
            <img src={selectedPart.imageUrl} alt={selectedPart.name} className="w-full h-48 object-cover rounded-t-lg" />
          </div>
          <div className='w-3/4 px-9'>
            <h2 className="text-2xl font-bold mt-4">{selectedPart.name}</h2>
            <p className="text-gray-400 mt-2">{selectedPart.oem_no}</p>
            <p className="text-gray-400 mt-2">{selectedPart.type}</p>
          </div>
        </>
      )}
    </div>
  );
}
