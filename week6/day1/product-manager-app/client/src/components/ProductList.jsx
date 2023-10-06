
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = ({ products, setProducts }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost=3000/api/products/${id}`)
      .then(() => {
        // Update the products state to remove the deleted product
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`api/products/${product._id}`}>{product.title}</Link>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
