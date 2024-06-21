import {apiService} from "./api.service";
import {urls} from "../constans/urls";
import {IPaginatedMoviesList} from "../types/IPaginatedMoviesList";
import {IMovieDetails} from "../types/IMovieDetails";

export interface IMovieSearchParams {
    page: string
}

const movieService =
    {
        getAll: async ({page}: IMovieSearchParams): Promise<IPaginatedMoviesList> => {
            const response = await apiService.get(urls.movies.discoverAll, {params: {page: page}})
            return response.data
        },
        getById:async(movieId:string):Promise<IMovieDetails>=>{
            const response = await apiService.get(urls.movies.byId(movieId))
            return response.data
        }
    }

export {movieService}