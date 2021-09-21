import React, {Component} from "react";
// import {Carousel} from 'react-bootstrap'
// import { Swiper, SwiperSlide } from 'swiper/react'; 
import Slider from "react-slick";
import './Section4.css'
// import 'swiper/css';
import img1 from "../../images/slider/img1.jpeg"
import img2 from "../../images/slider/img2.jpeg"
import img3 from "../../images/slider/img3.jpeg"
import img4 from "../../images/slider/img4.jpeg"

 




 class CarouselContainer extends Component {
  render() {
      
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,

      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <div className="slider-cont">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <img src= {img1} alt= "img1"/>
          </div>
          <div>
            <h3>2</h3>
            <img src= {img2} alt= "img2"/>
          </div>
          <div>
            <h3>3</h3>
            <img src= {img3} alt= "img3"/>
          </div>
          <div>
            <h3>4</h3>
            <img src= {img4} alt= "img4"/>
          </div>
          <div>
            <h3>5</h3>
            <img src= {img2} alt= "img2"/>
          </div>
          <div>
            <h3>6</h3>
            <img src= {img1} alt= "img1"/>
          </div>
        </Slider>
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


export default CarouselContainer