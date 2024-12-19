import React from "react";
import { motion } from "framer-motion";
import { HiQuestionMarkCircle } from "react-icons/hi";

const AdditionalServiceCard = ({
  title,
  description,
  isOpen,
  toggleAccordion,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400 text-gray-800 focus:outline-none transition-all duration-300"
      >
        <div className="flex items-center space-x-4">
          <HiQuestionMarkCircle className="text-blue-700 text-3xl" />
          <span className="text-xl font-semibold">{title}</span>
        </div>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6 py-4 bg-gray-100 text-gray-700"
        >
          <p>{description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default AdditionalServiceCard;
