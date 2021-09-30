import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Section4.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"



import prof1 from "../../images/slider/prof1.jpg"
import img2 from "../../images/slider/img2.jpeg"
import img3 from "../../images/slider/img3.jpeg"
import img4 from "../../images/slider/img4.jpeg"


 export default class CarouselContainer extends React.Component {
  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 3
    // };
    return (
      <div>

        {/* <Slider {...settings}>


            <div className="card-main">
                <div className="card-top">
                    <div className="card-img">
                        <img className="image" src={prof1} alt="img1"/>
                    </div>
                    <div className="card-details">
                        <span className="name">Tarun Singh Verma</span>
                        <span className="country">(New Delhi)</span>
                        <div className="icon">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                    </div>
                </div>
                <div className="card-btm">
                    <p>Sold off my phone very easily and got the payment on the spot. Best experience so far.</p>
                    <span className="date">January 25, 2020</span>
                </div>
            </div>



                        <div className="card-main">
                <div className="card-top">
                    <div className="card-img">
                        <img className="image" src={prof1} alt="img1"/>
                    </div>
                    <div className="card-details">
                        <span className="name">Tarun Singh Verma</span>
                        <span className="country">(New Delhi)</span>
                        <div className="icon">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                    </div>
                </div>
                <div className="card-btm">
                    <p>Sold off my phone very easily and got the payment on the spot. Best experience so far.</p>
                    <span className="date">January 25, 2020</span>
                </div>
            </div>


                        <div className="card-main">
                <div className="card-top">
                    <div className="card-img">
                        <img className="image" src={prof1} alt="img1"/>
                    </div>
                    <div className="card-details">
                        <span className="name">Tarun Singh Verma</span>
                        <span className="country">(New Delhi)</span>
                        <div className="icon">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                    </div>
                </div>
                <div className="card-btm">
                    <p>Sold off my phone very easily and got the payment on the spot. Best experience so far.</p>
                    <span className="date">January 25, 2020</span>
                </div>
            </div>


                        <div className="card-main">
                <div className="card-top">
                    <div className="card-img">
                        <img className="image" src={prof1} alt="img1"/>
                    </div>
                    <div className="card-details">
                        <span className="name">Tarun Singh Verma</span>
                        <span className="country">(New Delhi)</span>
                        <div className="icon">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                    </div>
                </div>
                <div className="card-btm">
                    <p>Sold off my phone very easily and got the payment on the spot. Best experience so far.</p>
                    <span className="date">January 25, 2020</span>
                </div>
            </div>


                        <div className="card-main">
                <div className="card-top">
                    <div className="card-img">
                        <img className="image" src={prof1} alt="img1"/>
                    </div>
                    <div className="card-details">
                        <span className="name">Tarun Singh Verma</span>
                        <span className="country">(New Delhi)</span>
                        <div className="icon">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                    </div>
                </div>
                <div className="card-btm">
                    <p>Sold off my phone very easily and got the payment on the spot. Best experience so far.</p>
                    <span className="date">January 25, 2020</span>
                </div>
            </div>


                        <div className="card-main">
                <div className="card-top">
                    <div className="card-img">
                        <img className="image" src={prof1} alt="img1"/>
                    </div>
                    <div className="card-details">
                        <span className="name">Tarun Singh Verma</span>
                        <span className="country">(New Delhi)</span>
                        <div className="icon">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                    </div>
                </div>
                <div className="card-btm">
                    <p>Sold off my phone very easily and got the payment on the spot. Best experience so far.</p>
                    <span className="date">January 25, 2020</span>
                </div>
            </div>
       </Slider> */}


        {/* BOOTSTRAP CAROUSEL */}
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>                   


      </div>
    );
  }
}









// const CarouselContainer = () => {
//     return (
        // <div>
        {/* // <Carousel> */}
        {/* //     <Carousel.Item interval={1000}> */}
        //         <img
        //         className="d-block w-100"
        //         src={img1}
        //         alt="First slide"
        //         />
        //         <Carousel.Caption>
        //         <h3>First slide label</h3>
        //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item interval={500}>
        //         <img
        //         className="d-block w-100"
        //         src={img2}
        //         alt="Second slide"
        //         />
        //         <Carousel.Caption>
        //         <h3>Second slide label</h3>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block w-100"
        //         src={img3}
        //         alt="Third slide"
        //         />
        //         <Carousel.Caption>
        //         <h3>Third slide label</h3>
        //         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>

    