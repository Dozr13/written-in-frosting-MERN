import React, { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "./styles.css";
import "keen-slider/keen-slider.min.css";

const Slider = (props) => {
  const [pause, setPause] = useState(false);
  const timer = useRef();

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide number-slide1'>1</div>
        <div className='keen-slider__slide number-slide2'>2</div>
        <div className='keen-slider__slide number-slide3'>3</div>
        <div className='keen-slider__slide number-slide4'>4</div>
        <div className='keen-slider__slide number-slide5'>5</div>
        <div className='keen-slider__slide number-slide6'>6</div>
      </div>
    </>
  );
};

export default Slider;
