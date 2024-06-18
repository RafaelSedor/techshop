import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import logo from './images/logo.png';
import './index.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleProductUpdate = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to TechShop CRUD</h1>
      </header>
      <main>
        <ProductForm selectedProduct={selectedProduct} onProductUpdate={handleProductUpdate} />
        <ProductList onSelectProduct={handleProductSelect} />
      </main>
    </div>
  );
}

export default App;
