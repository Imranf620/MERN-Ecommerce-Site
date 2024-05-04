const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// Creating product --> admin route

exports.createProduct = catchAsyncErrors(async (req, res, next) => {

  req.body.createdBy = req.user.id

  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
});

//  Get all products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {

  const resultPerPage = 5; // Number of items to show per page

  const productCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter().pagination(resultPerPage);
  // const products = await Product.find(); we cannot repeate same
  const products = await apiFeature.query;
  res.status(200).json({
    success: true,
    products,
    productCount
  });
});

//  get product details

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
   
  });
});

// Update product -- admin route

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  }); // returns the updated document rather than the old one

  res.status(200).json({
    success: true,
    product,
  });
});

//  delete product == admin route

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  // await product.remove();

  await Product.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Product has been deleted",
  });
});
