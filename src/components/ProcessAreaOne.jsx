import React from "react";

const ProcessAreaOne = () => {
  return (
    <section className="process-area-1 space position-relative">
      <div className="portfolio-shape-img shape-mockup d-lg-block d-none">
        <img
          className="about1-shape-img-1 spin"
          src="/assets/img/normal/about_shape1-2.svg"
          alt="Fixturbo"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="/assets/img/normal/about_shape1-1.svg"
          alt="Fixturbo"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">سير العمل </span>
              <h2 className="sec-title">
                افضل الحلول للتمثيل
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-1.svg" alt="Fixturbo" />
              </div>
              <h4 className="process-card-title">التخطيط

              </h4>
              <p className="process-card-text">
              يهدف إلى تطوير المناهج، وتحديث التقنيات، وتعزيز التعاون لتخريج كوادر سينمائية متميزة.

              </p>
            </div>
          </div>
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card process-card-center">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-2.svg" alt="Fixturbo" />
              </div>
              <h4 className="process-card-title">العمل الجاد</h4>
              <p className="process-card-text">
              يعتمد المعهد على التفاني والانضباط في التدريب العملي والدراسة الأكاديمية، مع التركيز على الابتكار والإبداع لإعداد محترفين في صناعة السينما.

              </p>
            </div>
          </div>
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon-1-3.svg" alt="Fixturbo" />
              </div>
              <h4 className="process-card-title">انتاج فنانين</h4>
              <p className="process-card-text">
              يعمل المعهد على صقل المواهب وتنمية الإبداع من خلال التدريب العملي والدراسة الأكاديمية، لإعداد فنانين محترفين قادرين على الإبداع والمنافسة في صناعة السينما.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAreaOne;
