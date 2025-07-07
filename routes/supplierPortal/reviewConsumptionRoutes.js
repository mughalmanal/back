const express = require("express");
const router = express.Router();
const {
  createReviewConsumption, getReviewConsumption, updateReviewConsumption, deleteReviewConsumption
} = require("../controllers/ReviewConsumptionController");

router.post("/", createReviewConsumption);
router.get("/", getReviewConsumption);
router.put("/:id", updateReviewConsumption);
router.delete("/:id", deleteReviewConsumption);

module.exports = router;
