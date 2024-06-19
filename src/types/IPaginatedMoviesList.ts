import {IMoviesListCard} from "../SCRAP/getAllMovieModel";

export interface IPaginatedMoviesList{
    page: number,
    results: IMoviesListCard[],
    total_pages: number,
    total_results: number
}