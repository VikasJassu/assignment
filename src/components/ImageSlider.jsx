import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ImageSlider = ({ images, currentIndex }) => {
  console.log(currentIndex);
  return (
    <div className="">
      <Swiper modules={[Navigation]} navigation={true} slidesPerView={1} initialSlide={currentIndex} className="w-[70vw]">
        {images.map((image, index) => (
          <SwiperSlide key={index} className="">
            <img src={image.imageUrl} alt="image" className="object-cover w-full h-[80vh] rounded-md" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
