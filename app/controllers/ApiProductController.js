const Product = require("../models/Product");

class ProductController {

  // Create Product
  async createProduct(req, res) {

    try {

      const { name, description, price, category, inStock } = req.body;

      // Validation
      if (!name || !price) {
        return res.status(400).json({
          success: false,
          message: "Name and Price are required"
        });
      }

      // Check duplicate product
      const existingProduct = await Product.findOne({
        name,
        description
      });

      if (existingProduct) {
        return res.status(400).json({
          success: false,
          message: "Product with same name and description already exists"
        });
      }

      // Create product
      const product = new Product({
        name,
        description,
        price,
        category,
        inStock
      });

      await product.save();

      return res.status(201).json({
        success: true,
        message: "Product Created Successfully",
        data: product
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });

    }
  }


  // Get All Products
  async getProducts(req, res) {

    try {

      const products = await Product.find();

      return res.status(200).json({
        success: true,
        total: products.length,
        data: products
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });

    }
  }

  // Get Single Product
  async getSingleProduct(req, res) {

    try {

      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product Not Found"
        });
      }

      return res.status(200).json({
        success: true,
        data: product
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });

    }
  }

  // Update Product
  async updateProduct(req, res) {

    try {

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      );

      if (!updatedProduct) {
        return res.status(404).json({
          success: false,
          message: "Product Not Found"
        });
      }

      return res.status(200).json({
        success: true,
        message: "Product Updated Successfully",
        data: updatedProduct
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });

    }
  }

  // Delete Product
  async deleteProduct(req, res) {

    try {

      const product = await Product.findByIdAndDelete(req.params.id);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product Not Found"
        });
      }

      return res.status(200).json({
        success: true,
        message: "Product Deleted Successfully"
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });

    }
  }

}

module.exports = new ProductController();