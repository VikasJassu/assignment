import React, { useEffect, useState } from "react";
import { photos } from "../data/data";
import { useDispatch } from "react-redux";
import { setImage, setIndex, setShowImage } from "../redux/imagesSlice";

const CardImages = () => {
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => setImages(photos));

  const handleImage = (index) => {
    dispatch(setIndex(index));
    dispatch(setShowImage(true));
    dispatch(setImage(images));
  };
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-[2px]">
        {images.slice(0, 4).map((image, index) => (
          <div className="relative">
            <img
              src={image.imageUrl}
              alt={image.alt}
              key={index}
              onClick={() => handleImage(index)}
              className={`w-full h-full object-cover rounded-sm cursor-pointer`}
            />
            {index === 3 && (
              <div
                class="absolute inset-0 bg-slate-800 opacity-80 text-white text-3xl flex items-center justify-center cursor-pointer"
                onClick={() => handleImage(3)}
              >
                +5
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardImages;
