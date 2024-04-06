import React, { useEffect, useState } from "react";
import { photos } from "../data/data";
import ImageSlider from "./ImageSlider";

const CardImages = () => {
  const [index, setIndex] = useState();
  const [showImage, setShowImage] = useState(false);
  const [images, setImages] = useState([]);
  useEffect(() => setImages(photos));

  const handleImage = (index) => {
    setIndex(index);
    setShowImage(true);
  };
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-[2px] absolute">
        {images.slice(0, 4).map((image, index) => (
          <img
            src={image.imageUrl}
            alt={image.alt}
            key={index}
            onClick={() => handleImage(index)}
            className="w-full h-full object-cover rounded-sm"
          />
        ))}
      </div>
      <div className="bg-red-500 w-full">
        <div className="relative bottom-36 right-40">
          {showImage && <ImageSlider images={images} currentIndex={index} />}
        </div>
      </div>
    </div>
  );
};

export default CardImages;
