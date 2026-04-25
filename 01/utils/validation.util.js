const { validationResult, body, query } = require("express-validator");

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

const pageChain = () =>
  query("page").optional().default(0).toInt().isLength({ min: 0 });
const perPageChain = () =>
  query("perPage").optional().default(1).toInt().isLength({ min: 1 });
const queryChain = () => query("query").optional().escape().toLowerCase();
const orderByChain = () => query("orderBy").optional().escape();
const orderTypeChain = () => query("orderType").optional().escape();
const minPriceChain = () => query("minPrice").optional().toInt().escape();
const maxPriceChain = () => query("maxPrice").optional().toInt().escape();
const minRateChain = () => query("maxRate").optional().toInt().escape();
const maxRateChain = () => query("maxRate").optional().toInt().escape();
const typeIdChain = () => query("typeId").optional().isUUID().escape();
const idChain = () => query("id").optional().isUUID().escape();
const categoryRequirmentChain = () =>
  query("categoryRequirment").optional().toInt().isInt().escape();
const categoryListChain = () =>
  query("categoryList").optional().toArray().isArray();

module.exports = {
  errorResponseValidation,
  passwordValidationChain,
  categoryListChain,
  idChain,
  categoryRequirmentChain,
  typeIdChain,
  minRateChain,
  maxPriceChain,
  maxRateChain,
  minPriceChain,
  orderTypeChain,
  orderByChain,
  queryChain,
  pageChain,
  perPageChain,
};
