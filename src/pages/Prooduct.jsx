import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import Preloader from "../helper/Preloader";
import Categoriess from "../components/Nemoo";
import Product from "../components/Product";



const   Prooduct = () => {
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
      <Breadcrumb title={"Vendor "} />

      {/* Cart */}
      <Product />

      {/* Subscribe One */}
     

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default Prooduct;
