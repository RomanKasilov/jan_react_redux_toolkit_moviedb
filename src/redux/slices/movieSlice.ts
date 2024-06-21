import {IPaginatedMoviesList} from "../../types/IPaginatedMoviesList";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieSearchParams, movieService} from "../../services/movieService";
import {AxiosError} from "axios";
import {IMovieDetails} from "../../types/IMovieDetails";

interface IMovieSlice {
    movies: IPaginatedMoviesList | null,
    movieInfo: IMovieDetails| null
}

let initialState: IMovieSlice = {
    movies: null,
    movieInfo: null
}
const getAll = createAsyncThunk<IPaginatedMoviesList, IMovieSearchParams>(
    'movieSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const data = await movieService.getAll({page: page})
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
    }
})//todo .addMatcher rejected resp
const {reducer: movieReducer, actions} = movieSlice;
const movieActions = {
    ...actions,
    getAll, getById
}
export {movieReducer, movieActions}