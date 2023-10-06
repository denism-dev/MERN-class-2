
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate to handle navigation
  const [product, setProduct] = useState({});
  const [updatedProduct, setUpdatedProduct] = useState({
    title: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    // Fetch product details by ID and pre-fill the form
    axios
      .get(`/api/products/${id}`) // Corrected URL
      .then((response) => {
        setProduct(response.data);
        setUpdatedProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/products/${id}`, updatedProduct)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={updatedProduct.title}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          value={updatedProduct.price}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          value={updatedProduct.description}
          onChange={handleInputChange}
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
