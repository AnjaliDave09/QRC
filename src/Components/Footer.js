import React from "react"
import QRCTransparent from "../../static/QRCTransparent.png";
import "../../static/scss/CssQrc.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>

      <div className="index-flex">
        <div className="container">
          <div className="main-footer">
            <div className="clear-fix">
              <div className="vc_row footer-top">
                <img className="footer-logo" src={QRCTransparent} alt="img1" />
                <p className="footer-p">
                  QRC Investment Advisors LLP (QRC) is a SEBI registered Portfolio
                  Management Service (PMS) provider. We intend to run a market
                  capitalization & benchmark agnostic investment strategy.
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="container">
          <div className="main-footer" >
            <div class=" mb-4 mb-md-0">
              <h5 className="footer-title">Quick Links</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    The Team
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Invest With Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Newsletters
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main-footer">
            <h5 className="footer-title">Subscribe</h5>
            <div className="footer-form">
              <from>
                <p className="footer-p" style={{ color: 'white' }} >
                  By subscribing to our mailing list you will always be update with the latest news from us.
                </p>
                <p>
                  <input className="footer-email" type='email' name='EMAIL' placeholder="Your email address" required />
                </p>
                <p>
                  <input type='submit' className="footer-submit" value="Subscribe"></input>
                </p>
              </from>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="main-footer">
            <h5 className="footer-title"> CONTACT DETAILS </h5>
            <h6 className="footer-title-office bold">Mumbai Office </h6>
            <ul className="main-footer-ul">
              <li className="footer-li">
                <span className="footer-span"><FontAwesomeIcon icon={faLocationDot} className='footer_social_icon' />
                </span>
                <h6 class='text-white'>
                  4, Capri, 9 Manav Mandir Road
                  <br />
                  Mumbai 400006, India
                </h6>
              </li>
              <li className="footer-li">
                <span className="footer-span">
                  <FontAwesomeIcon icon={faEnvelope} className='footer_social_icon' />
                </span>
                <h6 class='text-white'>
                  Mail us :  info@qrcia.in
                </h6>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="index-flex index-space">
        <div>
          <div className="bottom_footer clear_fix">
            <div className="container">
              <p className="pull-left footer-color bold"> © 2021 QRC Investment Advisors. Designed by <a href="https://tangerineorm.com/" className="footer-title-office footer-title-office-head"> TangerineORM </a>
              </p>
            </div>
          </div>
        </div>

     
        <div className="clear_fix bottom_footer">
          <ul className="social_icon pull-right">
            <li className="footer-color"><FontAwesomeIcon icon={faLinkedinIn} className='social_icon' /></li>
            <li className="footer-color"><FontAwesomeIcon icon={faTwitter} className='social_icon' /></li>
          </ul>
        </div>
      </div>

    </footer>
  )
}

export default Footer
