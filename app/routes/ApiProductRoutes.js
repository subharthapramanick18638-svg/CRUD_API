const router = require("express").Router();

const ApiProductController = require("../controllers/ApiProductController");

router.post("/products", ApiProductController.createProduct);

router.get("/products", ApiProductController.getProducts);

router.get("/products/:id", ApiProductController.getSingleProduct);

router.put("/products/:id", ApiProductController.updateProduct);

router.delete("/products/:id", ApiProductController.deleteProduct);

module.exports = router;