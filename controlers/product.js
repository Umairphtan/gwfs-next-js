const Product = require("../modals/product");

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, category, stock } = req.body;

    if (!title || !description || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, description, price, and category are required"
      });
    }

    const product = await Product.create({
      title,
      description,
      price,
      category,
      stock: stock || 0,
      image: req.file ? req.file.filename : null
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({
      success: true,
      message: "Products fetched successfully",
      products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.json({
      success: true,
      message: "Product fetched successfully",
      product
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { title, description, price, category, stock } = req.body;

    const updatedData = {
      title,
      description,
      price,
      category,
      stock
    };

    if (req.file) updatedData.image = req.file.filename;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.json({
      success: true,
      message: "Product updated successfully",
      product
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getByCategory = async (req, res) => {
  try {
    const category = req.params.category;

    const products = await Product.find({ category });

    res.json({
      success: true,
      message: `Products fetched successfully for category: ${category}`,
      products
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};