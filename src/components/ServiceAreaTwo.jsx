import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaTwo = () => {
  return (
    <div className="service-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">خدماتنا </span>
              <h2 className="sec-title">
               خدمتنا المميزه {" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/portfolio/teko1.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                  <img src="assets/img/portfolio/56.webp" alt="nemo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">برامج تدريبه</Link>
                  </h4>
                  <p className="service-card_text">
                    برامج تدريبه مميزه تناسب مع الجميع.{" "}
                  </p>
                </div>
              </div>
              <Link to="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/portfolio/teko1.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                  <img src="assets/img/portfolio/teko1.png" alt="nemo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">film screening </Link>
                  </h4>
                  <p className="service-card_text">
                    public enemy.{" "}
                  </p>
                </div>
              </div>
              <Link to="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/portfolio/teko1.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">سارعوا بالتسجيل الان </Link>
                  </h4>
                  <p className="service-card_text">
                   عدد محددود .{" "}
                  </p>
                </div>
              </div>
              <Link to="/service-details" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaTwo;
