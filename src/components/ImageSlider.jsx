import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch} from "react-redux";
import { setShowImage } from "../redux/imagesSlice";

const ImageSlider = ({ images, currentIndex }) => {
  console.log(currentIndex);
  const dispatch = useDispatch();
  return (
    <div className="fixed">
      <Swiper modules={[Navigation]} navigation={true} slidesPerView={1} initialSlide={currentIndex} className="w-[70vw]">
        {images.map((image, index) => (
          <SwiperSlide key={index} className="">
            <img src={image.imageUrl} alt="image" className="object-cover w-full h-[80vh] rounded-md" />
            <div onClick={()=> dispatch(setShowImage(false))} className="text-xl text-black bg-slate-300 w-9 h-9 rounded-full aspect-square p-3 flex items-center justify-center absolute z-50 top-1 left-1 cursor-pointer hover:bg-slate-400">X</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
