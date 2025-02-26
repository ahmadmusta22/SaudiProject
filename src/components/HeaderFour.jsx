import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderFour = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <header className="nav-header header-layout3">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div className="header-links">
                <ul>
                  <li>
                    <i className="fas fa-envelope" />
                    <Link to="mailto:info@example.com">info@example.com</Link>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    حي الفيحاء، الأمير ماجد 3337
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-links ps-0">
                <ul>
                  <li>
                    <div className="social-links">
                      <Link to="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="https://www.instagram.com/">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link to="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="https://www.linkedin.com/">
                        <i className="fab fa-linkedin" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sticky-wrapper ${scroll && "sticky"}`}>
        {/* Main Menu Area */}
        <div className="menu-area">
          <div className="container">
          <div className="row align-items-center justify-content-between flex-row-reverse">
          <div className="col-6  row   ">
                <div className=" col-12  header-logo d-flex  align-items-center justify-content-end  ">
                 
                    <img src="../assets/img/Screenshot 2025-02-16 163422.png" className="w-50  rounded " alt="Fixturbo" />
                 
                </div>
              </div>
              <div className="col-6">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="menu-item-has-children">
                      <Link to="#">الرئسيه</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            الرئسيه
                          </NavLink>
                        </li>

                      
                       
                       
                      
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                       من نحن 
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">خدمتنا</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/service"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            خدمتنا
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                           تفاصيل الخدمات 
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">الكورسات </Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            الكورسات 
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
تفاصيل الكورسات                           </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">المقالات</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            المقالات
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                           تفاصيل المقالات
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">التدريبات</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            المدربين
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            نبذه عن المدربين 
                          </NavLink>
                        </li>
                       
                        
                       
                        
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        تواصل معنا
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
              <div className="col-auto d-xl-block d-none">
                
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-wrapper  ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link to="/">
                <img src="../assets/img/Screenshot 2025-02-16 163422.png" className="w-50  rounded " alt="Fixturbo" />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <ul id="offcanvas-navigation">
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">الرئسيه</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                       الرئسيه
                      </NavLink>
                    </li>
                   
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                  من نحن
                  </NavLink>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">الكورسات</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        كورس اساسيات التمثيل
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        كورس اساسيات التمثيل للمتقدين 

                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                                               كورس اساسيات التمثيل للمحترفين  

                      </NavLink>
                    </li>
                   
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">خدمتنا</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                       التدريب العملي
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                       الكورسات
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">المقالات</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        جميع المقالات
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        تفاصيل المقالات
                      </NavLink>
                    </li>
                  </ul>
                </li>
              
                <li>
                  <NavLink
                    to="/"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                   تواص معانا
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderFour;
