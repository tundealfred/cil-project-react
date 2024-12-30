import React, { useState } from "react";
import axios from "axios";

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    location: "",
    businessPlan: "",
    investment: "",
  });

  const [suggestions, setSuggestions] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAIRequest = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/suggestions",
        {
          input: formData.businessPlan,
        }
      );
      setSuggestions(data.suggestions);
    } catch (error) {
      console.error("Error fetching AI suggestions:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/submit-form", {
        formType: "franchise",
        formData,
      });
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        location: "",
        businessPlan: "",
        investment: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Franchise Application
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Full Name", name: "fullName", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone", name: "phone", type: "tel" },
          { label: "Experience", name: "experience", type: "text" },
          { label: "Location", name: "location", type: "text" },
          { label: "Investment (GBP)", name: "investment", type: "number" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label
              htmlFor={name}
              className="block text-sm font-medium text-gray-700"
            >
              {label}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
            />
          </div>
        ))}
        <div>
          <label
            htmlFor="businessPlan"
            className="block text-sm font-medium text-gray-700"
          >
            Business Plan
          </label>
          <textarea
            id="businessPlan"
            name="businessPlan"
            rows="4"
            value={formData.businessPlan}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
          ></textarea>
          <button
            type="button"
            onClick={handleAIRequest}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:ring"
          >
            Get AI Suggestions
          </button>
        </div>
        {suggestions && (
          <div className="bg-gray-100 p-4 rounded-md shadow mt-4">
            <h4 className="font-semibold text-gray-800">AI Suggestions:</h4>
            <p className="text-gray-600">{suggestions}</p>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:ring"
        >
          Submit Application
        </button>
      </form>
      {isSubmitted && (
        <p className="mt-4 text-green-500 font-semibold">
          Thank you! Your application has been submitted.
        </p>
      )}
    </div>
  );
};

export default FranchiseForm;
