import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer
    }
})

