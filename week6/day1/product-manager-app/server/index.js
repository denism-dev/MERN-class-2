const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 8000; 

app.use(cors());
// app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/product-manager-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is fired up on port ${PORT}`);
});
