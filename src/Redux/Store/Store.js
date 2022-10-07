import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../Reducer/MovieReducer";
import UserReducer from "../Reducer/UserReducer";

export const Store = configureStore({
  reducer: {
    movie: MovieReducer,
    user: UserReducer,
  },
});
