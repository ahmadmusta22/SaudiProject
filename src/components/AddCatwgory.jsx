import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCategoryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file.');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          imageUrl: reader.result,
        }));
        setError('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.imageUrl) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:8080/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', description: '', imageUrl: '' }); // Reset form
      } else {
        setError(result.error || 'Submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center text-primary mb-4">Add Category</h2>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
              className="form-control"
              required
            />
          </div>

          {/* Description Field */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              id="description"
              className="form-control"
              rows="3"
              required
            />
          </div>

          {/* Image Upload Field */}
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="imageUrl"
              className="form-control"
            />
            {formData.imageUrl && (
              <div className="mt-3 text-center">
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  className="img-thumbnail"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button
              type="submit"
              className={`btn btn-primary ${isSubmitting ? 'disabled' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryForm;
