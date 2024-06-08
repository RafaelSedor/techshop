import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import logo from './images/logo.png';

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
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to TechShop CRUD</h1>
      </header>
      <ProductForm selectedProduct={selectedProduct} onProductUpdate={handleProductUpdate} />
      <ProductList onSelectProduct={handleProductSelect} />
    </div>
  );
}

export default App;
