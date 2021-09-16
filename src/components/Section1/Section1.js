import React, {useEffect} from "react";
import phone from "../../images/phone-img.png"
import  "./Section1.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section1() {

    useEffect(() => {
        AOS.init({ duration: 2000});
    }, []);
    return (
        <div>
            <section className="section1-cont">
                <div className="section1-main">

                    <div data-aos="fade-up" className="title-cont">
                        <h1> Sell your iphone <br/> or Macbook pro for cash</h1>
                        <p>We will beat any instant offer for your device! Please note all payments will be made within 48hours due to backlogs</p>

                        <div className="sect1-btn">
                            <button className="btn-left">Get Started</button>
                            <button className="btn-right">How it Works?</button>
                        </div>
                    </div>

                    <div data-aos="fade-down" className="img-cnt">
                        <img className="phone-img" src= {phone} alt="phone"/>
                    </div>

                </div>
            </section>
        </div>
    )
}


export default Section1;