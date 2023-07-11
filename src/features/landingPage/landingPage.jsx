import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import ContactForm from "./contactForm/contactForm";
import { Footer } from "./footer/footer";
import IntroComponent from "./introComponent/introComponent";
import Services from "./services/services";
import SolarWorks from "./solarworks/solarworks";

function LandingPage() {

  return (
    <div className="overflow-x-clip">
      <Navbar/>
      <IntroComponent />
      <Services />
      <SolarWorks/>
      <ContactForm />
      <Footer/>
    </div>
  );
}

export default LandingPage;
