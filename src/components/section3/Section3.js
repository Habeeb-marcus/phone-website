import React from "react";
import sellphone1 from "../../images/sellphone2.png"
import sellphone2 from "../../images/sellphone.png"
import sellphone3 from "../../images/sellphone3.png"
import "./Section3.css"

function Section3 () {
    return (
        <div>
            <div className="sect3-cont">
            <article data-aos="fade-right">
                <h3>How  it Works: <br/>  we help you to get money for you used Apple gadgets</h3> 
                <h5>
                    1.	&nbsp; Step 1: Get a Quote
                            Answer a few quick questions about your phone and we’ll give you an instant offer – simple as that. You can get a quote in less than 30 seconds!
                </h5>        
                    
                <h5>
                    2.  &nbsp;  Step 2: Ship Your Phone
                            Ship your phone using the free shipping label provided at checkout. You can track your device online every step of the way.
                        
                </h5>

                <h5>
                    2.  &nbsp;  Step 3: Get Paid
                                Once we receive your order, the device(s) will be tested within our current processing timeline. After verifying and processing the order, we will issue same-day payments via check or PayPal – whichever you prefer.                        
                </h5>
            </article>


            <div className="img-right">
                <div className="sect3-img-cnt" data-aos="fade-left">
                    <img src={sellphone1} alt="cell1"/>
                </div>
            </div>
        </div>


        </div>
    )
}



export default Section3