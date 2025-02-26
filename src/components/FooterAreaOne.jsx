import React from "react";
import { Link } from "react-router-dom";

const FooterAreaOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1 mt-5"
      style={{ backgroundImage: "url(../assets/img/bg/footer-bg1-1.png)" }}
    >
      <div className="container mt-5">
        <div className="widget-area">
          <div className="row justify-content-center text-center text-md-start">
            {/* Company Section */}
            <div className="col-sm-6 col-md-4 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Company</h3>
                <ul className="menu" style={{ listStyle: "none", padding: 0, margin: 0 }}>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/team">Team</Link></li>
  <li><Link to="/contact">FAQ</Link></li>
  <li><Link to="/contact">Privacy Policy</Link></li>
</ul>
              </div>
            </div>

            {/* Services Section */}
            <div className="col-sm-6 col-md-4 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Services</h3>
                <ul className="menu">
                  <li><Link to="/">Mechanic Masters</Link></li>
                  <li><Link to="/">Speedy Auto Repair</Link></li>
                  <li><Link to="/">Mobile Car Repair</Link></li>
                  <li><Link to="/">Pro Auto Fix</Link></li>
                  <li><Link to="/">Precision Auto Works</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-sm-6 col-md-4 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact">
                  <p><Link to="tel:888123456765">(+888) 123 456 765</Link></p>
                  <p><Link to="mailto:infoname@mail.com">infoname@mail.com</Link></p>
                  <p>Old City Street, USA <br /> 1212 New York-3500</p>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="col-sm-6 col-md-6 col-xl-auto">
              <div className="widget footer-widget widget-newsletter">
                <h3 className="widget_title">Get In Touch</h3>
                <p className="footer-text">Stay updated with our latest news.</p>
                <form className="newsletter-form d-flex">
                  <input
                    className="form-control me-2"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-wrap mt-4">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center text-center">
            <div className="col-auto">
              <p className="copyright-text">
                © <Link to="#">Fixturbo</Link> 2024 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links d-flex flex-wrap justify-content-center">
                <Link className="mx-2" to="/">Terms & Conditions</Link>
                <Link className="mx-2" to="/">Privacy Policy</Link>
                <Link className="mx-2" to="/">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaOne;
