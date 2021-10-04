import React from "react";
import { NavLink } from "react-router-dom";
import './Form.css';


function Form() {
    return (
        <div className="form-cont">
            <div className="form-main">
                <h3> contact us</h3>
                <form>
                <div className="form-wrapper">
                    <label for="first-name"> First Name (required)</label>
                    <input id="first-name" name="first-name" type="text"  required/>
                </div>
                <div className="form-wrapper">
                    <label for="Last-name"> Last Name (required)</label>
                    <input id="Last-name" name="Last-name" type="text"  required/>
                </div>
                <div className="form-wrapper">
                    <label for="Your-Email"> Your Email (required)</label>
                    <input id="Your-Email" name="Your-Email" type="email"  required/>
                </div>
                <div className="form-wrapper">
                    <label for="Subject"> Subject </label>
                    <input id="Subject" name="Subject" type="text"  required/>
                </div>

                <label for="text" className="message">
                    Your Message
                    <textarea name="text" id="text" cols="40" rows="10"></textarea>
                </label>


                <label className="terms" >
                <input type="checkbox" name="accept-terms"/>
                <span>i have read and accept the 
                    {" "} <NavLink to="/https://www.myhandycheck.com/en/termsandconditions/">terms & conditons</NavLink>  and
                    {" "} <NavLink to="/https://www.webtogo.de/privacy-policy/"> privacy policy</NavLink> </span>
                </label>
                </form>
            </div>


            <div className="details">
                <h3>Headquaters</h3>
            
                <b className="b1">Phoneweb, Nigeria</b> <br/>
                <b>Rosenheimer Str. 139</b> <br/>
                <b>D-8167 Müchen</b> <br/>
                <b>Germany</b> <br/>
                <b>Email: support@phonewewb.com</b> <br/>
            </div>

        </div>
    )
}

export default Form


