import { configureStore } from "@reduxjs/toolkit";
import marvelReducer from "./reducers";

export default configureStore({
  reducer: {
    marvel: marvelReducer,
  },
});
