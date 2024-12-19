import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg"
          >
            Built on 15 years of experience, we know gas instruments inside out.
          </motion.p>
        </div>
      </section>

      {/* Core Description */}
      <section className="container mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            We install them. We commission them. We maintain them. We even
            design & build systems around them. Whether it’s CEMS, Syngas
            Analysis, process gas analysis, gas sampling, or gas detection for
            health and safety, we have the expertise.
          </p>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            If your system needs maintenance, repair, or fault diagnosis, we can
            help. If you need a solution specifying, we can help. If a system
            doesn’t exist to meet your needs, we’ll build you one.
          </p>
        </motion.div>
      </section>

      {/* Expertise Cards */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CEMS Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-blue-500/40 transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-500">CEMS</h3>
            </div>
            <p className="mt-4 text-gray-600">
              15 years of designing, building, and maintaining Continuous
              Emission Monitoring Systems. We know the ins and outs of
              legislation and compliance.
            </p>
          </motion.div>

          {/* Syngas Analysis Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-indigo-500/40 transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h11m-6 4h6m-6-8h2m7 8h4m-4-4h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-500">
                Syngas Analysis
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              5 years of expertise in challenging syngas applications, providing
              valuable insights to optimize plant operations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
