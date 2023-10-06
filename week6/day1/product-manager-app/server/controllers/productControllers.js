
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const { title, price, description } = req.body;
    const newProduct = new Product({ title, price, description });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Error creating product' });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { title, price, description } = req.body;
    const productId = req.params.id; 
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { title, price, description },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error('Error editing product:', error);
    res.status(500).json({ message: 'Error editing product' });
  }
};


exports.getProductDetails = async (req, res) => {
  try {
    const productId = req.params.id; 
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error getting product details:', error);
    res.status(500).json({ message: 'Error getting product details' });
  }
};


exports.getProductList = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error getting product list:', error);
    res.status(500).json({ message: 'Error getting product list' });
  }
};

