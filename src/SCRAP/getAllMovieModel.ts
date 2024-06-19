    export interface IMoviesListCard  {
    backdrop_path:string,
    id: number,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
    vote_count: number
}
 interface IPaginatedMoviesListCard{
    page: number,
    results: IMoviesListCard[],
    total_pages: number,
    total_results: number
}

