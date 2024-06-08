import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://techshop.com.br:3000/products';

function ProductList({ onSelectProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(API_URL)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        alert('Product deleted successfully');
        fetchProducts();
      })
      .catch(error => {
        console.error('There was an error deleting the product!', error);
      });
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onSelectProduct(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
