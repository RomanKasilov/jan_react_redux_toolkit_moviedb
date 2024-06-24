import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieReducer} from "./slices";

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer
    }
})

