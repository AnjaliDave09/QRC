import React from "react";
import "../../static/scss/CssQrc.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,  faShareNodes} from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

export const NewSettleCard = (props) => {
    return (
        <div>
             
            <div className="blog-post-single ">
            <div class="card">
                <div class="card-body">
                    <h5 className="bold">{props.header}</h5>
                    <div className="fonticon">
                    <ul class='list-unstyled mb-0 flex'>
                        <li className="awsomeicon"> <FontAwesomeIcon icon={faUser} />
                         <span className="fa-text">{props.publisher}</span>
                        </li>
                        <li className="awsomeicon">
                        <FontAwesomeIcon icon={faComment} />
                        <span className="fa-text">0 comment</span> 
                        </li>
                    </ul>
                    </div>
                    <p class="card-text p-text">{props.details}</p>
                    <a href="#" class='readmore'>READ MORE</a>
                    <button className="share">
                    <a className="fa"><FontAwesomeIcon icon={faShareNodes} /></a>
                    </button>
                </div>
            </div>
        </div>
        </div>
       
    )
}