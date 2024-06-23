import {apiService} from "./api.service";
import {urls} from "../constans/urls";
import {IPaginatedMoviesList} from "../types/IPaginatedMoviesList";
import {IMovieDetails} from "../types/IMovieDetails";

export interface IMovieSearchParams {
    page: string,
}

const movieService =
    {
        getAll: async ({page}: IMovieSearchParams): Promise<IPaginatedMoviesList> => {
            const response = await apiService.get(urls.movies.discoverAll,
                {params: {page,include_adult:false, language:'en-US'}})
            return response.data
        },
        getById: async (movieId: string): Promise<IMovieDetails> => {
            const response = await apiService.get(urls.movies.byId(movieId))
            return response.data
        },
        searchByString: async (query: string, page:string): Promise<IPaginatedMoviesList> => {
            const response = await apiService.get(urls.movies.searchByString,
                {params: { query ,page , include_adult: false, api_key:'87cbb4ef865cf4a8f04c7d48485b3cae'}})
            return response.data
        }
    }

export {movieService}