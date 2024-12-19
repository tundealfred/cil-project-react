import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transform transition">
      <div className="text-blue-500 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
