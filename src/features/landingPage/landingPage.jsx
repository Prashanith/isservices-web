import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import ContactForm from "./contactForm/contactForm";
import { Footer } from "./footer/footer";
import IntroComponent from "./introComponent/introComponent";
import Services from "./services/services";

function LandingPage() {
  const links = [
    { link: "string", label: "Home" },
    { link: "string", label: "Services" },
    { link: "string", label: "Contact" },
    { link: "string", label: "About" },
  ];

  const data = [];

  return (
    <div className="overflow-x-clip">
      <Navbar links={links} />
      <IntroComponent />
      <Services />
      <ContactForm />
      <Footer data={data} />
    </div>
  );
}

export default LandingPage;
