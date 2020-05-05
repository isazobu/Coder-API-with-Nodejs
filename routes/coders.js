const express = require('express');
const router = express.Router()


router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Show all Coder-Bootcamp",
  });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Get Coder ${req.params.id}`,
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Create new Coder-Bootcamp",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update Coder ${req.params.id}`,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete Coder ${req.params.id}`,
  });
});

module.exports = router;