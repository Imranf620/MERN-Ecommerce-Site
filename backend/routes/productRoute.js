const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { isAutheniticatedUser, authorizedRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/admin/product/new")
  .post(isAutheniticatedUser, authorizedRoles("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(isAutheniticatedUser, authorizedRoles("admin"), updateProduct)
  .delete(isAutheniticatedUser, authorizedRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAutheniticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAutheniticatedUser, deleteReview);

module.exports = router;
