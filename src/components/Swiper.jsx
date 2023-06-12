import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function SliderComponent({images}) {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                
                {images.map((image,index)=>(
                    <SwiperSlide key={index}>
                        <img
                            className="h-3/4 md:h-[600px] w-full rounded"
                            src={image}
                            alt="image slide 1"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}