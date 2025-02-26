import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteProduct = () => {
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Fetch products when the component loads
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setMessage('Failed to fetch products.');
            }
        };

        fetchProducts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            await axios.delete(`http://localhost:8080/api/products/${productId}`);
            setMessage('Product deleted successfully!');
            setProductId('');
            // Refresh products list after deletion
            const response = await axios.get('http://localhost:8080/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error deleting product:', error);
            setMessage(error.response?.data?.message || 'Failed to delete product.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container my-5">
            <div className="card p-4 shadow w-50 mx-auto">
                <h2 className="card-title text-center mb-4">Delete Product</h2>
                
                {/* Message Display */}
                {message && (
                    <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'}`} role="alert">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Product ID Input */}
                    <div className="mb-3">
                        <label htmlFor="productId" className="form-label">Product ID:</label>
                        <input
                            type="text"
                            id="productId"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
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
                        {loading ? 'Deleting...' : 'Delete Product'}
                    </button>
                </form>

                {/* Products List */}
                <h3 className="mt-4">Products</h3>
                <ul className="list-group mt-3">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span className="fw-bold">{product.id}</span>: {product.name}
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item">No products available.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DeleteProduct;
