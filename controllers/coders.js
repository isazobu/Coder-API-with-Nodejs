// @desc Get all coders
// @route GET /api/v1/coders
// @access Public
getCoders = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all Coder-Bootcamp",
  });
};

// @desc Get single coders
// @route GET /api/v1/coders/:id
// @access Public
getCoder = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get Coder ${req.params.id}`,
  });
};
// @desc Create new coder
// @route POST /api/v1/coders
// @access Private
createCoder = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Create new Coder-Bootcamp",
  });
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
