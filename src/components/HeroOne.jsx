import React from "react";
import { Link } from "react-router-dom";

const HeroOne = () => {
  return (
    <div
      className="hero-wrapper hero-1 "
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/360_F_1048057900_7zJHcz9ijh792hn0jon3FLZIRRWtMf4Y.jpg)"  }}
    >
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-6">
            <div className="hero-style1">
              <span className="sub-title text-white">مسرح النمو</span>
              <h1 className="hero-title text-white">
                {" "}
                <span>
                  <img src="assets/img/hero/hero_shape_1.png" alt="Fixturbo" />
                  فرصه للتقدم
                </span>{" "}
                اغتنم فرصتك في التمثيل 
              </h1>
              <p className="hero-text text-white">
                ابدا مستقبلك المهني مع معهد سين
              </p>
              <div className="btn-group">
                <Link to="/about" className="btn">
                  اعرف عننا
                </Link>
                <Link to="/service" className="btn style-border">
                 خدماتنا
                </Link>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
