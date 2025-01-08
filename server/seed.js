require("dotenv").config();
const mongoose = require("mongoose");
const FranchiseForm = require("./models/FranchiseForm");
const ContactForm = require("./models/ContactForm");

// MongoDB Connection
const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/your-database-name";

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Sample Franchise Form Data
    const franchiseData = [
      {
        fullName: "John Doe AB",
        email: "johndoe@example.com",
        phone: "1234567890",
        experience: "5 years in food industry",
        location: "London",
        businessPlan: "Open a chain of stores in central London.",
        investment: 50000,
      },
      {
        fullName: "Jane Smith BC",
        email: "janesmith@example.com",
        phone: "9876543210",
        experience: "3 years in retail",
        location: "Manchester",
        businessPlan: "Target high-traffic areas for maximum sales.",
        investment: 30000,
      },
    ];

    // Sample Contact Form Data
    const contactData = [
      {
        name: "Alice Johnson XY",
        email: "alicejohnson@example.com",
        phone: "1112223333",
        message: "Interested in learning more about your services.",
      },
      {
        name: "Bob Brown YZ",
        email: "bobbrown@example.com",
        phone: "4445556666",
        message: "Would like to discuss potential partnership opportunities.",
      },
    ];

    // Clear Existing Data
    await FranchiseForm.deleteMany({});
    await ContactForm.deleteMany({});
    console.log(
      "Cleared existing data from FranchiseForm and ContactForm collections."
    );

    // Insert Sample Data
    await FranchiseForm.insertMany(franchiseData);
    await ContactForm.insertMany(contactData);
    console.log(
      "Seed data inserted into FranchiseForm and ContactForm collections."
    );

    // Close Database Connection
    mongoose.connection.close();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Error seeding database:", error.message);
    mongoose.connection.close();
  }
};

// Run the seeding function
seedDatabase();
