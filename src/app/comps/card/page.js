
"use client";

import { useSearchParams } from 'next/navigation';

export default function Card() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const description = searchParams.get("description");
  const imageUrl = searchParams.get("imageUrl");

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
        <h2 className="text-2xl font-bold mt-4">{name}</h2>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
}
