import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import './Section4.css'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import prof1 from "../../images/slider/prof1.jpg"
import img2 from "../../images/slider/img2.jpeg"
import img3 from "../../images/slider/img3.jpeg"
import img4 from "../../images/slider/img4.jpeg"

 

// export default class CarouselContainer extends Component{
//     render(){
//   return (
//       <div>
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//     </div>
//   );
//   }
// };




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
                            
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
   
    <div class="carousel-item active">
        <img src="..." alt="..."/>
        <div class="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
        </div>
    </div>

    <div class="carousel-item">
        <img src={prof1} alt="img1"/>
        <div class="carousel-caption d-none d-md-block">
            <h5>Tarun Singh Verma</h5>
            <p>randompidfhpwhef9hwfwpfhwhpohhethe nasj j id f0b 9h9e0rf9wyf</p>
        </div>
    </div>

    <div class="carousel-item">
        <img src="..." alt="..."/>
        <div class="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
        </div>
    </div>
    
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> 


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

    //     <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide>
    //   <SwiperSlide>Slide 4</SwiperSlide>
    //   ...
    // </Swiper>

    // import React, { Component } from "react";



//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
    
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
    
// </div>

//     )
// }

// 
// export default CarouselContainer