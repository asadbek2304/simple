import React from "react";
import bg from "../assets/img/Bloobs1.png";
import mail from '../assets/img/mail.png';
import brands from '../assets/img/Brands.png';
import Button from '../components/Button';

const Section1 = () => {
  return (
    <div className="section">
      <img src={bg} alt="bg" className="background background6" />
      <div className="section__center">
        <img src={brands} alt="brands" />
        <img src={mail} alt="mail" className="mail" />

        <div className="subscribe">
          <h1 className="title">Subscribe To Our Blog</h1>
          <h6 className="title title-sub">
            A newsletter is a tool used to communicate regularly with your
            subscribers, delivering the information
          </h6>
          <div className="input-group">
              <input type="text" />
              <Button text='subscribe' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
