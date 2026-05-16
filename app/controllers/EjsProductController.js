const Product = require("../models/Product");

class EjsProductController {

  async home(req, res) {

    const products = await Product.find();

    res.render("index", {
      products
    });
  }

  async createPage(req, res) {
    res.render("create");
  }

  async singlePage(req, res) {

    const product = await Product.findById(req.params.id);

    res.render("single", {
      product
    });
  }

  async editPage(req, res) {

    const product = await Product.findById(req.params.id);

    res.render("edit", {
      product
    });
  }
  async deleteProduct(req, res) {

    try {

      await Product.findByIdAndDelete(req.params.id);

      res.redirect("/");

    } catch (error) {

      res.send(error.message);

    }

  }

}

module.exports = new EjsProductController();