import React from "react";
import "./feature.css";
import rasm from "../../assets/image/Group 1.svg";
import rasm2 from "../../assets/image/Group 2.svg";
import rasm3 from "../../assets/image/Group 3.svg";

const Feature = () => {
  return (
    <section className="container">
      <div className="feature__wrapper">
        <div className="feature__food">
          <h2 className="feat__title">Features</h2>
          <h3 className="feat__text">Food with a New Passion</h3>
        </div>
        <div className="feature__items">
          <div className="feature__box">
            <div className="feature__img">
            <img className="feat__img" src={rasm} alt="" />
            </div>
            <h2>Quality Food</h2>
            <p>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>

          <div className="feature__box">
          <div className="feature__img">
            <img className="feat__img" src={rasm2} alt="" />
            </div>
            <h2>Food Delivery</h2>
            <p>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>

          <div className="feature__box">
          <div className="feature__img">
            <img className="feat__img" src={rasm3} alt="" />
            </div>
            <h2>Super Taste</h2>
            <p>
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
