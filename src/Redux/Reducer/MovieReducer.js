import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: null,
  hollywood: null,
  newTo: null,
  original: null,
  trending: null,
  kidsTv: null,
  allMovies: [],
};

const MovieReducer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setDisneyMovies: (state, action) => {
      state.popular = action.payload.popular;
      state.hollywood = action.payload.hollywood;
      state.newTo = action.payload.newTo;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
      state.kidsTv = action.payload.kidsTv;
    },
    setMovies: (state, action) => {
      state.allMovies = action.payload;
    },
  },
});

export const { setDisneyMovies, setMovies } = MovieReducer.actions;

export const selectPopular = (state) => state.movie.popular;
export const selectHollywood = (state) => state.movie.hollywood;
export const selectNewTo = (state) => state.movie.newTo;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
export const selectKidsTv = (state) => state.movie.kidsTv;
export const selectAllMovies = (state) => state.movie.allMovies;

export default MovieReducer.reducer;
