import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
