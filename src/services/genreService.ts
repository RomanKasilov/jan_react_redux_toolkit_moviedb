import {apiService} from "./api.service";
import {urls} from "../constans";
import {IGenres} from "../types";

export const genreService = {
    getAll: async (): Promise<IGenres> => {
        const response = await apiService.get(urls.genres.getAll)
        return response.data
    }
}