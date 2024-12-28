import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import AdditionalServiceCard from "../components/AdditionalServiceCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import caseStudy1 from "../assets/caseStudy1.jpg";
import caseStudy2 from "../assets/caseStudy2.jpg";
import caseStudy3 from "../assets/caseStudy3.jpg";
import caseStudy4 from "../assets/caseStudy4.jpg";

const services = [
  {
    icon: "📊",
    title: "CEMS",
    description: "Continuous Emission Monitoring Systems",
  },
  {
    icon: "⚗️",
    title: "Syngas Analysis",
    description: "Gas composition analysis solutions",
  },
  {
    icon: "🔧",
    title: "Maintenance",
    description: "Reliable maintenance services",
  },
];

const additionalServices = [
  {
    title: "Consultancy",
    description:
      "We can consult on new systems, improving existing systems, or simply guide you through the relevant legislation.",
  },
  {
    title: "Design & Build",
    description:
      "Designing and Building solutions to the more challenging gas analysis or detection requirements is what we do. If you can’t buy it off the shelf, we’ll build it for you.",
  },
  {
    title: "Maintenance",
    description:
      "From a one-off calibration to a complete maintenance contract, we are flexible to your needs.",
  },
  {
    title: "Installation & Commissioning",
    description:
      "Single sensors to complete systems, we can get your project over the finish line.",
  },
];

const caseStudies = [
  {
    id: 1,
    image: caseStudy1,
    title: "CEMS Implementation at Industrial Plant",
    description:
      "We successfully installed and commissioned Continuous Emission Monitoring Systems for a major industrial plant.",
  },
  {
    id: 2,
    image: caseStudy2,
    title: "Syngas Analysis for Gasification Project",
    description:
      "Delivered a custom syngas analysis solution for a gasification plant, optimizing their process.",
  },
  {
    id: 3,
    image: caseStudy3,
    title: "Custom Gas Detection System",
    description:
      "Designed and built a bespoke gas detection system to meet unique health and safety requirements.",
  },
  {
    id: 4,
    image: caseStudy4,
    title: "Syngas Analysis for Gasification Project 2",
    description:
      "Delivered a custom syngas analysis solution for a gasification plant, optimizing their process.",
  },
  {
    id: 5,
    image: caseStudy3,
    title: "Bespoke Industrial Gas Detection System",
    description:
      "Designed and built a bespoke gas detection system to meet unique health and safety requirements.",
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <HeroSection />

      {/* Services Section */}
      <section className="container mx-auto py-12">
        {/*<h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Our Services
        </h2>*/}
        <div className="relative container mx-auto px-6 text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Who We <span className="text-yellow-400">Are</span>
          </motion.h1>
        </div>
        {/* Core Description */}
        <section className="container mx-auto px-6 py-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-gray-700 text-xl leading-relaxed">
              We install them. We commission them. We maintain them. We even
              design & build systems around them. Whether it’s CEMS, Syngas
              Analysis, process gas analysis, gas sampling, or gas detection for
              health and safety, we have the expertise.
            </p>
            <p className="mt-6 text-gray-700 text-xl leading-relaxed">
              If you need a solution specifying, we can help. If a system
              doesn’t exist to meet your needs, we’ll build you one.
            </p>
          </motion.div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Additional Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalServices.map((service, index) => (
            <AdditionalServiceCard
              key={index}
              title={service.title}
              description={service.description}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Featured Case Studies
        </h2>
        <div className="relative flex overflow-x-scroll space-x-6 pb-4">
          {caseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              className="flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden w-80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 mt-2">{caseStudy.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/case-studies"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            View All Case Studies
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
