import {IGenre} from "./IGenre";

export interface IMovieDetails{
    backdrop_path: string,
    budget: number,
    genres:IGenre[],
    id: number,
    origin_country: string[],
    overview: string,
    poster_path: string,
    release_date: string,
    runtime: number,
    title: string,
    vote_average: number,
    vote_count: number
}