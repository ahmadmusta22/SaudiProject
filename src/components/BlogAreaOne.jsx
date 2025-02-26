import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const BlogAreaOne = () => {
  return (
    <>
      <section className="blog-area-1 space-bottom position-relative">
        <div className="blog-shape-img1 shape-mockup d-lg-block d-none">
          <img
            className="about1-shape-img-1 spin"
            src="assets/img/normal/about_shape1-2.svg"
            alt="Fixturbo"
          />
          <img
            className="about1-shape-img-2 spin2"
            src="assets/img/normal/about_shape1-1.svg"
            alt="Fixturbo"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="title-area text-center">
                <span className="sub-title">اخر مقالتنا </span>
                <h2 className="sec-title">
مقالات فريقنا                </h2>
              </div>
            </div>
          </div>
          <div className="row global-carousel blog-slider slider-shadow">
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={2}
              slidesPerGroup={1}
              speed={1000}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src="assets/img/blog/pexels-photo-4240505.jpeg" alt="Fixturbo" />
                      <div className="blog-date">
                        <Link to="/blog">
                          <span>17</span>Feb
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link to="/blog">
                          <i className="fas fa-user" />
                         عادل امام
                        </Link>
                        <Link to="/blog">
                          <i className="fas fa-comments" />
                         التعليقات (05)
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                        أسرار الأداء التمثيلي: من النص إلى الشخصية الحية

                        </Link>
                      </h3>
                      <Link className="btn style-border3" to="/blog-details">
                        Read More <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="blog-card">
                    <div className="blog-img">
                    <img src="assets/img/blog/pexels-photo-4240505.jpeg" alt="nem9o" />
                      <div className="blog-date">
                        <Link to="/blog">
                          <span>22</span>jan
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link to="/blog">
                          <i className="fas fa-user" />
                          ناصر القصبي
                        </Link>
                        <Link to="/blog">
                          <i className="fas fa-comments" />
                          التعليقات (6)
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                        كيف تصبح ممثلًا ناجحًا؟ خطوات ونصائح من المحترفين

                        </Link>
                      </h3>
                      <Link className="btn style-border3" to="/blog-details">
                        Read More <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="blog-card">
                    <div className="blog-img">
                    <img src="assets/img/blogpexels-photo-4240505.jpeg" alt="nemo" />
                    <div className="blog-date">
                        <Link to="/blog">
                          <span>17</span>Feb
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link to="/blog">
                          <i className="fas fa-user" />
                          By admin
                        </Link>
                        <Link to="/blog">
                          <i className="fas fa-comments" />
                          Comments (05)
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          Dependable Car Repair Solutions Professional Car
                          Repair Services
                        </Link>
                      </h3>
                      <Link className="btn style-border3" to="/blog-details">
                        Read More <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="blog-card">
                    <div className="blog-img">
                    <img src="assets/img/blogpexels-photo-4240505.jpeg" alt="nemo" />
                    <div className="blog-date">
                        <Link to="/blog">
                          <span>19</span>Feb
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link to="/blog">
                          <i className="fas fa-user" />
                          By admin
                        </Link>
                        <Link to="/blog">
                          <i className="fas fa-comments" />
                          Comments (05)
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          Precision Auto WorksSolutions Professional Car Repair
                          Services
                        </Link>
                      </h3>
                      <Link className="btn style-border3" to="/blog-details">
                        Read More <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogAreaOne;
