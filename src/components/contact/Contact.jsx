import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="container">
      <div className="contact__wrapper">
        <h2>CONTACT</h2>
        <h3>
          Food Stalls with Persons but also specialized equipment, Skills to
          manage.
        </h3>
        <div className="contact__input">
            <input type="text" placeholder="Enter your message" />
            <div className="send__btn">
            <button>Send</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
