import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/image/615px-Food_Network_New_Logo 2.svg";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer__wrapper">
        <div className="footer__box">
          <NavLink className="navbar__logo" to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
          <p>www.company name.com
            <br /><br />
          companyname@gmail.com <br />
          <br />
          Phone: +7 485-118-03-25
          </p>
        </div>

        <div className="footer__box">
            <h2>Home</h2>
            <p>Landingpage <br /><br />
            Documentation <br /><br />
            Referral Program <br /><br />
            UI & UX Design <br /><br />
            Web Design</p>
        </div>

        <div className="footer__box">
            <h2>Menu</h2>
            <p>Landingpage <br /><br />
            Documentation <br /><br />
            Referral Program <br /><br />
            UI & UX Design <br /><br />
            Web Design</p>
        </div>
        <div className="footer__box">
            <h2>Company</h2>
            <p>Landingpage <br /><br />
            Documentation <br /><br />
            Referral Program <br /><br />
            UI & UX Design </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
