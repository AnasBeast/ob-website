// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./carousel.css"
export default function Perso() {

  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >

      <SwiperSlide><img src={require("../assets/images/Bedouihech.jpg")} alt="" className="w-24 h-24 md:h-72 md:w-72" /></SwiperSlide>
      <SwiperSlide><img src={require("../assets/images/ouali.jpg")} alt="" className="w-24 h-24 md:h-72 md:w-72" /></SwiperSlide>
      <SwiperSlide><img src={require("../assets/images/mnakbi.jpg")} alt="" className="w-24 h-24 md:h-72 md:w-72" /></SwiperSlide>
      <SwiperSlide><img src={require("../assets/images/ben_sakhria.jpg")} alt="" className="w-24 h-24 md:h-72 md:w-72" /></SwiperSlide>
      <SwiperSlide><img src={require("../assets/images/perso1.jpg")} alt="" className="w-24 h-24 md:h-72 md:w-72" /></SwiperSlide>
      <SwiperSlide><img src={require("../assets/images/perso2.jpg")} alt="" className="w-24 h-24 md:h-72 md:w-72" /></SwiperSlide>
      <SwiperSlide><img src={require("../assets/images/perso3.jpg")} alt="" className="w-24 h-24 md:h-72 md:w-72" /></SwiperSlide>
      <SwiperSlide><img src={require("../assets/images/perso4.jpg")} alt="" className="w-24 h-24 md:h-72 md:w-72" /></SwiperSlide>
      <SwiperSlide><img src={require("../assets/images/perso5.jpg")} alt="" className="w-24 h-24 md:h-72 md:w-72" /></SwiperSlide>
    </Swiper>
  );
};