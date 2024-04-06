import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import ImageSlider from "./components/ImageSlider";
import { setShowImage } from "./redux/imagesSlice";

function App() {
  const [images, setImages] = useState();
  const dispatch = useDispatch();
  const image = useSelector((state) => state.imageReducer.image);
  const { index, showImage } = useSelector((state) => state.imageReducer);
  useEffect(() => setImages(image));
  console.log("index", index);

  return (
    <div className="relative">
      <div
        className={`flex justify-center items-center p-3 ${
          showImage ? "blur-sm" : ""
        }`}
      >
        <Card />
      </div>
      <div className="absolute top-16 left-44">
        {showImage && <div>
          <div onClick={()=> dispatch(setShowImage(false))} className="text-xl text-black bg-slate-300 w-9 h-9 rounded-full aspect-square p-3 flex items-center justify-center absolute z-50 top-1 left-1 cursor-pointer hover:bg-slate-400">X</div>
          <ImageSlider images={images} currentIndex={index} />
        </div>}
      </div>
    </div>
  );
}

export default App;
