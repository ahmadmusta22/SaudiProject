import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Paypal = () => {
  const { price } = useParams(); // Get the price from the URL params

  const [order, setOrder] = useState({
    price: price || 10, // Default to 10 if price is not provided
    currency: '',
    method: '',
    intent: 'sale',
    description: '',
  });

  useEffect(() => {
    if (price) {
      setOrder((prevOrder) => ({
        ...prevOrder,
        price,
      }));
    }
  }, [price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  

    try {
      // Ensure method is 'paypal'
           const response = await axios.post('http://localhost:9090/api/paypal/pay', order);


      if (response.data.approval_url) {
        window.location.href = response.data.approval_url;
      }
    } catch (error) {
      console.error('Error creating payment:', error);
      alert('Payment creation failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4">Payment</h3>
          <form onSubmit={handleSubmit}>
            {/* Total Price */}
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Total</label>
              <input
                type="text"
                name="price"
                id="price"
                value={order.price}
                onChange={handleChange}
                readOnly
                className="form-control"
              />
            </div>

            {/* Currency */}
            <div className="mb-3">
              <label htmlFor="currency" className="form-label">Currency</label>
              <input
                type="text"
                name="currency"
                id="currency"
                value={order.currency}
                onChange={handleChange}
                placeholder="Enter Currency"
                className="form-control"
              />
            </div>

            {/* Payment Method */}
            <div className="mb-3">
              <label htmlFor="method" className="form-label">Payment Method</label>
              <input
                type="text"
                name="method"
                id="method"
                value="paypal"
                readOnly
                className="form-control"
              />
            </div>

            {/* Intent */}
            <div className="mb-3">
              <label htmlFor="intent" className="form-label">Intent</label>
              <input
                type="text"
                name="intent"
                id="intent"
                value={order.intent}
                onChange={handleChange}
                readOnly
                className="form-control"
              />
            </div>

            {/* Payment Description */}
            <div className="mb-4">
              <label htmlFor="description" className="form-label">Payment Description</label>
              <input
                type="text"
                name="description"
                id="description"
                value={order.description}
                onChange={handleChange}
                placeholder="Payment Description"
                className="form-control"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 pb-4"
            >
              Continue to Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Paypal;
