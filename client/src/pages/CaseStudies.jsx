import React from "react";

// Example images for case studies (update the paths to actual image paths in your project)
import caseStudy1 from "../assets/caseStudy1.jpg";
import caseStudy2 from "../assets/caseStudy2.jpg";
import caseStudy3 from "../assets/caseStudy3.jpg";
import caseStudy4 from "../assets/caseStudy4.jpg";
//import cilimage7 from "../assets/cilimage7.jpg";
//import cilimage5 from "../assets/cilimage5.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      image: caseStudy1,
      title: "CEMS Implementation at Industrial Plant",
      description:
        "We successfully installed and commissioned Continuous Emission Monitoring Systems for a major industrial plant, ensuring compliance with environmental regulations.",
    },
    {
      id: 2,
      image: caseStudy2,
      title: "Syngas Analysis for Gasification Project",
      description:
        "Delivered a custom syngas analysis solution for a gasification plant, optimizing their process and improving operational efficiency.",
    },
    {
      id: 3,
      image: caseStudy3,
      title: "Custom Gas Detection System",
      description:
        "Designed and built a bespoke gas detection system to meet unique health and safety requirements for a chemical facility.",
    },
    {
      id: 4,
      image: caseStudy4,
      title: "Syngas Analysis for Gasification Project 2",
      description:
        "Delivered a custom syngas analysis solution for a gasification plant, optimizing their process and improving operational efficiency.",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold animate-fade-in">
            Case Studies
          </h1>
          <p className="mt-4 text-lg md:text-xl animate-fade-in delay-200">
            Successful Gas Instrumentation Projects
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Explore Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600">{caseStudy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;
