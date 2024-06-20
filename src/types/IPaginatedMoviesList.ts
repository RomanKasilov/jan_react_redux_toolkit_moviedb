import {IMoviesListCard} from "./IMoviesListCard";


export interface IPaginatedMoviesList{
    page: number,
    results: IMoviesListCard[],
    total_pages: number,
    total_results: number
}