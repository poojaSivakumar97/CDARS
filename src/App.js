import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Header from "./components/Header";

import Navigation from "./components/Navigation";
import Services from "./components/Services";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Faqs />
      <Contact />
    </React.Fragment>
  );
}

export default App;
