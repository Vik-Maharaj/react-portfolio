import React from "react";
import "./style.css";
import ContactForm from "../../components/ContactForm";
import SocialMedia from "../../components/SocialMedia";

function Contact() {
  return (
    <div className="viewFive" id="contact">
      <div className="row contact-row">
        <div className="formDiv" id="contact">
          <h3 className="viewTitle" id="contactTitle">
            GET IN TOUCH
          </h3>

          <hr></hr>

          <ContactForm />
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Contact;