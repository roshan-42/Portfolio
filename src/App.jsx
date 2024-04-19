import React from "react"; //rafce to create functional component
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-cyan-700">
      <Header />
      <Nav />
      {/* <Construction /> */}
      <About />
      {/* <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <Testimonials /> */}
    </div>
  );
};

export default App;
