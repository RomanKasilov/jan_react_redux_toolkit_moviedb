import {apiService} from "./api.service";
import {urls} from "../constans";
import {IMovieDetails, IPaginatedMoviesList, IVideoResponse} from "../types";


const movieService =
    {
        getAll: async (page: string): Promise<IPaginatedMoviesList> => {
            const response = await apiService.get(urls.movies.discoverAll,
                {params: {page, include_adult: false, language: 'en-US'}})
            return response.data
        },
        getById: async (movieId: string): Promise<IMovieDetails> => {
            const response = await apiService.get(urls.movies.byId(movieId))
            return response.data
        },
        searchByString: async (query: string, page: string): Promise<IPaginatedMoviesList> => {
            const response = await apiService.get(urls.movies.searchByString,
                {params: {query, page, include_adult: false, language: 'en-US'}})
            return response.data
        },
        getByGenre: async (with_genres: string, page: string): Promise<IPaginatedMoviesList> => {
            const response = await apiService.get(urls.movies.discoverAll,
                {params: {page, with_genres, include_adult: false, language: 'en-US'}})
            return response.data
        },
        getVideos: async (movieId: number): Promise<IVideoResponse> => {
            const response = await apiService.get(urls.movies.getVideo(movieId))
            return response.data
        }
    }

export {movieService}