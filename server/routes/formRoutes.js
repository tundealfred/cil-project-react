const express = require("express");
const {
  submitContactForm,
  submitFranchiseForm,
} = require("../controllers/formController");
const { getSuggestions } = require("../controllers/suggestionController");

const router = express.Router();

router.post("/submit-contact", submitContactForm);
router.post("/submit-franchise", submitFranchiseForm);
router.post("/suggestions", getSuggestions);

module.exports = router;
