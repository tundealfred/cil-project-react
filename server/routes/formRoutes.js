const express = require("express");
const router = express.Router();

const {
  submitContactForm,
  submitFranchiseForm,
} = require("../controllers/formController");

router.post("/submit-contact", submitContactForm);
router.post("/submit-franchise", submitFranchiseForm);

module.exports = router;
