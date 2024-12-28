import React from "react";
import backgroundImage from "../assets/cilimage5.jpg"; // Adjust the path based on your project structure
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="bg-gray-100 py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center bg-white bg-opacity-70 p-8 rounded-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
          Innovative Gas Instruments for Modern Industries
        </h1>
        <p className="mt-4 text-2xl font-bold text-gray-950">
          Discover our advanced solutions for gas monitoring and analysis.
        </p>
        <div className="mt-8">
          <Link
            to="./contact"
            className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
