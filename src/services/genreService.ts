import {apiService} from "./api.service";
import {urls} from "../constans/urls";
import {IGenre} from "../types/IGenre";

export const genreService = {
  getAll:async ():Promise<IGenre[]>=> {
     const response = await apiService.get(urls.genres.getAll)
      return response.data
  }
}