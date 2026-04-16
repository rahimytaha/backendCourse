const { errorResponseValidation } = require("./validation.util");

const catchAsysnc = (fn) => {
  return (req, res, next) => {
    errorResponseValidation(req, res);

    fn(req, res, next).catch(next);
  };
};
module.exports = catchAsysnc;
