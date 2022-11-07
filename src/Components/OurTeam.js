import React from "react";
import "../../static/scss/CssQrc.css";
// import QRCOurTeam from "../../static/QRCOurTeam.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const OurTeam = (props) => {
    return (
        <div>
            <div className="img-holder">
                <img width='270' height='240' src={props.OurTeamImg} alt='team2'></img>
            </div>
            <div className='text'>
                {console.log('props::', props)};
                <h5> {props.OurTeamText} </h5>
                <span> {props.OurTeamFounder}</span>
                <p>{props.OurTeamDis} </p>
            </div>

            <h1 className="h1-icon"><FontAwesomeIcon icon={faLinkedinIn} className='team_social_icon fa' />
                <FontAwesomeIcon icon={faTwitter} className='team_social_icon fa' /></h1>
        </div>
    )
}