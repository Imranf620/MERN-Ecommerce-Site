const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAutheniticatedUser, authorizedRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/product/new")
  .post(isAutheniticatedUser, authorizedRoles("admin"), createProduct);

router
  .route("/product/:id")
  .put(isAutheniticatedUser, authorizedRoles("admin"), updateProduct)
  .delete(isAutheniticatedUser, authorizedRoles("admin"), deleteProduct)
  .get(getProductDetails);

module.exports = router;
