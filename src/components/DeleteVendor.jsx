import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteVendor = () => {
  const [vendors, setVendors] = useState([]);
  const [vendorId, setVendorId] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch vendors when the component loads
  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/vendors');
        setVendors(response.data);
      } catch (error) {
        console.error('Error fetching vendors:', error);
        setMessage('Failed to fetch vendors.');
      }
    };

    fetchVendors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Delete vendor
      await axios.delete(`http://localhost:8080/api/vendors/${vendorId}`);
      setMessage('Vendor deleted successfully!');
      setVendorId('');
      // Refresh vendors list after deletion
      const response = await axios.get('http://localhost:8080/api/vendors');
      setVendors(response.data);
    } catch (error) {
      console.error('Error deleting vendor:', error);
      setMessage(error.response?.data?.message || 'Failed to delete vendor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: '50%' }}>
        <h2 className="text-center text-primary mb-4">Delete Vendor</h2>

        {/* Message Display */}
        {message && (
          <div
            className={`alert ${
              message.includes('success') ? 'alert-success' : 'alert-danger'
            } text-center`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mb-4">
          {/* Vendor ID Input */}
          <div className="mb-3">
            <label htmlFor="vendorId" className="form-label">
              Vendor ID:
            </label>
            <input
              type="text"
              id="vendorId"
              value={vendorId}
              onChange={(e) => setVendorId(e.target.value)}
              className="form-control"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn btn-danger w-100 ${loading ? 'disabled' : ''}`}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete Vendor'}
          </button>
        </form>

        {/* Vendors List */}
        <h3 className="text-primary">Vendors</h3>
        <ul className="list-group mt-3">
          {vendors.length > 0 ? (
            vendors.map((vendor) => (
              <li key={vendor.id} className="list-group-item d-flex justify-content-between">
                <span><strong>{vendor.id}</strong>: {vendor.name}</span>
              </li>
            ))
          ) : (
            <li className="list-group-item text-muted">No vendors available.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DeleteVendor;
