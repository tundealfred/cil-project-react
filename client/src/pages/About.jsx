import React, { useState } from "react";
import { FaCogs, FaFlask, FaWrench, FaClipboardList } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("CEMS");

  const expertiseContent = {
    CEMS: {
      icon: <FaCogs className="text-blue-500 text-3xl" />,
      title: "CEMS",
      description:
        "15 years of building, installing, and maintaining Continuous Emission Monitoring Systems. We know the ins and outs of legislation, pitfalls, and compliance.",
      image: "client/src/assets/cilimage7.jpg",
    },
    SyngasAnalysis: {
      icon: <FaFlask className="text-green-500 text-3xl" />,
      title: "Syngas Analysis",
      description:
        "5 years of experience in challenging continuous gas analysis applications, from gasification fuels to plant operation improvements.",
      image: "client/src/assets/cilimage7.jpg",
    },
    Maintenance: {
      icon: <FaWrench className="text-orange-500 text-3xl" />,
      title: "Maintenance",
      description:
        "Flexible maintenance options, from one-off calibrations to complete service contracts.",
      image: "client/src/assets/cilimage7.jpg",
    },
    Installation: {
      icon: <FaClipboardList className="text-red-500 text-3xl" />,
      title: "Installation & Commissioning",
      description:
        "Complete project solutions, from single sensors to entire systems. We help get your project across the finish line.",
      image: "client/src/assets/cilimage7.jpg",
    },
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold animate-fade-in">
            Who We Are
          </h1>
          <p className="mt-4 text-lg md:text-xl animate-fade-in delay-200">
            Innovative Gas Instruments for Modern Industries
          </p>
        </div>
        {/*<div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-blue-500 to-transparent opacity-70"></div>*/}
      </section>

      {/* Introduction Section */}
      <section
        className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-8"
        aria-labelledby="introduction"
      >
        <div className="md:w-1/2">
          <h2 id="introduction" className="text-3xl font-bold text-gray-800">
            We Know Gas Instruments
          </h2>
          <p className="mt-4 text-gray-600">
            Built on 15 years of experience, we install, commission, and
            maintain gas instruments. If no existing solution meets your needs,
            we’ll design and build one for you.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="../assets/cilimage7.jpg"
            alt="Team working on gas instruments"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Expertise
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Tabs */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-4">
            {Object.keys(expertiseContent).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 w-full py-3 px-4 text-left rounded-lg transition ${
                  activeTab === key
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 hover:bg-blue-100"
                }`}
              >
                {expertiseContent[key].icon}
                <span className="font-medium">
                  {expertiseContent[key].title}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="col-span-3 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {expertiseContent[activeTab].title}
            </h3>
            <p className="text-gray-600">
              {expertiseContent[activeTab].description}
            </p>
            <img
              src={expertiseContent[activeTab].image}
              alt={expertiseContent[activeTab].title}
              className="mt-6 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold animate-fade-in">
            Want to Start a New Project With Us?
          </h2>
          <p className="mt-4 text-lg animate-fade-in delay-200">
            Our trusted team is ready to solve your problems.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
