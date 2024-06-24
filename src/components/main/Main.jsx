import React from "react";
import "./index.css";
import rasm from "../../assets/image/CSmJnTefxM 1.svg"

const Main = () => {
  return (
    <section className="container">
      <div className="mk__wrapper">
      <div className="making__wrapper">
        <h2 className="mk__title">Making time a good time by making food the good food.</h2>
        <p className="mk__text">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment,
        </p>
        <div className="making__btn">
            <button className="mk__btn">Order Now</button>
            <button className="mk__btn">Food Details</button>
        </div>
      </div>
      <div className="making__img">
        <img src={rasm} alt="" />
      </div>
      </div>
    </section>
  );
};

export default Main;
