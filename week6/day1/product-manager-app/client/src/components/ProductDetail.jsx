
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch specific product details by ID
    axios.get(`/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`/api/products/${id}`)
      .then(() => {
        navigate('/'); 
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div>
      <h2>Product Details</h2>
      <h3>Title: {product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
};

export default ProductDetail;
