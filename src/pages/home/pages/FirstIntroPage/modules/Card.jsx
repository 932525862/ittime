import React from 'react';

export default function Card({ icon: Icon, title, description }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-red-700 via-red-600 to-red-700 rounded-2xl p-2 
                    flex flex-col items-center text-white shadow-xl">
      <div className="bg-white p-4 rounded-2xl w-full h-[50%] flex justify-center items-center mb-6 shadow-lg  border border-red-500">
        <Icon className="text-[150px] text-red-500" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-center text-gray-100">{description}</p>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold 
                          hover:bg-gray-100 transition-colors">
          Batafsil
        </button>
      </div>
    </div>
  );
}
