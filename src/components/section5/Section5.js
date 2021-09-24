import React from "react";
import './Section5.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'





function Section5 () {
    return (
        <div className="sect5">
            <div className="sect5-cont">
                <h2>FAQs</h2>
                <div className="qst-wrapper">
                    <div className="question">
                        <div className="title">
                            <span className="num">1</span>
                            <span>How does the App Work?</span>                         
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div className="answer"></div>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Section5;