import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "../redux/imagesSlice";

export const store = configureStore({
  reducer: { imageReducer },
});
