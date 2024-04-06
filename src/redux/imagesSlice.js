import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: [],
  index: 0,
  showImage: false,
};

const imageSlice = createSlice({
  name: "image",
  initialState: initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setShowImage: (state, action) => {
      state.showImage = action.payload;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setImage , setShowImage, setIndex} = imageSlice.actions;

export default imageSlice.reducer;
