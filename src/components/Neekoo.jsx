import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function WishList() {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [malfunctions, setMalfunctions] = useState({ items: [] });
  const [malfunctionsList, setMalfunctionsList] = useState([]);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [repairSpeed, setRepairSpeed] = useState(0);
  const [coupon, setCoupon] = useState(""); // User input for coupon
  const [vouchers, setVouchers] = useState([]); // Store fetched vouchers
  const [feedback, setFeedback] = useState({ message: "", type: "" });
  const [totalPrice, setTotalPrice] = useState(0);
  const [nemo, setnemo] = useState([]); // Store fetched vouchers



  const { id } = useParams();
  const navigate = useNavigate();

  // Static fallback malfunctions
  const staticMalfunctions = [
    { id: 1, name: "Battery Issue", repairPrice: 50 },
    { id: 2, name: "Screen Crack", repairPrice: 100 },
    { id: 3, name: "Software Problem", repairPrice: 70 },
    { id: 4, name: "Charging Port Issue", repairPrice: 80 },
  ];

  useEffect(() => {
    const fetchMalfunctions = async () => {
      try {
        const apiUrl = `http://localhost:8080/api/malfunctions/product/${id}`;
        const response = await axios.get(apiUrl);
        setMalfunctionsList(response.data);
      } catch (error) {
        console.error("Failed to fetch malfunctions:", error);
        setMalfunctionsList(staticMalfunctions);
      }
    };
    fetchMalfunctions();
  }, [id ]);

  // Fetch all available vouchers when the component loads
  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/vouchers");
        setVouchers(response.data); // Store fetched vouchers
      } catch (error) {
        console.error("Failed to fetch vouchers:", error);
      }
    };
    fetchVouchers();
  }, []);

  // Handle malfunction selection
  const handleMalfunctionChange = (malfunction) => {
    setMalfunctions((prevMalfunctions) => {
      const isSelected = prevMalfunctions.items.some(
        (item) => item.malfunction.id === malfunction.id
      );

      const updatedItems = isSelected
        ? prevMalfunctions.items.filter((item) => item.malfunction.id !== malfunction.id)
        : [...prevMalfunctions.items, { malfunction }];

      const price = isSelected
        ? totalPrice - malfunction.repairPrice
        : totalPrice + malfunction.repairPrice;

      setTotalPrice(price);

      return { ...prevMalfunctions, items: updatedItems };
    });
  };

  // Handle repair speed selection
  const handleRepairSpeedChange = (e) => {
    const newRepairSpeed = parseInt(e.target.value, 10);
    const speedPriceDifference = newRepairSpeed - repairSpeed;
    setRepairSpeed(newRepairSpeed);
    setTotalPrice(totalPrice + speedPriceDifference);
    
    
  };

  // Apply coupon discount by checking if the entered coupon matches any available vouchers
  const applyCoupon = () => {
    const voucher = vouchers.find((voucher) => voucher.code === coupon);

    if (voucher) {
      const currentDate = new Date();
      const expiry = new Date(voucher.expiryDate);

      if (expiry < currentDate) {
        setFeedback({ message: "Coupon has expired.", type: "error" });
        return;
      }

      // Apply the discount to the total price
      setTotalPrice(totalPrice - voucher.discountAmount);
      setFeedback({ message: `Coupon applied successfully! Discount: $${voucher.discountAmount}`, type: "success" });
    } else {
      setFeedback({ message: "Invalid coupon code.", type: "error" });
    }
  };

  // Validate inputs
  const validateInputs = () => {
    if (!customerName || !address || !phone || !email || !selectedDevice) {
      setFeedback({ message: "Please fill in all required fields.", type: "error" });
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    const formData = {
      customerName,
      address,
      phone,
      email,
      items: malfunctions.items,
      additionalNotes,
      device: selectedDevice,
      repairOption: repairSpeed,
      Voucher_id: coupon,
      amount: totalPrice,
      orderDate: new Date().toISOString().split("T")[0],
      deliveryDate: new Date(new Date().setDate(new Date().getDate() + 3))
        .toISOString()
        .split("T")[0],
    };

    try {
      const response = await axios.post("http://localhost:8080/api/orders", formData);
      if (response.status === 200) {
        setFeedback({ message: "Order submitted successfully!", type: "success" });
        setTimeout(() => navigate(`/Finalform${totalPrice}`), 2000);
      } else {
        setFeedback({ message: "Submission failed. Please try again.", type: "error" });
        setTimeout(() => navigate(`/PaypalPage${totalPrice}`), 2000);

      }
    } catch (error) {
      setFeedback({ message: "Network error. Please try again later.", type: "error" });
      setTimeout(() => navigate(`/PaypalPage/${totalPrice}`), 2000);

    }
  };

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <div className="text-white"></div>
      </div>

      <div className="mt-5">
        {feedback.message && (
          <div
            className={`alert alert-${feedback.type === "success" ? "success" : "danger"}`}
            role="alert"
          >
            {feedback.message}
          </div>
        )}

        <div className="card shadow">
          <div className="card-body">
            <h2 className="display-4 text-black text-center">Reservation Page</h2>

            <form onSubmit={handleSubmit}>
              {/* First Row: Device Model, Malfunctions, Repair Speed */}
              <div className="row pt-4">
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="deviceModel">Device Model</label>
                  <input
                    type="text"
                    id="deviceModel"
                    value={selectedDevice}
                    onChange={(e) => setSelectedDevice(e.target.value)}
                    className="form-control"
                    placeholder="Enter the device model"
                  />
                </div>

                <div className="col-12 col-md-4 mb-3">
                  <label>Malfunctions</label>
                  <div className="form-check">
                    {malfunctionsList.length > 0
                      ? malfunctionsList.map((malfunction) => (
                          <div key={malfunction.id} className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              checked={malfunctions.items.some(
                                (item) => item.malfunction.id === malfunction.id
                              )}
                              onChange={() => handleMalfunctionChange(malfunction)}
                              id={`malfunction-${malfunction.id}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`malfunction-${malfunction.id}`}
                            >
                              {malfunction.name} (${malfunction.repairPrice})
                            </label>
                          </div>
                        ))
                      : staticMalfunctions.map((malfunction) => (
                          <div key={malfunction.id} className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              checked={malfunctions.items.some(
                                (item) => item.malfunction.id === malfunction.id
                              )}
                              onChange={() => handleMalfunctionChange(malfunction)}
                              id={`static-malfunction-${malfunction.id}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`static-malfunction-${malfunction.id}`}
                            >
                              {malfunction.name} (${malfunction.repairPrice})
                            </label>
                          </div>
                        ))}
                  </div>
                </div>

                <div className="col-12 col-md-4 mb-3">
                  <label>Repair Speed</label>
                  <select
                    id="repairSpeed"
                    value={repairSpeed}
                    onChange={handleRepairSpeedChange}
                    className="form-control"
                  >
                    <option value={0}>Standard Repair - $0</option>
                    <option value={5}>Fast Repair - $5</option>
                    <option value={10}>Very Fast Repair - $10</option>
                  </select>
                </div>
              </div>

              {/* Second Row: Additional Notes, Repair Speed, Coupon Code */}
              <div className="row">
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="additionalNotes">Additional Notes</label>
                  <textarea
                    id="additionalNotes"
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    className="form-control"
                    placeholder="Any additional instructions"
                  ></textarea>
                </div>

                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    placeholder="Enter your delivery address"
                  />
                </div>

                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="coupon">Coupon Code</label>
                  <input
                    type="text"
                    id="coupon"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="form-control"
                    placeholder="Enter coupon code"
                  />
                  <button
                    type="button"
                    onClick={applyCoupon}
                    className="btn btn-outline-secondary mt-2"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Third Row: Full Name, Email, Phone */}
              <div className="row">
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="customerName">Full Name</label>
                  <input
                    type="text"
                    id="customerName"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Total Price and Submit */}
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h4>Total Price: ${totalPrice}</h4>
                <button type="submit" className="btn btn-primary mx-auto">
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
