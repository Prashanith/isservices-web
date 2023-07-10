import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import ContactForm from "./contactForm/contactForm";
import { Footer } from "./footer/footer";
import IntroComponent from "./introComponent/introComponent";
import Services from "./services/services";

function LandingPage() {

  return (
    <div className="overflow-x-clip">
      <Navbar/>
      <IntroComponent />
      <Services />
      <ContactForm />
      <Footer/>
    </div>
  );
}

export default LandingPage;
