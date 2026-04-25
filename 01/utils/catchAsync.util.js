const { errorResponseValidation } = require("./validation.util");

const catchAsysnc = (fn) => {
  return (req, res, next) => {
    const validationError = errorResponseValidation(req, res);
    if (validationError) return;

    fn(req, res, next).catch(next);
  };
};
module.exports = catchAsysnc;
