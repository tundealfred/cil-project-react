import React, { useState } from "react";
import { FaCogs, FaFlask, FaWrench, FaClipboardList } from "react-icons/fa";
import cilimage2 from "../assets/cilimage2.jpg";
import cilimage7 from "../assets/cilimage7.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("CEMS");

  const expertiseContent = {
    CEMS: {
      icon: <FaCogs className="text-blue-500 text-3xl" />,
      title: "CEMS",
      description:
        "With 15 years of experience in building, installing, and maintaining Continuous Emission Monitoring Systems, we have unparalleled expertise. We understand the complexities of legislation, the potential pitfalls, and the practicalities of achieving compliance. Our in-depth knowledge ensures we can deliver reliable, efficient, and tailored solutions for your emission monitoring needs.",
      image: cilimage2, // Use the imported image,
    },
    SyngasAnalysis: {
      icon: <FaFlask className="text-green-500 text-3xl" />,
      title: "Syngas Analysis",
      description:
        "With 5 years of expertise in tackling challenging continuous gas analysis applications, we’ve worked extensively with various gasification fuels, including wood, RDF, and more. Our experience spans diverse technologies, enabling us to measure multiple gas components, optimise processes, and deliver valuable insights that drive significant improvements in plant operations.",
      image: cilimage7, // Use the imported image
    },
    Maintenance: {
      icon: <FaWrench className="text-orange-500 text-3xl" />,
      title: "Maintenance",
      description:
        "We offer flexible maintenance solutions tailored to your needs, ranging from one-off calibrations to comprehensive service contracts. Whether it’s routine servicing, fault diagnosis, or urgent repairs, our expertise ensures your systems remain reliable and efficient, minimising downtime and maximising performance across all gas instrument applications.",
      image: cilimage2, // Use the imported image
    },
    Installation: {
      icon: <FaClipboardList className="text-red-500 text-3xl" />,
      title: "Installation & Commissioning",
      description:
        "We provide complete project solutions, handling everything from the installation of single sensors to the commissioning of entire systems. With meticulous attention to detail and a commitment to quality, we ensure your project is completed smoothly, efficiently, and to the highest standards, helping you achieve operational readiness with confidence.",
      image: cilimage7, // Use the imported image
    },
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold animate-fade-in">
            About
          </h1>
          <p className="mt-4 text-lg md:text-xl animate-fade-in delay-200">
            Innovative Gas Instruments for Modern Industries
          </p>
        </div>
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
          <p className="mt-4 text-gray-600 text-justify">
            Built on 15 years of expertise, Controls and Instrumentation Ltd
            specialises in installing, commissioning, and maintaining gas
            instruments for a wide range of applications. From Continuous
            Emission Monitoring Systems (CEMS) to Syngas Analysis, process gas
            analysis, and gas detection for health and safety, we provide
            tailored solutions to meet your needs. As an independent company, we
            ensure every recommendation is driven by what’s best for your
            system—not manufacturer constraints. Whether your priority is
            compliance, efficiency, or safety, our experience and insight ensure
            reliable and effective solutions. Syngas analysis, one of the most
            demanding fields, has been a focus for the past five years. Our
            expertise extends beyond measuring calorific values; we analyse
            various gas components to help optimise plant operations. If no
            solution exists for your unique challenges, we’ll design and build
            one. Trust Controls and Instrumentation Ltd to support all your gas
            instrument needs.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={cilimage7}
            alt="Team working on gas instruments"
            className="rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl mx-auto"
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
              className="mt-6 rounded-lg shadow-lg w-full max-w-md md:max-w-lg mx-auto"
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
