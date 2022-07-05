import { createSlice } from "@reduxjs/toolkit";

export const marvelSlice = createSlice({
  name: "marvel",
  initialState: {
    data: [],
    comicsData: [],
    heroComicData: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setHeroComicData: (state, action) => {
      state.heroComicData = action.payload;
    },
    setComicsData: (state, action) => {
      state.comicsData.push(action.payload);
    },
    clearComicsData: (state, action) => {
      state.comicsData = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, setHeroComicData, setComicsData, clearComicsData } =
  marvelSlice.actions;

export default marvelSlice.reducer;
