import React, { useEffect, useState } from "react";
import HeaderThree from "../components/HeaderFour";
import HeroOne from "../components/HeroOne";
import CounterOne from "../components/CounterOne";
import AboutOne from "../components/AboutOne";
import ServiceAreaOne from "../components/ServiceAreaOne";
import MarqueeOne from "../components/MarqueeOne";
import PortfolioOne from "../components/PortfolioOne";
import ClientAreaOne from "../components/ClientAreaOne";
import PricingPlanOne from "../components/PricingPlanOne";
import TeamAreaOne from "../components/TeamAreaOne";
import CTAAreaOne from "../components/CTAAreaOne";
import TestimonialOne from "../components/TestimonialOne";
import ProcessAreaOne from "../components/ProcessAreaOne";
import FaqAreaOne from "../components/FaqAreaOne";
import BlogAreaOne from "../components/BlogAreaOne";
import FooterAreaOne from "../components/FooterAreaOne";
import SubscribeOne from "../components/SubscribeOne";
import Preloader from "../helper/Preloader";
import AboutThree from "../components/AboutThree";
import PortfolioTwo from "../components/PortfolioTwo";
import ServiceAreaTwo from "../components/ServiceAreaTwo";





const HomePageOne = () => {
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
      <HeaderThree />

      {/* Hero One */}
      <HeroOne />

      {/* Counter One */}

      {/* About One */}
      <AboutOne />
      <ProcessAreaOne />

      {/* Service Area One */}
      <ServiceAreaTwo />

      {/* Marquee One */}

      {/* Portfolio One */}
      <PortfolioTwo />

      {/* Client Area One */}

      {/* Pricing Plan One */}

      {/* Team Area One */}

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}

      {/* Process Area One */}
      <BlogAreaOne />

      {/* Faq Area One */}
      <FaqAreaOne />

      {/* Blog Area One */}
      <TestimonialOne />


      {/* Subscribe One */}

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default HomePageOne;
