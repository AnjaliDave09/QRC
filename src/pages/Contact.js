import React from "react";
import Footer from "../Components/Footer";
import Header from "../components/Header";
import '../../static/scss/CssQrc.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="container index-flex index-width">
                <div className="container">
                    <p></p>
                         <div className="vc_custom_margin">
                         <div className="theme_title">
                            <h3 className="contact-h3"> <b>Contact Details</b></h3>
                        </div>
                        <h6 className="contact-office-title bold"> Office Address </h6>
                        <ul className="contact-ul">
                            <li className="footer-li">
                                <span className="footer-span"><FontAwesomeIcon icon={faLocationDot} className='footer_social_icon' />
                                </span>
                                <h6>
                                    4, Capri, 9 Manav Mandir Road
                                    <br />
                                    Mumbai 400006, India
                                </h6>
                            </li>
                            <li className="footer-li">
                                <span className="footer-span">
                                    <FontAwesomeIcon icon={faEnvelope} className='footer_social_icon' />
                                </span>
                                <h6>
                                    Mail us :  info@qrcia.in
                                </h6>
                            </li>
                        </ul>
                        <div>
                            <ul className="social_icon">
                                <li className="contact-li contact-title bold">We Are Social: </li>
                                <li className="contact-li contact-icon-li"><FontAwesomeIcon icon={faTwitter} className='social_icon' /></li>
                                <li className="contact-li contact-icon-li"><FontAwesomeIcon icon={faLinkedinIn} className='social_icon' /></li>
                            </ul>
                        </div>
                         </div>
                       
                   
                </div>
                <div className="container">
                    <p></p>
                    <div className="vc_custom_margin">
                        <div className="clear-fix">
                            <div className="col-lg-8 col-md-7">
                                <div className="theme_title">
                                    <h3 className="contact-h3"> <b>Send Message</b></h3>
                                </div>
                                <div className="vc_row">
                                    <div className="index-flex">
                                    <div>
                                        <form className="send-form">
                                            <input className="contact-form-input" type='text' name='text' placeholder='First Name' required></input>
                                        </form>
                                    </div>
                                    <div></div>
                                    <div>
                                        <form className="send-form">
                                            <input className="contact-form-input" type='text' name='text' placeholder='Last Name' required></input>
                                        </form>
                                    </div>
                                    </div>
                                    
                                    <div className="index-flex">

                                        <div>
                                        <form className="send-form">
                                            <input className="contact-form-input" type='text' name='text' placeholder='Your Mail' required></input>
                                        </form>
                                    </div>

                                    <div>
                                        <form className="send-form">
                                            <input className="contact-form-input" type='text' name='text' placeholder='Phone Number' required></input>
                                        </form>

                                    </div> 
                                    </div>
                                    
                                    <div>
                                        <form>
                                            <textarea className="contact-form-textarea" type='text' name='text' placeholder='Your Message'></textarea>
                                        </form>
                                    </div>
                                </div>
                                <p>
                                    <input type='submit' value="Submit Now" className="contact-form-submit bold"></input>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default Contact