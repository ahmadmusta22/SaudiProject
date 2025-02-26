import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import Nekoo from "../components/Neekoo";
import Cart from "../components/Cart";
import Preloader from "../helper/Preloader";
import Categoriess from "../components/Nemoo";


const   Category = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"category "} />

      {/* Cart */}
      <Categoriess />

      {/* Subscribe One */}
     

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default Category;
