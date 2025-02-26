import React, { useState } from 'react';

const AddMal = () => {
  const [formData, setFormData] = useState({
    description: '',
    repairPrice: '',  // Make repairPrice dynamic
    productId: '',    // Product ID to match backend structure
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { description, repairPrice, productId } = formData;

    // Validate fields
    if (!description || !repairPrice || !productId) {
      setError('All fields are required.');
      return;
    }

    // Check if repairPrice is a valid number
    if (isNaN(repairPrice) || parseFloat(repairPrice) <= 0) {
      setError('Repair price must be a valid positive number.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Prepare the JSON payload
    const payload = {
      description,
      repairPrice: parseFloat(repairPrice), // Ensure repairPrice is a valid number
      product: {
        id: parseInt(productId, 10), // Ensure product ID is correctly parsed
      },
    };

    try {
      const response = await fetch('http://localhost:8080/api/malfunctions', {
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
          description: '',
          repairPrice: '',
          productId: '',
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
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg w-50">
        <h1 className="card-title text-center mb-4">Add malfunction form</h1>
        
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          {/* Description Field */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              id="description"
              className="form-control"
              required
            />
          </div>

          {/* Repair Price Field */}
          <div className="mb-3">
            <label htmlFor="repairPrice" className="form-label">
              Repair Price:
            </label>
            <input
              type="number"
              name="repairPrice"
              value={formData.repairPrice}
              onChange={handleChange}
              id="repairPrice"
              className="form-control"
              required
            />
          </div>

          {/* Product ID Field */}
          <div className="mb-3">
            <label htmlFor="productId" className="form-label">
              Product ID:
            </label>
            <input
              type="number"
              name="productId"
              value={formData.productId}
              onChange={handleChange}
              id="productId"
              className="form-control"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className={`btn btn-primary w-100 ${isSubmitting ? 'disabled' : ''}`}
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

export default AddMal;
