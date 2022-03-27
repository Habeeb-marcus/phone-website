import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css'
import imgFoot from './../../images/logo.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brand-svg-icons'


library.add(fab)



function Footer() {

    return (
        <div className="footer-cont">
            {/* top footer */}
            <div className="top-footer">
                <div className="top-main">
                    <img src={imgFoot} alt="logo"/>
                    <p>Looking for job and like what you see? check out our <NavLink  className="post" to="/">open positions!</NavLink> </p>
                    

                </div>
            </div>
            <hr/>

            {/* bottom footer */}
            <div className="bottom-footer">
                <p>©2020  is a registered trademark of WebToGo GmbH I <NavLink className="data" to="/"> Data Privacy </NavLink>   I <NavLink className="data" to="/">Imprint</NavLink></p>
                <ul class="social">
                    <li>
                        <NavLink target="_blank" to="https://www.facebook.com/myhandycheck">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </NavLink>
                    </li>

                       <li>
                        <NavLink target="_blank" to="https://twitter.com/myhandycheck">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </NavLink>
                    </li>

                       <li>
                        <NavLink target="_blank" to="https://www.linkedin.com/company/myhandycheck/">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </NavLink>
                    </li>

                       <li>
                        <NavLink target="_blank" to="https://www.instagram.com/myhandycheck/">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </NavLink>
                    </li>
                
                </ul>
            </div>
        </div>
    )


}

export default Footer