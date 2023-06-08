import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import slider from "../../../assets/images/slider8.jpg";
import slider1 from "../../../assets/images/slider10.png";
import slider2 from "../../../assets/images/slider9.jpg";
import slider3 from "../../../assets/images/slider4.jpg";
import slider4 from "../../../assets/images/slider5.jpg";
const Slider = () => {
//   const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=" h-[500px] w-full" src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" h-[500px] w-full" src={slider} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" h-[500px] w-full" src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" h-[500px] w-full" src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" h-[500px] w-full" src={slider4} alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg> */}
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
