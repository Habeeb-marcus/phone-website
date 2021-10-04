import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Section4.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"



import prof1 from "../../images/slider/prof1.jpg"
// import prof2 from "../../images/slider/prof2.jpg"
// import prof3 from "../../images/slider/prof3.jpg"
import prof4 from "../../images/slider/prof4.jpg"
import img1 from "../../images/slider/img3.jpeg"
import img2 from "../../images/slider/img1.jpeg"


 export default class CarouselContainer extends React.Component {
  render() {

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
       </Slider> */}


        {/* BOOTSTRAP CAROUSEL */}
    <Carousel className="carousel">
        <Carousel.Item className="item pt-3 justify-content-sm-center">
            <img
            className="d-inline-block w-20 align-middle img-slide"
            src={prof1}
            alt="First slide"
            />
            <Carousel.Caption className="caption">
            <h3>Tarun Singh Verma</h3>
            <p>Sold off my phone very easily and got the payment on the spot. Best experience so far.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="item mt-30  pt-3 justify-content-sm-center">
            <img
            className="d-inline-block  w-20 align-middle img-slide"
            src={img2}
            alt="Second slide"
            />

            <Carousel.Caption className="caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="item mt-30  pt-3 justify-content-sm-center">
            <img
            className="d-inline-block  w-20 align-middle img-slide"
            src={prof4}
            alt="Third slide"
            />

            <Carousel.Caption className="caption">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item className="item pt-3 justify-content-sm-center">
            <img
            className="d-inline-block w-20 align-middle img-slide"
            src={img1}
            alt="First slide"
            />
            <Carousel.Caption className="caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>                   


      </div>
    );
  }
}



    