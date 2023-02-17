const express = require("express");

const {
  getContacts,
  getContact,
  addContact,
} = require("../controllers/contact");

const router = express.Router();

router.get("/", getContacts);
router.get("/:id", getContact);
router.post("/", addContact);

module.exports = router;
