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

const pageChain = validator
  .query("page")
  .optional()
  .default(0)
  .toInt()
  .isLength({ min: 0 });
const perPageChain = validator
  .query("perPage")
  .optional()
  .default(1)
  .toInt()
  .isLength({ min: 1 });
const queryChain = validator.query("query").optional().escape().toLowerCase();
const orderByChain = validator.query("orderBy").optional().escape();
const orderTypeChain = validator.query("orderType").optional().escape();
const minPriceChain = validator.query("minPrice").optional().toInt().escape();
const maxPriceChain = validator.query("maxPrice").optional().toInt().escape();
const minRateChain = validator.query("maxRate").optional().toInt().escape();
const maxRateChain = validator.query("maxRate").optional().toInt().escape();
const typeIdChain = validator.query("maxRate").optional().isUUID().escape();
const categoryRequirmentChain = validator
  .query("categoryRequirment")
  .optional()
  .toInt()
  .isInt()
  .escape();
const categoryListChain = validator
  .query("categoryList")
  .optional()
  .toArray()
  .isArray();

module.exports = {
  errorResponseValidation,
  passwordValidationChain,
  categoryListChain,
  categoryRequirmentChain,
  typeIdChain,minRateChain,maxPriceChain,maxRateChain,minPriceChain,orderTypeChain,orderByChain,queryChain,pageChain,perPageChain
};
