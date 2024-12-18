import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
