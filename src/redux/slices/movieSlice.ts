import {IPaginatedMoviesList} from "../../types/IPaginatedMoviesList";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieSearchParams, movieService} from "../../services/movieService";
import axios, {AxiosError} from "axios";

interface IMovieSlice {
    movies: IPaginatedMoviesList | null,

}

let initialState: IMovieSlice = {
    movies: null
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
    }
})
const {reducer: movieReducer, actions} = movieSlice;
const movieActions = {
    ...actions,
    getAll
}
export {movieReducer, movieActions}