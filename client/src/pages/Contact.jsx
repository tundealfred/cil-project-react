import React, { useState } from "react";

const ContactUs = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000); // Reset after 3 seconds
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold animate-fade-in">
            Contact
          </h1>
          <p className="mt-4 text-lg md:text-xl animate-fade-in delay-200">
            What would you like to do today?
          </p>
        </div>
      </section>

      <section className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 md:px-8">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
          {/* Header Section */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 animate-fade-in">
            Reach out
          </h2>
          <p className="text-gray-600 text-center mb-8 animate-fade-in delay-200">
            We'd love to hear from you! Fill out the form below or request a
            franchise application.
          </p>

          {/* Map Section */}
          <div className="rounded-lg overflow-hidden shadow-md mb-8 animate-slide-up">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19208.004993193157!2d-3.529931244706703!3d53.002373146134076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486538755f7c5825%3A0xef791ab3c9abc4ed!2sTy-nant%2C%20Corwen%20LL21%200PS!5e0!3m2!1sen!2suk!4v1734745632224!5m2!1sen!2suk"
              className="w-full h-64 sm:h-80 border-none"
              loading="lazy"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-slide-up">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-600 font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-600 font-medium mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-600 font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 transition"
                >
                  Submit
                </button>
              </form>
              {isFormSubmitted && (
                <p className="mt-4 text-green-500 text-center animate-bounce">
                  Thank you! We'll get back to you shortly.
                </p>
              )}
            </div>

            {/* Franchise Application Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-slide-up delay-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Franchise Application
              </h2>
              <p className="text-gray-600 mb-6">
                Interested in joining our team? Request a detailed application
                form today.
              </p>
              <button
                type="button"
                className="w-full bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 transition"
              >
                Request Application Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
