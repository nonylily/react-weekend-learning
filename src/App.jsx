import React from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Cta from "./components/cta/Cta";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Cta />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
