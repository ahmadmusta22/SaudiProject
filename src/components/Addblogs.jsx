import React, { useState } from 'react';

const AddBlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',         // Blog title
    content: '',       // Blog content
    author: '',        // Author's name
    imageUrl: '',      // Image URL (from Postman or direct link)
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
        // Limit file size to 5MB
        setError('File size must be less than 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          imageUrl: reader.result, // Store image as base64 string for preview
        }));
        setError('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, content, author, imageUrl } = formData;

    // Validate fields
    if (!title || !content || !author || !imageUrl) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Prepare the JSON payload
    const payload = {
      title,
      content,
      author,
      imageUrl, // This will contain either the file URL or a base64 encoded string
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/blogs', {
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
          title: '',
          content: '',
          author: '',
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
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg w-50">
        <h1 className="card-title text-center mb-4">Add Blog</h1>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Title Field */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              id="title"
              className="form-control"
              required
            />
          </div>

          {/* Content Field */}
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content:
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              id="content"
              className="form-control"
              required
            />
          </div>

          {/* Author Field */}
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author:
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              id="author"
              className="form-control"
              required
            />
          </div>

          {/* Image Upload Field */}
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">
              Upload Image:
            </label>
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
                  className="img-fluid w-25 h-25 object-cover rounded"
                />
              </div>
            )}
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

export default AddBlogForm;
