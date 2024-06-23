import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'
import {FC, PropsWithChildren} from "react";
import {IPaginatedMoviesList} from "../../../types/IPaginatedMoviesList";

interface IProps extends PropsWithChildren {
moviesData:IPaginatedMoviesList
}
const MoviesList:FC<IProps> = ({moviesData}) => {
    return (
        <div className={css.moviesListWrapper}>
            {moviesData && moviesData.results.map(movie =>
                <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};