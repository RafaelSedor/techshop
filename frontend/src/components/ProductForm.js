import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://techshop.com.br:3000/products';

function ProductForm({ selectedProduct, onProductUpdate }) {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.id) {
      axios.put(`${API_URL}/${product.id}`, product)
        .then(response => {
          alert('Product updated successfully');
          onProductUpdate(response.data);
          setProduct({ name: '', price: '', description: '' });
        })
        .catch(error => {
          console.error('There was an error updating the product!', error);
        });
    } else {
      axios.post(API_URL, product)
        .then(response => {
          alert('Product added successfully');
          setProduct({ name: '', price: '', description: '' });
        })
        .catch(error => {
          console.error('There was an error adding the product!', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={product.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={product.price} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" value={product.description} onChange={handleChange} />
      </div>
      <button type="submit">{product.id ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
}

export default ProductForm;
