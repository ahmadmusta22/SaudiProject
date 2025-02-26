import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]); // Changed vendors to products
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate();
  const params = useParams();

  const categoryId = params.id; // Extract category ID
  console.log('Category ID:', categoryId);

  // Static fallback data
  const staticProducts = [
    { id: 1, name: 'Product One', contactInfo: '123-456-7890' }, // Updated vendor to product
    { id: 2, name: 'Product Two', contactInfo: '987-654-3210' }, // Updated vendor to product
    { id: 3, name: 'Product Three', contactInfo: '456-123-7890' }, // Updated vendor to product
  ];

  useEffect(() => {
    const fetchProducts = async () => { // Changed vendors to products
      try {
        setError(null); // Reset error before fetching
        const response = await axios.get(
          `http://localhost:8080/api/products/category/${categoryId}` // API path updated to products
        );
        if (response.data && response.data.length > 0) {
          setProducts(response.data); // Changed vendors to products
        } else {
          // Use static data if the backend returns an empty array
          setProducts(staticProducts); // Changed vendors to products
        }
      } catch (err) {
        console.error('Error fetching products:', err); // Error message updated to products
        setError('Failed to load products. Displaying default products.'); // Error message updated to products
        // Use static data in case of an error
        setProducts(staticProducts); // Changed vendors to products
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="container mt-5">
      {/* Breadcrumb Navigation */}
      <nav className="mb-4">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <span className="text-primary cursor-pointer" onClick={() => navigate('/')}>
              Home
            </span>
          </li>
          <li className="breadcrumb-item">
            <span className="text-primary cursor-pointer" onClick={() => navigate('/categories')}>
              Categories
            </span>
          </li>
          <li className="breadcrumb-item active">Products</li> {/* Updated to Products */}
        </ul>
      </nav>

      {/* Page Title */}
      <h1 className="text-center mb-4">Available Products</h1> {/* Updated to Products */}

      {/* Error Handling */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Fallback UI for No Products */}
      {products.length === 0 ? ( // Changed vendors to products
        <p className="text-muted">No products available in this category.</p> // Updated to products
      ) : (
        <div className="row">
          {products.map((product) => ( // Changed vendor to product
            <div
              key={product.id} // Changed vendor to product
              className="col-md-4 mb-4"
              onClick={() => navigate(`/WishList/${product.id}`)} // Updated to Product
              style={{ cursor: 'pointer' }}
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={`/images/products/${product.id}.jpg`} // Updated to products
                  alt={`Image of ${product.name}`} // Updated to product
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5> {/* Updated to product */}
                  <p className="card-text text-muted">{product.contactInfo}</p> {/* Updated to product */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
