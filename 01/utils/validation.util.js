const { validationResult, body } = require("express-validator");

const errorResponseValidation = (req, res) => {
  const errors = validationResult(req);

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
const passwordValidationChain = () =>
  body("password")
    .notEmpty()
    .escape()
    .isLength({ min: 8 })
    .withMessage("it's not a VALID password");
module.exports = { errorResponseValidation, passwordValidationChain };
