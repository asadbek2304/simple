import React from 'react';
import language from '../assets/img/Language.png'
import logo from '../assets/img/Mirage.png'
import social from '../assets/img/Social.png'
const Footer = () => {
    return (
      <div className="footer">
        <div className="footer__content">
          <div className="footer__content--info">
            <img src={logo} alt="logo" />
            <h4 className="title title-sub">
              560 N Riverview D Ste 658 <br />
              North Carolina DA 598745 USA
            </h4>

            <h4>Follow us on</h4>

            <img src={social} alt="social" />
          </div>
          <div className="footer__content--link">
            <h4 className="link head">Resources</h4>
            <a className="link foo" href="">
              Revisions
            </a>
            <a className="link foo" href="">
              Sheets
            </a>
            <a className="link foo" href="">
              Quiz
            </a>
            <a className="link foo" href="">
              Drill
            </a>
          </div>
          <div className="footer__content--link">
            <h4 className="link head">About</h4>
            <a className="link foo" href="">
              About us
            </a>
            <a className="link foo" href="">
              Partners
            </a>
            <a className="link foo" href="">
              Contact us
            </a>
            <a className="link foo" href="">
              Careers
            </a>
          </div>
          <div className="footer__content--link">
            <h4 className="link head">Helpful link</h4>
            <a className="link foo" href="">
              Mirage
            </a>
            <a className="link foo" href="">
              Solutions
            </a>
            <a className="link foo" href="">
              Industries
            </a>
            <a className="link foo" href="">
              Services
            </a>
          </div>
        </div>
        <div className="footer__sub">
          <div className="footer__sub--content">
            <h4>&copy; All Rights Reserved By Mirage 2020</h4>
            <img src={language} alt="language" />
          </div>
        </div>
      </div>
    );
}

export default Footer
