const express = require("express");
const busesController = require("../controllers/busesController");
const router = express.Router();

router.post("/",busesController.addBus);

router.get("/available/:seats",busesController.getAvailableSeats);

module.exports = router;