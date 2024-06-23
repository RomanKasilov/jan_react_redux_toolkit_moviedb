import {IPaginatedMoviesList} from "../../types/IPaginatedMoviesList";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";
import {IMovieDetails} from "../../types/IMovieDetails";

interface IMovieSlice {
    movies: IPaginatedMoviesList | null,
    movieInfo: IMovieDetails | null,
    moviesSearchResult: IPaginatedMoviesList | null,
    moviesByGenre:IPaginatedMoviesList | null
}

let initialState: IMovieSlice = {
    movies: null,
    movieInfo: null,
    moviesSearchResult: null,
    moviesByGenre: null
}
const getAll = createAsyncThunk<IPaginatedMoviesList, string>(
    'movieSlice/getAll',
    async (page, thunkAPI) => {
        try {
            const data = await movieService.getAll(page)
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const getById = createAsyncThunk<IMovieDetails, string>(
    'movieSlice/getById',
    async (movieId, thunkAPI) => {
        try {
            const data = await movieService.getById(movieId)
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const getByString = createAsyncThunk<IPaginatedMoviesList, { query: string, page: string }>(
    'movieSlice/getByString',
    async ({query, page}, thunkAPI) => {
        try {
            const data = await movieService.searchByString(query, page)
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const getByGenre = createAsyncThunk<IPaginatedMoviesList, { with_genres: string, page: string }>(
    'movieSlice/getByGenre',
    async ({with_genres, page}, thunkAPI) => {
        try {
            const data = await movieService.getByGenre(with_genres, page)
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled,
                (state, action) => {
                    state.movies = action.payload
                })
            .addCase(getById.fulfilled,
                (state, action) => {
                    state.movieInfo = action.payload
                })
            .addCase(getByString.fulfilled,
                (state, action) => {
                    state.moviesSearchResult = action.payload
                })
            .addCase(getByGenre.fulfilled,
                (state, action) => {
                    state.moviesByGenre = action.payload
                })
    }
})//todo .addMatcher rejected resp
const {reducer: movieReducer, actions} = movieSlice;
const movieActions = {
    ...actions,
    getAll, getById, getByString, getByGenre
}
export {movieReducer, movieActions}