import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import arrow from '../assets/img/Arrow.png'
const Section1 = ({ts, bg, count, first, right, titr, title, description, img}) => {
    return (
      <div id={count} className="section">
        {bg && (
          <img
            className={`background background${count}`}
            src={bg}
            alt="backgroun1"
          />
        )}

        {first && <Navbar />}

        {right ? (
          <div className="section__content">
            <div className="section__content--item">
              <h4 className="titr">{titr}</h4>
              <h1 className="title">{title}</h1>
              <h6 className="title title-sub">{description}</h6>
              <Button count={count} text='Learn more' />
            </div>
            <div className="section__content--item">
              <img src={img} alt="hero" />
            </div>
          </div>
        ) : (
          <div className="section__content">
            <div className="section__content--item">
              <img src={img} alt="hero" />
            </div>
            <div className="section__content--item">
              <h4 className={`${count === 1 ? "titr" : "titr2"}`}>{titr}</h4>
              <h1 className="title">{title}</h1>
              <h6 className="title title-sub">{description}</h6>
              {ts ? (
                <div className="ts">
                  <div className="content">
                    <h4>Jorge Morrison</h4>
                    <h6>North California,USA</h6>
                  </div>
                  <div className="ts button">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              ) : (
                <Button count={count} text='Learn more' />
              )}
            </div>
          </div>
        )}
      </div>
    );
}

export default Section1
