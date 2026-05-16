const router = require("express").Router();

const EjsProductController = require("../controllers/EjsProductController");

router.get("/", EjsProductController.home);

router.get("/create", EjsProductController.createPage);

router.get("/single/:id", EjsProductController.singlePage);

router.get("/edit/:id", EjsProductController.editPage);

router.post("/delete/:id", EjsProductController.deleteProduct);

module.exports = router;