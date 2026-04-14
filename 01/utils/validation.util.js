
const errorResponseValidation = (req, res) => {
  const errors = expressValdator.validationResult(req);

  // Check for validation errors
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }
};

module.exports = errorResponseValidation