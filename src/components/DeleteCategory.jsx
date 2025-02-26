import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteCategory = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch categories when the component loads
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setMessage('Failed to fetch categories.');
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await axios.delete(`http://localhost:8080/api/categories/${categoryId}`);
      setMessage('Category deleted successfully!');
      setCategoryId('');
      // Refresh categories after deletion
      const response = await axios.get('http://localhost:8080/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error deleting category:', error);
      setMessage(error.response?.data?.message || 'Failed to delete category.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 w-50 text-center">
        <h2 className="text-center text-danger mb-4">Delete Category</h2>

        {/* Message Display */}
        {message && (
          <div
            className={`alert ${
              message.includes('success') ? 'alert-success' : 'alert-danger'
            }`}
            role="alert"
          >
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label htmlFor="categoryId" className="form-label">
              Category ID:
            </label>
            <input
              type="text"
              id="categoryId"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="form-control"
              placeholder="Enter category ID to delete"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger w-100"
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete Category'}
          </button>
        </form>

        {/* Category List */}
        <h3 className="text-primary">Available Categories</h3>
        <ul className="list-group mt-3">
          {categories.length > 0 ? (
            categories.map((category) => (
              <li key={category.id} className="list-group-item">
                <strong>{category.id}</strong>: {category.name}
              </li>
            ))
          ) : (
            <li className="list-group-item text-muted">No categories available.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DeleteCategory;
