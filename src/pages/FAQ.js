import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import Header from "../components/Header";
import Footer from "../Components/Footer";
import '../../static/scss/CssQrc.css';

const FAQ = () => {
    return (
        <div>
            <Header />
            <div className="container index-inline">
                 <div className="vc_custom_margin">
                    <div className="vc_column_container-desk">
                        <div className="theme-title">
                            <h2> <b>Questions & Answers</b> </h2>
                        </div>
                    </div>
                    <p className="faq-p">
                        QRC Investment Advisors LLP (QRC) is a SEBI registered Portfolio Management Service (PMS) provider. With the founders’ 45+ years of experience and learning across various aspects of the capital markets, we intend to run a market capitalization & benchmark agnostic investment strategy. QRC also represents the tenets that form the foundational ethos of our firm - Quality, Research & Client Focus.
                    </p>
                 </div>

                <div className="container">
                    <div className="faq_panel">
                        <div id="accordion">
                            <Accordion defaultActiveKey="0" flush>
                                <div className="panel">
                                    <Accordion.Item eventKey="0">
                                        <div className="panel-heading">
                                            <Accordion.Header> <span className="bold  panel-heading-display">
                                                What is the minimum amount that one needs to invest to start a Portfolio Management Account?
                                            </span> </Accordion.Header>

                                            <Accordion.Body>
                                                As per SEBI regulations, the Portfolio Manager is allowed to manage portfolios with a minimum size of Rs 50 lakhs as on the date of start of the portfolio.
                                            </Accordion.Body>
                                        </div>

                                    </Accordion.Item>
                                </div>

                                <div className="panel">
                                    <Accordion.Item eventKey="1">
                                        <div className="panel-heading ">
                                            <Accordion.Header>
                                                <span className="bold panel-heading-display">
                                                    Can an NRI invest in Indian equities?
                                                </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                A Non-resident Indian (NRI) can invest directly in Indian equities. All NRIs need a PAN Card before they can invest in India. An NRI investor can either invest through the NRE (only foreign source of funds, fully repatriable at any point in time) or through the NRO account (can invest both foreign and domestic source of funds and is repatriable to the extent of US$1 million in any financial year). NRI needs a PIS number which tracks all transactions in India by the NRI and ensures taxes, as and when applicable, are deducted at source.
                                            </Accordion.Body>
                                        </div>

                                    </Accordion.Item>
                                </div>

                                <div className="panel">
                                    <Accordion.Item eventKey="2">
                                        <div className="panel-heading ">
                                            <Accordion.Header>
                                                <span className="bold panel-heading-display">
                                                    Where do I open the Bank and Demat Account?
                                                </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                For all our clients, we open separate Demat accounts with Edelweiss Broking Limited. The accounts thus opened are managed by a Custodian – Edelweiss Custodial Services Ltd. Per SEBI’s regulations, there is no longer a need to open separate bank accounts for clients. The funds invested in the PMS are parked in the pool account of the PMS provider for efficient execution of transactions. The funds and Demat accounts are managed by the custodian and hence have certain unique features. The trades are electronically settled directly with the exchange, similar to the institutional settlement framework. Your existing retail Demat account cannot be used for Portfolio Management system as it will not have the special functionalities associated with it.
                                            </Accordion.Body>
                                        </div>

                                    </Accordion.Item>
                                </div>

                                <div className="panel">
                                    <Accordion.Item eventKey="3">
                                        <div className="panel-heading ">
                                            <Accordion.Header>
                                                <span className="bold panel-heading-display">
                                                    How does the custody process eliminate the broker risk?
                                                </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Edelweiss is the custodian of client assets through its custodial service. The Demat accounts are held at Edelweiss in the name of the client. The settlement process is such that when the PMS buys, the funds get debited from the pool account and are paid to the exchange directly by Edelweiss custody (and not to the broker, unlike the way it happens in retail transactions) and securities are credited to the client’s Demat account directly from the exchange on pay-out day (and not routed through the broker unlike a retail transaction). Brokerage is paid separately to the broker. The reverse happens during a sell transaction as such, the custody set-up eliminates the broker risk and our clients do not have any monetary risk/exposure to the broker.
                                            </Accordion.Body>
                                        </div>

                                    </Accordion.Item>
                                </div>

                                <div className="panel">
                                    <Accordion.Item eventKey="4">
                                        <div className="panel-heading ">
                                            <Accordion.Header>
                                                <span className="bold panel-heading-display">
                                                    What is the process involved and time taken to set up the account?
                                                </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Once you confirm that you are interested in entrusting us with your long-term equity investments, you will need to provide us with scanned copies of the PAN and Address proof (Passport/Aadhaar/Voter ID) of the proposed account holder(s) and nominee, if any. We will then help you fill out the documents and send across for signatures. It will take 7-10 days to set up the account after completing the documentation and signatures. We share a copy of the documents signed by you for your records, after the account is set up.
                                            </Accordion.Body>
                                        </div>

                                    </Accordion.Item>
                                </div>

                                <div className="panel">
                                    <Accordion.Item eventKey="5">
                                        <div className="panel-heading ">
                                            <Accordion.Header>
                                                <span className="bold panel-heading-display">
                                                    Can I have a joint account and/or nominee?
                                                </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Your demat account can be opened just as you would open it normally as single holder or joint holders with a nominee. For the demat account, you can have more than one nominee specifying the share of each nominee.
                                            </Accordion.Body>
                                        </div>

                                    </Accordion.Item>
                                </div>

                                <div className="panel">
                                    <Accordion.Item eventKey="6">
                                        <div className="panel-heading ">
                                            <Accordion.Header>
                                                <span className="bold panel-heading-display">
                                                    Can I transfer a combination of funds and stocks to the portfolio at the time of starting the portfolio?
                                                </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Once the account is opened, we will send the pool bank account and demat account details to you. You can either send us a cheque or transfer funds to the pool bank account. As per regulations, the funds can come only from a bank account that is in the name of the investor. Securities can be transferred to the demat account. The securities have to necessarily come from a demat account which is in the name of the investor. Along with security transfer, you also need to provide us with the date of acquisition and the cost of acquisition of these securities. Unlisted shares cannot be transferred by you and we retain discretion on not accepting certain securities. This will ensure all future reports are prepared correctly. This is also a requirement as per law.
                                            </Accordion.Body>
                                        </div>

                                    </Accordion.Item>
                                </div>

                                <div className="panel">
                                    <Accordion.Item eventKey="7">
                                        <div className="panel-heading ">
                                            <Accordion.Header>
                                                <span className="bold panel-heading-display">
                                                    Can I add new funds on a regular basis?
                                                </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                You can transfer funds, either through a cheque or a wire transfer, directly into the pool bank account either on ad-hoc basis or as an SIP. Do inform us as and when you do transfer any funds into the bank account so that we can ensure correct and timely reconciliation.
                                            </Accordion.Body>
                                        </div>

                                    </Accordion.Item>
                                </div>

                                <div className="panel">
                                    <Accordion.Item eventKey="8">
                                        <div className="panel-heading ">
                                            <Accordion.Header>
                                                <span className="bold panel-heading-display">
                                                    What information will investors receive on regular basis?
                                                </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Initial Communication sent after account is opened/setup: Demat account opening and setup confirmation Regular communication: Any Fund/Securities transferred by client to the PMS account (inflow/outflow) Quarterly report – Portfolio statement on quarterly basis, generally by 10th working day of following month. Website Login – We provide website login facility for the client to the portal where they can check their latest holdings, transaction, dividend, interest statements etc Audited report with relevant data for India tax filing provided by May each year. This includes details like capital gains, interest, dividends, TDS, securities at cost etc. Under the PMS, the onus of income tax payable on capital gains, dividends, interest etc is on the investor.
                                            </Accordion.Body>
                                        </div>
                                    </Accordion.Item>
                                </div>

                                <div className="panel">
                                    <Accordion.Item eventKey="9">
                                        <div className="panel-heading ">
                                            <Accordion.Header>
                                                <span className="bold panel-heading-display">
                                                    How do I partially withdraw/redeem funds from the portfolio account?
                                                </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Client needs to send email to us from their registered email id. We will process the redemption and send the funds to your personal bank account registered with us for redemption. Partial redemption can be done upto an amount such that after redemption, the balance value of the portfolio should be minimum INR 50 lakhs
                                            </Accordion.Body>
                                        </div>

                                    </Accordion.Item>
                                </div>

                                <div className="panel">
                                    <Accordion.Item eventKey="10">
                                        <div className="panel-heading ">
                                            <Accordion.Header>
                                                <span className="bold panel-heading-display">
                                                    Is the client required to top up his account if the portfolio value falls below the minimum investment amount as provided in the SEBI (Portfolio Managers) Regulations, 2020 as a result of valuation of portfolio?
                                                </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                No
                                            </Accordion.Body>
                                        </div>

                                    </Accordion.Item>
                                </div>

                                <div className="panel">
                                    <Accordion.Item eventKey="11">
                                        <div className="panel-heading ">
                                            <Accordion.Header>
                                                <span className="bold panel-heading-display">
                                                    What is the process and time frame for closing the account?
                                                </span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                To close an account, you need to send us an email from the registered email address. Once received, we will proceed with sale / transfer funds/securities to your personal account. You will receive a final closure report with relevant details/fee calculation by email. Account closing form will have to be signed and submitted to us by the client. Any charges / fees payable will be charged at the time of final settlement/closure. Account closing confirmation will be sent to the client.
                                            </Accordion.Body>
                                        </div>

                                    </Accordion.Item>
                                </div>

                            </Accordion>
                        </div>
                    </div>
                </div> 
                
            </div>

            <Footer />
        </div>
    )
}
export default FAQ 