import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch} from "react-redux";
import { setShowImage } from "../redux/imagesSlice";
import './swiper.css'; 

const ImageSlider = ({ images, currentIndex }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed">
      <Swiper modules={[Navigation]} navigation={true} slidesPerView={1} initialSlide={currentIndex} className="md:w-[70vw] w-[90vw] custom-swiper">
        {images.map((image, index) => (
          <SwiperSlide key={index} className="">
            <img src={image.imageUrl} alt="image" className="object-cover md:w-full md:h-[80vh] w-[90vw] h-[40vh] rounded-md" />
            <div onClick={()=> dispatch(setShowImage(false))} className="md:text-xl text-black bg-slate-300 md:w-9 md:h-9 w-6 h-6 rounded-full aspect-square p-3 flex items-center justify-center absolute z-50 top-1 left-1 cursor-pointer hover:bg-slate-400">X</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
