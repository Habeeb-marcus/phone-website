import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css'
import imgFoot from './../../images/logo.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-brand-svg-icons'
// import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brand-svg-icons'






function Footer() {

    return (
        <div className="footer-cont">
            {/* top footer */}
            <div className="top-footer">
                <div className="top-main">
                    <img src={imgFoot} alt="logo"/>
                    <p>Looking for job and like what you see? check out our <NavLink to="/">open positions!</NavLink> </p>
                </div>
            </div>
            <hr/>

            {/* bottom footer */}
            <div className="bottom-footer">
                <p>©2020  is a registered trademark of WebToGo GmbH I Data Privacy I Imprint</p>
                <ul class="social">
                    <li>
                        <NavLink target="_blank" to="https://www.facebook.com/myhandycheck">
                            {/* <FontAwesomeIcon icon={faTwitter}/> */}
                            {/* <FontAwesomeIcon icon={faFacebook}/> */}
                            {/* <FontAwesomeIcon icon={faInstagram}/> */}
                            {/* <FontAwesomeIcon icon={faLinkedin}/> */}
                            <FontAwesomeIcon icon={['fab', 'twitter']} />

                        </NavLink>
                    </li>
                    {/* <li class="facebook"><NavLink target="_blank" to="https://www.facebook.com/myhandycheck" title="Facebook"><FontAwesomeIcon class="icon-facebook"></FontAwesomeIcon></NavLink></li>
                    <li class="twitter"><a target="_blank" href="https://twitter.com/myhandycheck" title="Twitter"><i class="icon-twitter"></i></a></li>
                    <li class="linkedin"><a target="_blank" href="https://www.linkedin.com/company/myhandycheck/" title="LinkedIn"><i class="icon-linkedin"></i></a></li>
                    <li class="instagram"><a target="_blank" href="https://www.instagram.com/myhandycheck/" title="Instagram"><i class="icon-instagram"></i></a></li> */}
                </ul>
            </div>
        </div>
    )


}

export default Footer