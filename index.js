const express = require("express");
// Import mongoose
const mongoose = require("mongoose");
// Import model 
const Product = require("./models/product.model.js");
// Import route 
const productRoute = require("./routes/product.route.js");
const app = express();

// Middleware untuk mengubah ke JSON 
app.use(express.json());

// Middleware supaya bisa menambahkan data melalui form encode
app.use(express.urlencoded({extended: false}));


// Routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hallo from API Server Baru Mongodb");
});


// Koneksi ke mongoose
mongoose
  .connect(
    // koneksi database ke mongodb
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });