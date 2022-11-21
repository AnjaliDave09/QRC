import React from "react"
import "antd/dist/antd.css"
import "../../static/scss/CssQrc.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Components/Header"
import QRCTeam1 from "../../static/QRCTeam1.jpeg"
import QRCTeam3 from "../../static/QRCTeam3.jpeg"
import QRCOurTeam from "../../static/QrcOurTeam.jpeg"
import Footer from "../Components/Footer"
import { OurTeam } from "../Components/OurTeam"
import { Testimonials } from "../Components/Testimonials"


const Team = () => {
  return (
    <div>
      <Header />
      <img className="img" src={QRCTeam1} alt="img"></img>
      <div className="vc_custom_margin">
        <div className="container">
          <div className="vc_column_container">
            <h2>
              <b>About QRC</b>
            </h2>
            <span></span>
            <p>
              <span span className="bold">
                {" "}
                QRC Investment Advisors LLP (QRC){" "}
              </span>
              is a SEBI registered Portfolio Management Service (PMS) provider
              founded in 2017.
           
              Our foremost objective is to execute a successful investment
              strategy for our clients that is agnostic to market capitalization
              and benchmarks. We intend to do this by leveraging the founders’
              deep expertise and experiences across multiple functions within the
              capital market spanning 45 plus years collectively.
            
              QRC represents the tenets that form the foundational ethos of our
              firm –{" "}
              <span span className="bold">
                Quality, Research & Client Focus
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="vc_row">
        <div className="vc_column_container">
          <div className="overlay-team">
            <div className="container">
              <div className="theme-title-center">
                <h2> Our Team.</h2>
                <span></span>
              </div>

              <div className="team-row">
                <div className="team-member">
                  <OurTeam
                    OurTeamImg={QRCOurTeam}
                    OurTeamText='Saurabh Shroff'
                    OurTeamFounder='Co-Founder & Managing Partner'
                    OurTeamDis='Saurabh has thirteen years of experience in institutional equity sales, equity capital markets & corporate finance. Prior to co-founding QRC in 2017, Saurabh worked for 11 years with the Institutional Equity Sales team at DSP Merrill Lynch Limited and Merrill Lynch (Asia-Pacific) based in Mumbai and Hong Kong, respectively. There he advised a variety of global institutions on the Indian stock markets. He has also worked in the Equity Capital Markets & Corporate Finance teams of DSP Merrill Lynch Limited where he was involved with various international public equity transactions as well as advisory assignments. Before that, Saurabh was associated with HDFC Securities Limited where he was a research associate in the pharma sector team and analysed midcap stocks on his own. Saurabh has completed his Chartered Accountancy from ICAI and cleared Chartered Financial Analyst (CFA) Program from the CFA Institute, USA.' />
                  <OurTeam
                    OurTeamImg={QRCTeam3}
                    OurTeamText='Ayaz Motiwala'
                    OurTeamFounder='Co-Founder & Partner'
                    OurTeamDis='Ayaz has twenty five years of experience in equity research and investment management across various funds in India and Asia. At present, he advises Amala Emerging Asia Fund (AEAF)  which is focused on investing in high quality growth companies across Asia. Prior to advising the fund, Ayaz was part of the investment team at Samena Capital, a special situations fund. He also worked at Highbridge Capital Management, Hong Kong as part of the multi-strategy investment team where he managed a fund that invested in India and Asean.  In 2004 Ayaz joined New Vernon Capital in Mumbai which was amongst the first foreign alternate funds to enter India at that time. Prior to this engagement, he worked for five years at Birla Sun Life Asset Management Company Limited managing a few mutual funds and has  also worked for Motilal Oswal Securities as the lead consumer analyst. Ayaz started his professional investing career in 1996 as an analyst with ASK Raymond James. He holds an MBA in Finance from the Institute for Technology & Management.' />

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="vc_custom">
        
        <div className="container">
        <div className="theme-title ">
          <h2 className="bold">Testimonials</h2>
        </div>
          <div className="feedback-wrapper">

            <div className="team_vc_row">

              <Testimonials
                testiDis='I’ve seen Saurabh’s evolution from a keen learner to a natural leader of our equities franchise over the 12+ Years we worked together. Saurabh’s extensive experience of tending to long term institutional thought patterns, coupled with an instinctive understanding of balance sheets provides a sound base for structural and logical decision making. Having witnessed multiple (and historic) market cycles on the institutional stage has made him adept to striking a balance between emotion and passion through market booms and busts'
                titleTesti='Nozer Shroff'
                testiContent=' - Head of India Equities, DSP Merrill Lynch' />
              <Testimonials
                testiDis='Saurabh is one of the most talented people I have met. Extremely articulate, original thinker and industrious; but above all he possess a quality rare in today’s world – integrity! I have worked with Saurabh for over a decade and his ability to identify investment opportunities across asset classes & global markets is something to admire. His investment ethos is immersed in the philosophy of capital preservation first, and then work towards risk adjusted returns. Not only does he care about his own hard earned money but more when it comes to managing his clients’ wealth.'
                titleTesti='Manish Prasad '
                testiContent=' - Head of Equities at JM Financial & Ex-MD and Head of Sales at DSP Merrill Lynch' />

            </div>
            <div className="team_vc_row">
              <Testimonials
                testiDis='I have worked with Saurabh for over a decade and continue to do so. He has extensive local Indian expertise and highly knowledgeable of global macro making him very versatile to work with. Saurabh is exceptional at finding winning sustainable long term businesses and his analysis and understanding is deep. Very fortunate to have a contact such as Saurabh.'
                titleTesti='David Park '
                testiContent=' - Fund Manager at Carmignac Gestion' />
              <Testimonials
                testiDis='I’ve known Saurabh for over a decade now. He’s been an invaluable sounding board for multiple aspects of investing for me…..I think there are many reasons that differentiate him from the herd – he has an extremely curious mind, he is clear about his investment philosophy and is always ready to take the road not taken. To me these are all important attributes that will propel him to become a better and better investor through time.'
                titleTesti='Mihir Sheth'
                testiContent='  - Segantii Capital Management' />
            </div>
            <div className="team_vc_row last_team_row">
              <Testimonials
                testiDis='Apart from being analytically sound, Ayaz is a highly thoughtful investor with an abiding sense of purpose. He has the rare ability to connect “narrative to numbers” with great fluency. Though he is slightly unconventional, Ayaz has a nuanced understanding of tricky issues in portfolio construction and risk mitigation. His considerable humility, willingness to absorb constructive criticism, searing honesty and insatiable desire to learn are not easily matched by his peers. He has greatly expanded his “circle of competence” over time and is an excellent judge of value. He has an impressive professional network. Unsurprisingly, there is a clear consensus within the group, that “Master Mo” is one of the most prodigious and original investment talents of his vintage!'
                titleTesti='Sanjoy Bhattacharyya  '
                testiContent='  - Partner, Fortuna Capital' />
            </div>
          </div>
        </div>


      </div>

      <Footer />
    </div>
  )
}

export default Team
