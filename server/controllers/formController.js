const ContactForm = require("../models/ContactForm");
const FranchiseForm = require("../models/FranchiseForm");
const sendEmail = require("../config/emailConfig");

const submitContactForm = async (req, res) => {
  try {
    // Log the incoming request body
    console.log("Request body received at /submit-contact:", req.body);

    // Ensure all required fields are present
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      console.error("Missing required fields in request body.");
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save the form data to the database
    const contactForm = new ContactForm(req.body);
    await contactForm.save();

    // Send an email notification
    await sendEmail({
      to: process.env.EMAIL_RECEIVER,
      subject: "CIL Website | New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    // Send success response
    res.status(201).json({ message: "Contact form submitted successfully." });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Failed to submit contact form." });
  }
};

const submitFranchiseForm = async (req, res) => {
  try {
    // Log the incoming request body
    console.log("Request body received at /submit-franchise:", req.body);

    // Ensure all required fields are present
    const {
      fullName,
      email,
      phone,
      experience,
      location,
      businessPlan,
      investment,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !experience ||
      !location ||
      !businessPlan ||
      !investment
    ) {
      console.error("Missing required fields in request body.");
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save the form data to the database
    const franchiseForm = new FranchiseForm(req.body);
    await franchiseForm.save();

    // Send an email notification
    await sendEmail({
      to: process.env.EMAIL_RECEIVER,
      subject: "CIL Website | New Franchise Form Submission",
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nExperience: ${experience}\nLocation: ${location}\nBusiness Plan: ${businessPlan}\nInvestment: ${investment}`,
    });

    // Send success response
    res.status(201).json({ message: "Franchise form submitted successfully." });
  } catch (error) {
    console.error("Error submitting franchise form:", error);
    res.status(500).json({ error: "Failed to submit franchise form." });
  }
};

module.exports = { submitContactForm, submitFranchiseForm };
