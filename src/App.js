import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Tours from "./components/Tours";
import Services from "./components/Services";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </Fragment>
  );
};

export default App;
