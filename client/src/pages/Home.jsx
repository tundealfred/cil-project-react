import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import AdditionalServiceCard from "../components/AdditionalServiceCard";
import { motion } from "framer-motion";

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
    </>
  );
};

export default Home;
