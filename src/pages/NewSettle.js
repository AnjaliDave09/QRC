import React from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { NewSettleCard } from "../Components/NewSettleCard"
import Pagination from "react-bootstrap/Pagination"

export default function Newsletters() {
  const NewSettlerContent = [
    {
      header: "QRC Investor Letter 4QFY22",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor, We hope this letter finds you and your loved ones safe and well. It is indeed a relief to hopefully see the end of the pandemic. One of the characteristics of stocks that we buy in the portfolio is what we internally call ‘Quality in a Spot of Bother’ (SoB). These are companies",
    },
    {
      header: "QRC Investor Letter 3QFY22",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor, We hope this letter finds you and your loved ones safe and healthy as we are once again grappling with another (but hopefully the last) major covid wave. Suprajit Engineering Limited (SEL) is one of our larger holdings in the portfolio and one which have now owned for over 3 years. SEL has",
    },
    {
      header: "QRC Investor Letter 2QFY22",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor, We hope this letter finds you and your loved ones safe and healthy. Investing at Lifetime Highs Marico is one of our largest holdings and 2021 marks its 25th year as a listed company. We want to use Marico as an example to highlight the power of long-term investing in a high-quality business",
    },
    {
      header: "QRC Investor Letter – July 2021",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor, We hope this letter finds you and your loved ones safe and healthy. Conservative Does Not Mean Low Returns Off late some people have asked us if we are being too conservative in our investment approach. So, we thought we would use this opportunity to put things in perspective. The way we see",
    },
    {
      header: "QRC Investor Letter – April 2021",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor, We hope this letter finds you and your loved ones safe and healthy. Performance Update For the 2nd Half of FY21 (October 202 to March 2021), the QRC Long Term Opportunities Portfolio (LTOP) was up ~25% on top of the ~26% return delivered in the April to September 2020 period. Consistent and strong",
    },
    {
      header: "QRC Investor Letter – October 2020",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor, We hope this letter finds you and your loved ones safe and healthy. We have witnessed one of the steepest falls and the fastest recovery in the history of global equity markets in these past few months. This time last year, we were looking at the Indian economy on the cusp of a",
    },
    {
      header: "QRC Investor Letter – April 2020",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor,   First and foremost, we hope this letter finds you and your loved ones healthy and well. During the last six months, we have gone from an economy which was just starting to get back on its feet to one that will most likely have no growth or perhaps even de-grow given the",
    },
    {
      header: "QRC Market Musings – March 2020",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor,   Local and global events have resulted in the Nifty and small and mid-market cap indices fall by 18-20% over the last four weeks. This has resulted in a lot of the froth being removed from the market. The deep and swift correction in market has been global with markets everywhere reacting to",
    },
    {
      header: "QRC Investor Letter – October 2019",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor,   Stock Market Update The first half of financial year 2019-20 has been very eventful with India having its fair share of headline grabbing developments. From a resounding re-election of Narendra Modi and BJP to a very uninspiring budget session in parliament followed by backlash from industrialists to a host of economic reforms",
    },
    {
      header: "QRC Market Musings  – Aug 2019",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor,   The past few weeks have been a turbulent time for all market participants. Indian market indices have lost significant ground in July with Nifty down ~5.5% and Small-cap Index down ~11%. Reasons for this sell-off are numerous and varied. These range from higher taxes on the super-rich, higher tax on Foreign Portfolio",
    },
    {
      header: "QRC Investor Letter – April 2019",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor,   Stock Market Update The global markets ended the first quarter of the calendar year 2019 with meaningful gains across most parts of the world. These moves were in stark contrast to the last quarter of 2018 where we witnessed a sharp sell-off particularly in the month of December 18. In our September",
    },
    {
      header: "QRC Letter – October 2018",
      publisher: " Saurabh Shroff",
      details:
        "Dear Investor,   The past few months have been a turbulent time for all  market participants – investors and traders alike. The various Indian market indices are down Stock Market Update The year 2018 has been an eventful period to say the least with several developments that have caused significantly higher volatility in the Indian",
    },
  ]
  return (
    <div>
          
      <Header />
      
        <div className="newsettle-space">
          <div className="container">
          <div className="page-breadcrumb">
          <a>Hello everyone</a>
      </div>
            { NewSettlerContent.map(Item => {
              return (
                <NewSettleCard
                  header={Item.header}
                  publisher={Item.publisher}
                  details={Item.details}
                />
              )
            })}
          </div>
          </div>
      
        <Pagination style={{justifyContent: 'center'}}>
          <Pagination.First />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
      <Footer />
    </div>
  )
}
