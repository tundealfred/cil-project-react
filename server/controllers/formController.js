const ContactForm = require("../models/ContactForm");
const FranchiseForm = require("../models/FranchiseForm");
const transporter = require("../config/emailConfig");

const submitContactForm = async (req, res) => {
  try {
    const formData = req.body;
    const contactForm = new ContactForm(formData);
    await contactForm.save();

    // Send Email Notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Contact Form Submission",
      text: JSON.stringify(formData, null, 2),
    });

    res.status(201).json({ message: "Contact form submitted successfully." });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Failed to submit contact form." });
  }
};

const submitFranchiseForm = async (req, res) => {
  try {
    const formData = req.body;
    const franchiseForm = new FranchiseForm(formData);
    await franchiseForm.save();

    // Send Email Notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Franchise Form Submission",
      text: JSON.stringify(formData, null, 2),
    });

    res.status(201).json({ message: "Franchise form submitted successfully." });
  } catch (error) {
    console.error("Error submitting franchise form:", error);
    res.status(500).json({ error: "Failed to submit franchise form." });
  }
};

module.exports = { submitContactForm, submitFranchiseForm };
