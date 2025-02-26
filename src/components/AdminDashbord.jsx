import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  // State to hold orders data
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orderItems');
        setOrders(response.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);
  console.log("Orders:", orders);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className="shadow-lg text-white p-3 w-25 min-vh-100">
        <h2 className="h4 mb-4 text-black">Admin Actions</h2>
        <ul className="list-unstyled">
          {/* Category Actions Dropdown */}
          <li className="mb-3">
            <div className="dropdown">
              <button
                className="btn btn-link text-black w-100 text-left dropdown-toggle"
                type="button"
                id="categoryDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category Actions
              </button>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                <li>
                  <button
                    onClick={() => navigate("/AddCategoryForm")}
                    className="dropdown-item text-black"
                  >
                    Add Category
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/DeleteCategory")}
                    className="dropdown-item text-black"
                  >
                    Delete Category
                  </button>
                </li>
              </ul>
            </div>
          </li>

          {/* Vendor Actions Dropdown */}
          <li className="mb-3">
            <div className="dropdown">
              <button
                className="btn btn-link text-black w-100 text-left dropdown-toggle"
                type="button"
                id="vendorDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vendor Actions
              </button>
              <ul className="dropdown-menu" aria-labelledby="vendorDropdown">
                <li>
                  <button
                    onClick={() => navigate("/Addvendorr")}
                    className="dropdown-item text-black"
                  >
                    Add Vendor
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/DeleteVendor")}
                    className="dropdown-item text-black"
                  >
                    Delete Vendor
                  </button>
                </li>
              </ul>
            </div>
          </li>

          {/* Product Actions Dropdown */}
          <li className="mb-3">
            <div className="dropdown">
              <button
                className="btn btn-link text-black w-100 text-left dropdown-toggle"
                type="button"
                id="productDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product Actions
              </button>
              <ul className="dropdown-menu" aria-labelledby="productDropdown">
                <li>
                  <button
                    onClick={() => navigate("/AddProductForm")}
                    className="dropdown-item text-black"
                  >
                    Add Product
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/DeleteProduct")}
                    className="dropdown-item text-black"
                  >
                    Delete Product
                  </button>
                </li>
              </ul>
            </div>
          </li>

          {/* Malfunction Actions Dropdown */}
          <li className="mb-3">
            <div className="dropdown">
              <button
                className="btn btn-link text-black w-100 text-left dropdown-toggle"
                type="button"
                id="malfunctionDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Malfunction Actions
              </button>
              <ul className="dropdown-menu" aria-labelledby="malfunctionDropdown">
                <li>
                  <button
                    onClick={() => navigate("/AddProduct")}
                    className="dropdown-item text-black"
                  >
                    Add Malfunction
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/DeleteMalfunction")}
                    className="dropdown-item text-black"
                  >
                    Delete Malfunction
                  </button>
                </li>
              </ul>
            </div>
          </li>

          {/* Blog Actions Dropdown */}
          <li className="mb-3">
            <div className="dropdown">
              <button
                className="btn btn-link text-black w-100 text-left dropdown-toggle"
                type="button"
                id="blogDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog Actions
              </button>
              <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                <li>
                  <button
                    onClick={() => navigate("/AddBlogForm")}
                    className="dropdown-item text-black"
                  >
                    Add Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/DeleteBlog")}
                    className="dropdown-item text-black"
                  >
                    Delete Blog
                  </button>
                </li>
              </ul>
            </div>
          </li>

          {/* Coupon Actions Dropdown */}
          <li className="mb-3">
            <div className="dropdown">
              <button
                className="btn btn-link text-black w-100 text-left dropdown-toggle"
                type="button"
                id="couponDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Coupon Actions
              </button>
              <ul className="dropdown-menu" aria-labelledby="couponDropdown">
                <li>
                  <button
                    onClick={() => navigate("/AddCoupon")}
                    className="dropdown-item text-black"
                  >
                    Add Coupon
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/DeleteCoupon")}
                    className="dropdown-item text-black"
                  >
                    Delete Coupon
                  </button>
                </li>
              </ul>
            </div>
          </li>

          {/* View Order by Name */}
          <li className="mb-3">
            <button
              onClick={() => navigate("/view-order-by-name")}
              className="btn btn-link text-black w-100 text-left"
            >
              View Order by Name
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container-fluid p-4 bg-light">
        <h1 className="h3 mb-4 text-black">Dashboard</h1>

        {loading ? (
          <div className="alert alert-info">Loading orders...</div>
        ) : error ? (
          <div className="alert alert-danger">Error: {error}</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Address</th>
                  <th>Malfunction</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.order.customerName}</td>
                    <td>{order.malfunction.product.name}</td>
                    <td>{order.order.amount}</td>
                    <td>{order.order.address}</td>
                    <td>{order.malfunction.description}</td>
                    <td>{order.order.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
