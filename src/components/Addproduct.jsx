import React, { useState } from 'react';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    modelNumber: '',
    vendorId: '', // Separate vendor ID field
    imageUrl: '', // Image URL will be directly sent as-is
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
          imageUrl: reader.result, // Preview image
        }));
        setError('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, modelNumber, vendorId, imageUrl } = formData;

    // Validate fields
    if (!name || !modelNumber || !vendorId || !imageUrl) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Prepare the JSON payload
    const payload = {
      name,
      modelNumber,
      vendor: {
        id: parseInt(vendorId, 10),
      },
      imageUrl,
    };

    try {
      const response = await fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          modelNumber: '',
          vendorId: '',
          imageUrl: '',
        }); // Reset form
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
    <div className="d-flex min-vh-100 align-items-center justify-content-center bg-light">
      <div className="card p-4 shadow w-50">
        <h1 className="text-center mb-4">Add Product</h1>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
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

          {/* Model Number Field */}
          <div className="mb-3">
            <label htmlFor="modelNumber" className="form-label">Model Number</label>
            <input
              type="text"
              name="modelNumber"
              value={formData.modelNumber}
              onChange={handleChange}
              id="modelNumber"
              className="form-control"
              required
            />
          </div>

          {/* Vendor ID Field */}
          <div className="mb-3">
            <label htmlFor="vendorId" className="form-label">Vendor ID</label>
            <input
              type="number"
              name="vendorId"
              value={formData.vendorId}
              onChange={handleChange}
              id="vendorId"
              className="form-control"
              required
            />
          </div>

          {/* Image Upload Field */}
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="imageUrl"
              className="form-control"
            />
            {formData.imageUrl && (
              <div className="mt-3">
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  className="img-thumbnail"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
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

export default AddProductForm;
