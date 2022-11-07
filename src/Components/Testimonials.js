import React from "react";
import "../../static/scss/CssQrc.css";

export const Testimonials = (props) => {
    return (
        <div>
            <div className="feedback_single_client">
                <p>{props.testiDis}</p>
                <div className="author clear_fix">
                    <div className="author_name">
                        <h6 className="bold">{props.titleTesti}
                        <span>{props.testiContent}</span></h6>
                    </div>
                </div>
              </div>
        </div>
    )
}

