import React from "react";
import v from "../assets/img/Vector_3.png";
const Card = ({ img, title, desc }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="img" />
      </div>
      <h3>{title}</h3>
      <h5>{desc}</h5>

      <a href="#">
        Learn more <img src={v} alt="" />
      </a>
    </div>
  );
};

export default Card;
