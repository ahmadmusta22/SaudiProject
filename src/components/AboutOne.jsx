import { Link } from "react-router-dom";
import React, { useEffect, useState,useContext } from 'react'
import { ProductIdcontext } from "../Contex/TotalpriceContex";


const AboutOne = () => {
  let {Id,SetId}=useContext(ProductIdcontext);
    console.log(Id)
    SetId(4)
    console.log(Id)

  return (
    <div className="about-area-1 space-bottom mt-5">
      
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="about-thumb1 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="/assets/img/normal/hany.webp" alt="Fixturbo" />
              </div>
              <div className="about-img-2">
              <img src="/assets/img/normal/shiko.webp" alt="Fixturbo" className="w-75"/>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-20">
                <span className="sub-title">اعرف عننا</span>
                <h2 className="sec-title">
                 لماذا تختارنا ؟
                </h2>
                <p className="sec-text">
                أختيارك معهد السينما لأنه يوفر لك بيئة إبداعية تجمع بين الدراسة الأكاديمية والتدريب العملي، مما يساعدك على تطوير مهاراتك في صناعة الأفلام وصقل رؤيتك الفنية تحت إشراف محترفين في المجال.








                </p>
              </div>
              <div className="row gy-4 justify-content-xl-between justify-content-end align-items-center flex-row-reverse">
                <div className="col-lg-auto">
                  <div className="about-year-wrap">
                   
                  </div>
                </div>
                <div className="col-xl-auto col-lg-6">
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        يوفر لك بيئة إبداعية تجمع بين الدراسة الأكاديمية والتدريب العملي.
                        </li>
                      <li>
                        <i className="fas fa-check-circle" />يساعدك على تطوير مهاراتك في صناعة الأفلام وصقل رؤيتك الفنية.

                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        يتيح لك التعلم على أيدي محترفين وخبراء في المجال السينمائي.
{" "}
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        يمنحك فرصًا لبناء شبكة علاقات مع صناع الأفلام والمبدعين.






</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="btn-wrap mt-20">
                <Link to="/about" className="btn style2 mt-xl-0 mt-20">
                 قراءة المزيد  <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
