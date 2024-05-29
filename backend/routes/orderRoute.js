const express = require("express");
const { isAutheniticatedUser, authorizedRoles } = require("../middleware/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/order/new").post(isAutheniticatedUser, newOrder);
router.route("/order/:id").get(isAutheniticatedUser, getSingleOrder);
router.route("/orders/me").get(isAutheniticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(isAutheniticatedUser, authorizedRoles("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAutheniticatedUser, authorizedRoles("admin"), updateOrder)
  .delete(isAutheniticatedUser, authorizedRoles("admin"), deleteOrder);

module.exports = router;
