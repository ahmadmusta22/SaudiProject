import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Addvendorr = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    categoryId: '',
    imageUrl: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        setFormData((prev) => ({ ...prev, imageUrl: reader.result }));
        setError('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, contactInfo, categoryId, imageUrl } = formData;

    if (!name || !contactInfo || !categoryId || !imageUrl) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    const payload = {
      name,
      contactInfo,
      category: { id: parseInt(categoryId, 10) },
      imageUrl,
    };

    try {
      const response = await fetch('http://localhost:8080/api/vendors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', contactInfo: '', categoryId: '', imageUrl: '' });
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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 w-50">
        <h1 className="text-center text-primary mb-4">Vendor Form</h1>
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Contact Info Field */}
          <div className="mb-3">
            <label htmlFor="contactInfo" className="form-label">Contact Info:</label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Category ID Field */}
          <div className="mb-3">
            <label htmlFor="categoryId" className="form-label">Category ID:</label>
            <input
              type="number"
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Image Upload Field */}
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">Upload Image:</label>
            <input
              type="file"
              id="imageUrl"
              accept="image/*"
              onChange={handleFileChange}
              className="form-control"
            />
            {formData.imageUrl && (
              <div className="mt-3 text-center">
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  className="img-thumbnail"
                  style={{ maxWidth: '150px', maxHeight: '150px' }}
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn btn-primary w-100 ${isSubmitting ? 'disabled' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addvendorr;
