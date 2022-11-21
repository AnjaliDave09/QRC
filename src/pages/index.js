import React from "react"
import Header from "../components/Header"
import QRChome from "../../static/QRChome.jpeg"
import "../../static/scss/CssQrc.css"
import "antd/dist/antd.css"
import { Carousel } from "antd"
import { Button, Form, Input } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import {
  faUserLarge,
  faMoneyBill1,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import Footer from "../Components/Footer"
import CountUp from "react-countup"

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const Home = () => {
  return (
    <div>
      <Header />
      <img className="img" src={QRChome} alt="1"></img>
      <div className="container">
        <div className="vc_custom_margin">
          <div className="container">
            <div className="vc_column_container">
              <div className="theme-title">
                <h2>
                  {" "}
                  <b>QRC Investment Advisors</b>{" "}
                </h2>
              </div>
            </div>

            <p className="home-p">
              <span className="bold">QRC Investment Advisors LLP (QRC)</span> is
              a SEBI registered Portfolio Management Service (PMS) provider
              founded in 2017. Our foremost objective is to execute a successful
              investment strategy for our clients that is agnostic to market
              capitalization and benchmarks. We intend to do this by leveraging
              the founders’ deep expertise and experiences across multiple
              functions within the capital market spanning 45 plus years
              collectively. We believe in a conservative approach that protects
              downside and results in a steady growth of wealth as opposed to
              one that ‘promises’ big returns but comes with significantly
              higher risks which are rarely, if at all ever fully understood.
            </p>
            <p className="home-p">
              The idea of QRC was conceived on Queens Road Central in Hong Kong
              (popularly called QRC). QRC also represents the tenets that form
              the foundational ethos of our firm –
              <span className="bold">Quality, Research & Client Focus.</span>
            </p>
            <p className="home-p">
              <span className="bold">Quality</span> – The most important aspect
              of our investment in a company is the Quality of its business
              along with the integrity and capability of owner-managers who are
              running it. We look businesses which generate solid and consistent
              cash flow and fund growth through internal accruals. We delve into
              the dealings by owner/managers’ with other external stake-holders
              along with how they have built the business to appreciate the key
              intangible qualitative aspects of the business.
            </p>
            <p className="home-p">
              <span className="bold">Research</span> – We follow a thorough and
              diligent Research process to identify quality investment
              opportunities. This includes building a deep understanding of the
              business and its key drivers through our frequent and candid
              discussions with the company’s management, its competitors, its
              customers and vendors. This is in addition to the key quantitative
              metrics such as high returns on capital, low debt on its balance
              sheet etc.
            </p>
            <p className="home-p">
              <span className="bold">Client Focus</span> – Our goal is to
              protect and build our clients’ wealth over the long term. We
              achieve this by preventing permanent loss of capital while taking
              appropriate risks that we understand.
            </p>
            <div className="vc_btn3-container vc_btn3-inline">
              <button
                className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-modern vc_btn3-color-grey .vc_btn3.vc_btn3-shape-rounded"
                href="/investe"
              >
                Privacy Policy & Client Confidentiality
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "30px",
          }}
        >
          <div className="vc_row">
            <div className="vc_column_container">
              <div className="makesUs_special">
                <div className="overlay">
                  <div className="container">
                    <div className="icon-row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="row clear-fix pull-left icon-height">
                          <FontAwesomeIcon icon={faCalendarDays} />
                        </div>
                        <div className="icon-text pull-left">
                          <span className="icon-text-no">
                            <CountUp end={45} duration={5} />
                          </span>
                          <p className="icon-text-dis">Years Of Experience</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="row clear-fix pull-left icon-height">
                          <FontAwesomeIcon icon={faUserLarge} />
                        </div>
                        <div className="icon-text pull-left">
                          <span className="icon-text-no counter">
                            <CountUp end={25} duration={5} />
                          </span>
                          <p className="icon-text-dis">Clients</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="row clear-fix pull-left icon-height">
                          <FontAwesomeIcon icon={faMoneyBill1} />
                        </div>
                        <div className="icon-text pull-left">
                          <span className="icon-text-no">
                            <CountUp end={200} duration={5} />
                          </span>
                          <p className="icon-text-dis">Funds in Millions</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="row clear-fix pull-left icon-height">
                          <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <div className="icon-text pull-left">
                          <span className="icon-text-no">
                            <CountUp end={2} duration={5} />
                          </span>
                          <p className="icon-text-dis">Locations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Carousel autoplay dots={true}>
          <h3 className="carousel carousel-color">
            <div className="container">
              “ We have to practice defensive investing, since many of the
              outcomes are likely to go against us. It’s more important to
              ensure survival under negative outcomes than it is to guarantee
              maximum returns under favorable ones.” ― Howard Marks
            </div>
          </h3>
          <h3 className="carousel carousel-color">
            <div className="container">
              “To make money in stocks, you must have vision to see, courage to
              buy and patience to hold. Patience is the rarest of the three.”
              --Thomas Phelps
            </div>
          </h3>
        </Carousel>
      </div>
      <div className="index-flex">
        <div className="get-touch-width index-width pull-left">
          <div className="content container">
            <div className="theme-title">
              <h2 className="get-touch bold">Get in Touch</h2>
              
            </div>
            <p style={{marginLeft: '46px'}}>
              For Business inquiry please send us an{" "}
              <a class="email text-line" href="mailto:info@qrcia.in">
                {" "}
                email{" "}
              </a>
              and we’ll get in touch shortly.
            </p>
          </div>
        </div>

        <div className="vc_row index-width">
          <div className="clear-fix">
            <div
              className="right-half pull-right"
              style={{ alignItems: "center" }}
            >
              <p>
                <span style={{ color: "white", fontSize:"25px"}}>I would like to discuss:</span>
              </p>
              <Form {...layout} name="control-ref" className="from-input">
                <div className="index-flex">
                  <Form.Item
                    name=""
                    rules={[
                      { required: true, message: "The field is required." },
                    ]}
                  >
                    <Input className="ant-input" placeholder="Your Name" />
                  </Form.Item>
                  <Form.Item
                    name=""
                    rules={[
                      { required: true, message: "The field is required." },
                    ]}
                  >
                    <Input className="ant-input" placeholder="Last Name" />
                  </Form.Item>
                </div>
                <div className="index-flex">
                  <Form.Item
                    name=""
                    rules={[
                      { required: true, message: "The field is required." },
                    ]}
                  >
                    <Input className="ant-input" placeholder="Your Mail" />
                  </Form.Item>
                  <Form.Item
                    name=""
                    rules={[
                      { required: true, message: "The field is required." },
                    ]}
                  >
                    <Input className="ant-input" placeholder="Phone Number" />
                  </Form.Item>
                </div>
                <Form.Item {...tailLayout}>
                  <Button className="wpcf7-submit" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home
