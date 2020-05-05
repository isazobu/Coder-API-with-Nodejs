const Coder = require("../models/Coders");

// @desc Get all coders
// @route GET /api/v1/coders
// @access Public
getCoders = async (req, res, next) => {
  try {
    const coders = await Coder.find();
    res.status(200).json({
      success: true,
      count: coders.length,
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
updateCoder = async (req, res, next) => {
  try {
    coder = await Coder.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!coder) {
      return res
        .status(400)
        .json({ success: false, error: "Coder is not exist" });
    }
    res.status(200).json({
      success: true,
      data: coder,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};
// @desc Delete coder
// @route DELETE /api/v1/coders/:id
// @access Private
deleteCoder = async (req, res, next) => {
  try {
    coder = await Coder.findByIdAndDelete(req.params.id);
    if (!coder) {
      return res
        .status(400)
        .json({ success: false, error: "Coder is not exist" });
    }
    res.status(204).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};

module.exports = {
  getCoders,
  getCoder,
  createCoder,
  updateCoder,
  deleteCoder,
};
