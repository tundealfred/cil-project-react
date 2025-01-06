const mongoose = require("mongoose");

const franchiseFormSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  businessPlan: { type: String, required: true },
  investment: { type: Number, required: true },
});

module.exports = mongoose.model("FranchiseForm", franchiseFormSchema);
