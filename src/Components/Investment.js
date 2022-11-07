import React from "react";
import "../../static/scss/CssQrc.css";

export const Investment = (props) => {
    return (
        <div className="vc_row">
            <div className="container">
                <div className="vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="theme-title">
                            <h4 className="bold"> {props.Investment} </h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}