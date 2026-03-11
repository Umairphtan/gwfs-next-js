const express = require("express");
const router = express.Router();

const productController = require("../controlers/product");
const upload = require("../middleware/multer"); // Multer middleware

router.post(
  "/product",
  upload.single("image"),
  productController.createProduct
);

router.get("/products", productController.getProducts);

router.get("/product/:id", productController.getProductById);

router.put(
  "/product/:id",
  upload.single("image"),
  productController.updateProduct
);

router.delete("/product/:id", productController.deleteProduct);

router.get("/category/:category", productController.getByCategory);

module.exports = router;