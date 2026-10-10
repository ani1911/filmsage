// src/utils/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null, // For the main movie trailer on Browse page
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    movieDetail: null, // This will store the details for the specific movie page
    detailPageTrailer: null, // This will store the trailer for the specific movie page
    isLoading: false, // General loading state for movie data fetches
    watchlist: [], // Assuming a watchlist
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload; // Used by MainContainer on Browse page
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addMovieDetail: (state, action) => {
      // To store details for MovieDetailPage
      state.movieDetail = action.payload;
    },
    addDetailPageTrailer: (state, action) => {
      // To store trailer for MovieDetailPage
      state.detailPageTrailer = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addMovieToWatchlist: (state, action) => {
      // New: Add to watchlist
      if (!state.watchlist.some((movie) => movie.id === action.payload.id)) {
        state.watchlist.push(action.payload);
      }
    },
    removeMovieFromWatchlist: (state, action) => {
      // New: Remove from watchlist
      state.watchlist = state.watchlist.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addMovieDetail,
  addDetailPageTrailer, // Export new action
  setLoading,
  addMovieToWatchlist, // Export new watchlist actions
  removeMovieFromWatchlist,
} = moviesSlice.actions;
export default moviesSlice.reducer;
