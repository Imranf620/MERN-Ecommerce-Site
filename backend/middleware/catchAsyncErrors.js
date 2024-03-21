// of we don't make async error handler(try, catch), then our wrong api request will be continue infinite time. e.g. If we don't give a data that is required true.

module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
