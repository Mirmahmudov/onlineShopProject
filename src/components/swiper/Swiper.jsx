import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MySwiper() {
  return (
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
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="../public/imgs/75huylFjILwQmN7lrs89 1.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../public/imgs/75huylFjILwQmN7lrs89 1.svg" alt="" />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img src="../public/imgs/75huylFjILwQmN7lrs89 1.svg" alt="" />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img src="../public/imgs/75huylFjILwQmN7lrs89 1.svg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default MySwiper;
