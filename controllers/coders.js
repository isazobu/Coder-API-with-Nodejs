const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Coder = require("../models/Coders");

// @desc Get all coders
// @route GET /api/v1/coders
// @access Public
getCoders = asyncHandler(async (req, res, next) => {
  const coders = await Coder.find();
  res.status(200).json({
    success: true,
    count: coders.length,
    data: coders,
  });
});

// @desc Get single coders
// @route GET /api/v1/coders/:id
// @access Public
getCoder = asyncHandler(async (req, res, next) => {
  const coder = await Coder.findById(req.params.id);
  if (!coder) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: coder,
  });
});
// @desc Create new coder
// @route POST /api/v1/coders
// @access Private
createCoder = asyncHandler(async (req, res, next) => {
  const coder = await Coder.create(req.body);
  res.status(201).json({
    success: true,
    data: coder,
  });
});
// @desc Update coder
// @route PUT /api/v1/coders/:id
// @access Private
updateCoder = asyncHandler(async (req, res, next) => {
  coder = await Coder.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!coder) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: coder,
  });
});
// @desc Delete coder
// @route DELETE /api/v1/coders/:id
// @access Private
deleteCoder = asyncHandler(async (req, res, next) => {
  coder = await Coder.findByIdAndDelete(req.params.id);
  if (!coder) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(204).json({
    success: true,
    data: {},
  });
});

module.exports = {
  getCoders,
  getCoder,
  createCoder,
  updateCoder,
  deleteCoder,
};
