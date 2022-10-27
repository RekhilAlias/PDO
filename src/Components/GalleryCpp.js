import React from "react";
import Card1 from "../Media/Images/Gallery/CPP/01.jpg";
import Card2 from "../Media/Images/Gallery/CPP/02.jpg";
import Card3 from "../Media/Images/Gallery/CPP/03.jpg";
import Card4 from "../Media/Images/Gallery/CPP/04.jpg";
import Card5 from "../Media/Images/Gallery/CPP/05.jpg";
import Card6 from "../Media/Images/Gallery/CPP/06.jpg";
import Card7 from "../Media/Images/Gallery/CPP/07.jpg";
import Card8 from "../Media/Images/Gallery/CPP/08.jpg";
import Card9 from "../Media/Images/Gallery/CPP/09.jpg";
import Card10 from "../Media/Images/Gallery/CPP/10.jpg";
import Card11 from "../Media/Images/Gallery/CPP/10.jpg";

import { EffectCreative, Autoplay, FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function GalleryCpp() {
  return (
    <div className="swiper-main">
      <div className="selection-carousel-gallery-head">
        <h1>Gallery</h1>
      </div>

      <Swiper
        effect={"creative"}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".Next-slide",
          prevEl: ".Back-slide",
        }}
        initialSlide={1}
        speed={1000}
        centeredSlides={true}
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, FreeMode, Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Card1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card2}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card3}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card4}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card5}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card6}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card7}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card8}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card9}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card10}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card11}></img>
        </SwiperSlide>
      </Swiper>
      <div className="custom-arrow-component">
        <button className="Next-slide">
          <BsArrowLeftShort color="#ffffff" size="2.5em" />
        </button>
        <button className="Back-slide">
          <BsArrowRightShort color="#ffffff" size="2.5em" />
        </button>
      </div>
    </div>
  );
}

export default GalleryCpp;
