import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Vendor = () => {
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate();
  const params = useParams();

  const categoryId = params.id; // Extract category ID
  console.log('Category ID:', categoryId);

  // Static fallback data
  const staticVendors = [
    { id: 1, name: 'Vendor One', contactInfo: '123-456-7890' },
    { id: 2, name: 'Vendor Two', contactInfo: '987-654-3210' },
    { id: 3, name: 'Vendor Three', contactInfo: '456-123-7890' },
  ];

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        setError(null); // Reset error before fetching
        const response = await axios.get(
          `http://localhost:8080/api/vendors/category/${categoryId}`
        );
        if (response.data && response.data.length > 0) {
          setVendors(response.data);
        } else {
          // Use static data if the backend returns an empty array
          setVendors(staticVendors);
        }
      } catch (err) {
        console.error('Error fetching vendors:', err);
        setError('Failed to load vendors. Displaying default vendors.');
        // Use static data in case of an error
        setVendors(staticVendors);
      }
    };

    fetchVendors();
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
          <li className="breadcrumb-item active">Vendors</li>
        </ul>
      </nav>

      {/* Page Title */}
      <h1 className="text-center mb-4">Available Vendors</h1>

      {/* Error Handling */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Fallback UI for No Vendors */}
      {vendors.length === 0 ? (
        <p className="text-muted">No vendors available in this category.</p>
      ) : (
        <div className="row">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="col-md-4 mb-4"
              onClick={() => navigate(`/prooduct/${vendor.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={`/images/vendors/${vendor.id}.jpg`}
                  alt={`Image of ${vendor.name}`}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{vendor.name}</h5>
                  <p className="card-text text-muted">{vendor.contactInfo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vendor;
