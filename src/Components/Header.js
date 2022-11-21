import React, { useState } from "react"
import QRClogo from "../../static/QRClogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "antd/dist/antd.css"
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import "../../static/scss/CssQrc.css"
import { Link } from "gatsby"

const Header = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <>
      <div className="container container-set">
        <img className="logo" src={QRClogo} alt="icon"></img>
        <div className="logo-right">
          <FontAwesomeIcon icon={faEnvelope} className="icon1" />
          <p className="email email-header">info@qrcia.in</p>
          <h1 className="nav_icon">
            <FontAwesomeIcon icon={faLinkedinIn} className="social_icon" />
            <FontAwesomeIcon icon={faTwitter} className="social_icon" />
          </h1>
        </div>
      </div>
      <div className="theme-menu">
        <div className="header-container">
          <nav className="menuzord pull-left">
            <button
              className="hamburger"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }}
            >
              <FontAwesomeIcon icon={faBars} className="social_icon" />
            </button>

            <div
              className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
              }
            >
              <ul>

                <li>
                  <Link
                    title="Home"
                    className="hvr-underline-from-left1 bold"
                    to="/"
                    data-scroll
                    data-options="easing: easeOutQuart"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    title="The Team"
                    className="hvr-underline-from-left1 bold"
                    to="/Team"
                  >
                    THE TEAM
                  </Link>
                </li>
                <li className="dropdown">
                  <button class="dropbtn bold">INVEST WITH US &#8964;</button>
                  <div class="dropdown-content bold">
                    <Link to="/Invest">INVEST WITH US</Link>
                    <Link to="/FAQ">FAQ</Link>
                    <Link
                      target="_blank"
                      href="https://www.qrcia.in/wp-content/uploads/2021/03/Final-Disclosure-document.pdf"
                    >
                      DISCLOSURE DOCUMENT
                    </Link>
                  </div>
                </li>
                <li>
                  <Link
                    title="NEWSLETTER"
                    className="hvr-underline-from-left1 bold"
                    to="/NewSettle"
                  >
                    NEWSLETTER
                  </Link>
                </li>
                <li>
                  <Link
                    title="CLIENT LOGIN"
                    target="_blank"
                    className="hvr-underline-from-left1 bold"
                    to="https://eclientreporting.edelweissassetservices.com/wealthspectrum/app/login"
                  >
                    CLIENT LOGIN
                  </Link>
                </li>
                <li>
                  <Link
                    title="Home"
                    className="hvr-underline-from-left1 bold"
                    to="/Contact"
                  >
                    CONTACT
                  </Link>
                </li>

              <div className="nav_side_content pull-right">
                <div className="search_option open">
                  <button onClick={handleOpen} className="search color1_bg">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      aria-hidden="true"
                    />
                  </button>
                  {open ? (
                    <form
                      class="dropdown-menu"
                      aria-labelledby="searchDropdown"
                    >
                      <input type="text" placeholder="Search..." />
                      <button className="color_bg_white">
                        <FontAwesomeIcon
                          icon={faMagnifyingGlass}
                          aria-hidden="true"
                        />
                      </button>
                    </form>
                  ) : null}
                </div>
              </div>
              </ul>
              
            </div>

            {/* <ul className="menuzord-menu">
              <li>
                <Link
                  title="Home"
                  className="hvr-underline-from-left1 bold"
                  to="/"
                  data-scroll
                  data-options="easing: easeOutQuart"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  title="The Team"
                  className="hvr-underline-from-left1 bold"
                  to="/Team"
                >
                  THE TEAM
                </Link>
              </li>
              <li class="dropdown">
                <button class="dropbtn bold">INVEST WITH US &#8964;</button>
                <div class="dropdown-content bold">
                  <Link to="/Invest">INVEST WITH US</Link>
                  <Link to="/FAQ">FAQ</Link>
                  <Link
                    target="_blank"
                    href="https://www.qrcia.in/wp-content/uploads/2021/03/Final-Disclosure-document.pdf"
                  >
                    DISCLOSURE DOCUMENT
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  title="NEWSLETTER"
                  className="hvr-underline-from-left1 bold"
                  to="/NewSettle"
                >
                  NEWSLETTER
                </Link>
              </li>
              <li>
                <Link
                  title="CLIENT LOGIN"
                  target="_blank"
                  className="hvr-underline-from-left1 bold"
                  to="https://eclientreporting.edelweissassetservices.com/wealthspectrum/app/login"
                >
                  CLIENT LOGIN
                </Link>
              </li>
              <li>
                <Link
                  title="Home"
                  className="hvr-underline-from-left1 bold"
                  to="/Contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul> */}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
