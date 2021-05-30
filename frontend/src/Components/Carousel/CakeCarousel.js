import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CakeCarousel() {
  return (
    <div className='carousel-wrapper'>
      <Carousel autoPlay={true} interval={2500} infiniteLoop={true}>
        <div className='c-img'>
          <img
            src={`${process.env.PUBLIC_URL + "/img-test/img1.jpg"}`}
            alt='cake test'
          />
        </div>
        <div className='c-img'>
          <img
            src={`${process.env.PUBLIC_URL + "/img-test/img2.jpg"}`}
            alt='cake test'
          />
        </div>
        <div className='c-img'>
          <img
            src={`${process.env.PUBLIC_URL + "/img-test/img3.jpg"}`}
            alt='cake test'
          />
        </div>
        <div className='c-img'>
          <img
            src={`${process.env.PUBLIC_URL + "/img-test/img4.jpg"}`}
            alt='cake test'
          />
        </div>
        <div className='c-img'>
          <img
            src={`${process.env.PUBLIC_URL + "/img-test/img5.jpg"}`}
            alt='cake test'
          />
        </div>
        <div className='c-img'>
          <img
            src={`${process.env.PUBLIC_URL + "/img-test/img6.jpg"}`}
            alt='cake test'
          />
        </div>
        <div className='c-img'>
          <img
            src={`${process.env.PUBLIC_URL + "/img-test/img7.jpg"}`}
            alt='cake test'
          />
        </div>
        <div className='c-img'>
          <img
            src={`${process.env.PUBLIC_URL + "/img-test/img8.jpg"}`}
            alt='cake test'
          />
        </div>
        <div className='c-img'>
          <img
            src={`${process.env.PUBLIC_URL + "/img-test/img9.jpg"}`}
            alt='cake test'
          />
        </div>
      </Carousel>
    </div>
  );
}
