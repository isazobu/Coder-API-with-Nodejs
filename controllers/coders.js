const Coder = require("../models/Coders");

// @desc Get all coders
// @route GET /api/v1/coders
// @access Public
getCoders = async (req, res, next) => {
  try {
    const coders = await Coder.find();
    res.status(200).json({
      success: true,
      data: coders,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};

// @desc Get single coders
// @route GET /api/v1/coders/:id
// @access Public
getCoder = async (req, res, next) => {
  try {
    const coder = await Coder.findById(req.params.id);
    if (!coder) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: coder,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};
// @desc Create new coder
// @route POST /api/v1/coders
// @access Private
createCoder = async (req, res, next) => {
  try {
    const coder = await Coder.create(req.body);
    res.status(201).json({
      success: true,
      data: coder,
    });
  } catch (err) {
    res.status(400).json({ succes: false });
  }
};
// @desc Update coder
// @route PUT /api/v1/coders/:id
// @access Private
updateCoder = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update Coder ${req.params.id}`,
  });
};
// @desc Delete coder
// @route DELETE /api/v1/coders/:id
// @access Private
deleteCoder = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete Coder ${req.params.id}`,
  });
};

module.exports = {
  getCoders,
  getCoder,
  createCoder,
  updateCoder,
  deleteCoder,
};
