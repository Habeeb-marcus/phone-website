import React from "react";
import CarouselContainer from "./CarouselContainer";
// import './Section4.css'


class Section4 extends React.Component {

        render () {
            return (
                <div>
                    <section> 
                        <div className="review-cnt">
                            <div className="review-main">
                                <div className="review-test">
                                    <h2>The Most Trustworthy Trade-In Program</h2>
                                    <p>At Buyback Boss, we strive to provide exceptional experiences to every single customer. Don’t just take our word for it. Buyback Boss has top ratings on third-party review sites. We even caught the attention of some of the nation’s most reputable news sites!</p>
                                </div>
{/* 
                            <div className="review-card">
                                the long width contain 
                                <div className="review-row">
                                    <div className="review-col">
                                        review-card
                                        <div className="review-card">
                                            <div className="card-img">
                                                <img src={img1} alt="image1"/>
                                            </div>
                                            <p className="card-text">

                                            </p>
                        
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                             <CarouselContainer/>                         
                            {/* <MultipleItems/> */}
                            </div>
                        </div>
                    </section>

                </div>

            )


        }
    }



export default Section4