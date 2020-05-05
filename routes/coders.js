const express = require("express");
const router = express.Router();

const ctrlCoder = require("../controllers/coders");

router.route("/").get(ctrlCoder.getCoders).post(ctrlCoder.createCoder);

router
  .route("/:id")
  .get(ctrlCoder.getCoder)
  .put(ctrlCoder.updateCoder)
  .delete(ctrlCoder.deleteCoder);

module.exports = router;
