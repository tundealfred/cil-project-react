import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";

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

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Our Services
        </h2>
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
    </>
  );
};

export default Home;
