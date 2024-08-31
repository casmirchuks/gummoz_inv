"use client";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import { FaFacebookF, FaPinterestP, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Card() {
  const [quantity, setQuantity] = useState(1);

  // Access the selected part data from the Redux store
  const selectedPart = useSelector((state) => state.ballJoint.selectedPart); 

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  if (!selectedPart) {
    return (
      <div className='flex flex-row min-h-screen justify-center items-center'>
        Loading...
      </div>
    )
  }

  return (
    <>
    {/* <div className="min-h-screen bg-gray-900 p-6 flex ">
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
    </div> */}

    {/* new section */}
    <div className="min-h-screen bg-gray-800 mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image Section */}
        <div className="flex-1">
          <img src={selectedPart.imageUrl} alt={selectedPart.name} 
          className="w-full h-full object-contain border border-white-200 rounded-lg" />

          <p className="text-center text-white-600 mt-2">
            <span className="text-lg">🔍</span> Roll over image to zoom in
          </p>
        </div>

        {/* Product Info Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {selectedPart.type}
            {/* Clutch Master Cylinder Hyundai S'Coupe 1.5 94-95 85Kw */}
          </h1>
          <h1 className="text-2xl font-bold">
            {selectedPart.name}
            {/* Clutch Master Cylinder Hyundai S'Coupe 1.5 94-95 85Kw */}
          </h1>
          <p className="text-white-500 mb-2">SKU: {selectedPart.oem_no}</p>

          <p className="text-xl font-semibold text-white-900">Price: MZN 650.00</p>
          {/* <p className="text-sm text-white-500">Tax included Shipping calculated at checkout</p> */}

          <div className="mt-4">
            <label htmlFor="quantity" className="block mb-1 font-medium text-white-700">Quantity:</label>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleQuantityChange('decrease')} 
                className="p-2 bg-white-200 rounded-lg hover:bg-white-300"
              >
                <HiOutlineMinus />
              </button>
              <input 
                type="text" 
                id="quantity" 
                value={quantity} 
                readOnly 
                className="w-12 text-center   bg-gray-800 border border-white-300 rounded-lg"
              />
              <button 
                onClick={() => handleQuantityChange('increase')} 
                className="p-2 bg-white-200 rounded-lg hover:bg-white-300"
              >
                <HiOutlinePlus />
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500">
              Add to cart
            </button>
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500">
              Buy now
            </button>
          </div>

          {/* <div className="mt-4 flex items-center space-x-2 text-white-600">
            <button className="flex items-center space-x-1 hover:text-white-900">
              <FaHeart className="text-red-500" />
              <span>Add to Wishlist</span>
            </button>
          </div> */}

          <div className="mt-6 border-t border-white-300 pt-4">
            <p className="flex items-center text-green-600">
              ✅ Pickup available at Gummoz Auto Parts
            </p>
            <p className="text-sm text-white-500">Usually ready in 24 hours</p>
            <a href="#" className="text-sm text-green-600 hover:text-green-500 underline">View store information</a>
          </div>
        </div>
      </div>

      {/* Description Section */}
      {/* <div className="mt-8">
        <h2 className="text-xl font-bold">Description</h2>
        <p className="text-white-700 mt-2">
          {selectedPart.type} {selectedPart.name}
        </p>
      </div> */}
    </div>
    </>
  );
}
