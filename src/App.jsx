import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import ImageSlider from "./components/ImageSlider";

function App() {
  const [images, setImages] = useState();
  const image = useSelector((state) => state.imageReducer.image);
  const { index, showImage } = useSelector((state) => state.imageReducer);
  useEffect(() => setImages(image));
  console.log("index", index);

  return (
    <div className="container mx-auto relative">
      <div
        className={`flex justify-center items-center p-3 ${
          showImage ? "blur-sm" : ""
        }`}
      >
        <Card />
      </div>
      <div className="absolute top-16 left-52 mx-auto">
        {showImage && (
          <div>
            <ImageSlider images={images} currentIndex={index} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
