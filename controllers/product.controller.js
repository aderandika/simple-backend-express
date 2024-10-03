// Import model 
const Product =  require('../models/product.model');

// Inisialisasi fungsi untuk memanggil banyak data
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Inisialisasi fungsi untuk memanggil hanya 1 data
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
};

// Membuat product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({message: error.message});
      }
};

// Update product 
const updatedProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
    
        // Memeriksa jika tidak di temukan produk yang ingin di update
        if (!product) {
          return res.status(404).json({message: "Product not found"});
        }
    
        // Melakukan proses update jika produk sudah di temukan
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    
    
      } catch (error) {
        res.status(500).json({message: error.message});
      }
}

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
    
        const product = await Product.findByIdAndDelete(id);
    
        if (!product) {
          return res.status(404).json({message: "Product not found"});
        }
    
        res.status(200).json({message: "Produk delete successfully"});
    
      } catch (error) {
        res.status(500).json({message: error.message});
      }
}

// export fungsi dari controller 
module.exports = {
    getProducts, 
    getProduct, 
    createProduct, 
    updatedProduct, 
    deleteProduct
};
    