import React from "react";
import arrow from "../assets/img/Vector_2.png";

const Button = ({count, text}) => {
  return (
    <div className="btn">
      <a href="#">
        {count === 1 ?  "Get Started" : text}
       </a>
      <img src={arrow} alt="arrow" />
    </div>
  );
};

export default Button;
