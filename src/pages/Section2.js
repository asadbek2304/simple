import React from "react";
import Card from "../components/Card";
import img from "../assets/img/design.svg";
import cube from '../assets/img/cube.png';
import layer from '../assets/img/layer.png';
import portfolio from '../assets/img/portfolio.png';
import bg from '../assets/img/Bloobs.png'

const Section1 = () => {
  return (
    <div id={2} className="section">
      <img src={bg} alt="bg" className="background background2" />
      <div className="section__center">
        <h4 className="titr2">Our Services</h4>
        <h1 className="title">Why People Choose Us</h1>
        <div className="boxes">
          <Card
            img={img}
            title="Design"
            desc="a plan or drawing produced to show the look and function"
            />
          <Card
          img={cube}
            title="Development"
            desc="Development is defined as the process of growth or new "
          />
          <Card
          img={portfolio}
            title="Branding"
            desc="The marketing practice of creating a name, symbol or "
          />
          <Card
          img={layer}
            title="Illustration"
            desc="An illustration is a decoration, interpretation or visual"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
