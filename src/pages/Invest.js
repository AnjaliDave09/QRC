import React from "react";
import "../../static/scss/CssQrc.css";
import QRCInvest1 from "../../static/QRCInvest1.jpeg";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Investment } from "../Components/Investment";

const Invest = () => {
    return (
        <div>
            <div>
                <Header />
                <img className='img' src={QRCInvest1} />
                <div className="invest-title">
                    <div className="theme-title line_middle">
                        <h3 className="theme-title-center bold">Our Investment Tenets</h3>
                    </div>
                </div>
                <div className="container">
                <div className="theme-flex">
                <Investment Investment='Business Quality' />
                <Investment Investment='Management Integrity' />
                <Investment Investment='Growth Opportunity' />
                </div>
                <div className="theme-flex">
                
                <Investment Investment='Sense of Value' />
                <Investment Investment='Courage of Conviction' />
                <Investment Investment='Long Term Orientation' />
                </div>
                </div>
              
                <div className="invest-title">
                    <div className="theme-title line_middle">
                        <h3 className="bold">Investment Philosophy & Process</h3>
                    </div>
                </div>
                <div className="container">
                <div className="wpb_content_element">
                    <div>
                        <p>
                            QRC manages a portfolio of high quality listed equities created through a process of fundamental analysis.  Quality of the business for us is the demonstrated ability of a company to grow with consistent business profitability, solid competitive position and a very strong balance sheet. We look to invest in companies that can grow sustainably over the medium to long term with minimal (if any) external capital.  This along with management integrity and their dealings with all stake-holders form the bedrock of our investment process.
                        </p>
                        <p></p>
                        <p>We are <span className="bold">Value Investors in Growth Stocks (VIGS)</span> – that is we are very conscious of the price we pay to purchase that growth. We appreciate that all good companies may not be good investments if bought at inappropriate prices. Our portfolio has variety of stocks viz. a stock available at a discount to our assessed value (where the market is not paying attention to mid/long term potential of the company’s investments) or a stock is substantially cheap in relation to its peer-set or  a stock is statistically cheap on its historical earnings.  In all our stock holdings,  we hope to own the business at a good discount and a reasonably clear path for the value and price gap to converge over time.</p>
                        <p></p>
                        <p>While we are bottom-up investors we respect business cycles and market volatility, we are also cognizant that stock markets at times tend to favor certain stocks/sectors. We attempt to be opportunistic when such situations present themselves rather than being worried of near term quotational loss or harbor the fear of missing out.</p>
                        <p>We act decisively with our capital when better opportunities are available or at times choose to be in cash if that is the best option. Our main objective is to ensure against permanent impairment of capital while acting with conviction and generating solid risk-adjusted returns.</p>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="wpb_content_element">
                    <blockquote>
                        <h6>
                            <span style={{ color: '#00008b', letterSpacing: '2px', fontSize: '24px' }}>At the core of our investment philosophy is our ability and willingness to be invested for the long-term. W</span>
                            <span style={{ color: '#00008b', letterSpacing: '2px', fontSize: '24px' }}>ith the passage of time, information asymmetry will reduce significantly and an investor who can control his behavioral biases will have a higher probability of earning disproportionate gains over time.</span>
                        </h6>
                    </blockquote>
                </div>
                </div>
                
                <div>
                    <Carousel autoplay dots={true}>

                        <h3 className="carousel carousel-color">
                            “ We have to practice defensive investing, since many of the
                            outcomes are likely to go against us. It’s more important to
                            ensure survival under negative outcomes than it is to guarantee
                            maximum returns under favorable ones.” ― Howard Marks
                        </h3>
                        <h3 className="carousel carousel-color">
                            “To make money in stocks, you must have vision to see, courage to
                            buy and patience to hold. Patience is the rarest of the three.”
                            --Thomas Phelps
                        </h3>
                    </Carousel>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Invest