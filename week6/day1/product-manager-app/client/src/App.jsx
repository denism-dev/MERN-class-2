import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EditProduct from './components/EditProduct';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Product</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/create" element={<ProductForm />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* <Route path="/" element={<ProductList />} />  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
