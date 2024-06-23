import {apiService} from "./api.service";
import {urls} from "../constans/urls";
import {IGenre} from "../types/IGenre";
import {IGenres} from "../types/IGenres";

export const genreService = {
  getAll:async ():Promise<IGenres>=> {
     const response = await apiService.get(urls.genres.getAll)
      return response.data
  }
}