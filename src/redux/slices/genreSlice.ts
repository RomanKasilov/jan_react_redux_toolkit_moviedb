import {IGenre} from "../../types/IGenre";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services/genreService";
import {AxiosError, AxiosResponse} from "axios";
import {IGenres} from "../../types/IGenres";
import {ErrorType} from "../../types/ErrorType";

type GenreSliceType = {
    genres: IGenre[],
  genresError: AxiosResponse<ErrorType>  | unknown
}
const initialState: GenreSliceType = {
    genres: [],
    genresError:null
}

const getAll = createAsyncThunk<IGenre[], void>(
    'genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const data = await genreService.getAll()
            return thunkAPI.fulfillWithValue(data.genres)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled,
                (state, action) => {
                    state.genres = action.payload
                }
            )
            .addCase(getAll.rejected,
                (state, action)=>{
                state.genresError = action.payload
                })
    }
})

const {reducer: genreReducer, actions} = genreSlice;
const genreActions = {
    ...actions,
    getAll
}
export {genreReducer, genreActions}