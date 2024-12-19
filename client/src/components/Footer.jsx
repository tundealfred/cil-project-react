import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Gas Instruments. All rights
            reserved.
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-blue-400 hover:text-blue-500">
            Facebook
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            Twitter
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
