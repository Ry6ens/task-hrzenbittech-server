const express = require("express");

const router = express.Router();

const liqpayController = require("../../controllers/liqpay");

const { ctrlWrapper } = require("../../helpers");

// Pay food
router.post("/form", ctrlWrapper(liqpayController.payProducts));
