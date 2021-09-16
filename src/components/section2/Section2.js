import React from "react";
import "./Section2.css"
import mac from "../../images/mac.png";
import macbook from "../../images/macbook2.png"
import iphone from "../../images/iphones.png"
import iwatch from "../../images/Apple Watch.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


const Section2 = () => {
    return (

        <div>
            <div className="sect2-cont">
                <div className="top-wrapper">
                    <h3>Sell Your Old Devices and Upgrade Now!</h3>
                    <h2>Choose a Device</h2>
                </div>

                <div className="category">
                    <div className="category-main">
                        {/* card */}
                        {/* <div className="card-cont"> */}
                        <div className="card">
                                <div className="card-top">
                                    <h3>iMac</h3> 
                                    <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-right"/>
                                </div>
                                <div className="img-cont"><img src= {mac} alt="iMac"/></div>
                            {/* </div> */}
                        </div>

                         <div className="card">
                             <div className="card-top">
                                <h3>MacBook</h3>
                                <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-right"/>
                            </div>

                            <div className="img-cont"><img src= {macbook} alt="macbook"/></div>                          
                        </div>

                         <div className="card">
                             <div className="card-top">
                            <h3>iPhone</h3>
                            <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-right"/>
                            </div>
                            <div className="img-cont"><img src={iphone} alt="iphone"/></div>
                        </div>

                         <div className="card">
                             <div className="card-top">
                             <h3>Apple Watch</h3>
                             <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-right"/>
                             </div>
                            <div className="img-cont"><img src={iwatch} alt="iwatch"/></div>                           
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Section2;