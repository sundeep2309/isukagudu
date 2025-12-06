import React, { lazy, useEffect, useState } from "react";
import HeroSection from "../../modules/HeroSection/HeroSection";
import About from "../../modules/About/About";
import Services from "../../modules/Services/Services";
import WhyUs from "../../modules/WhyUs/WhyUs";
import Schedule from "../../modules/Schedule/Schedule";
import Testimonials from "../../modules/Testimonials/Testimonials";
import CTA from "../../modules/CTA/CTA";
import Footer from "../../modules/Footer/Footer";

const Navigation = lazy(() => import("../../components/Navigation/Navigation"));

const Home = () => {
  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <Navigation scrolled={scroll} />
      <HeroSection />
      <About />
      <Services />
      <WhyUs />
      <Schedule />
      <CTA />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
