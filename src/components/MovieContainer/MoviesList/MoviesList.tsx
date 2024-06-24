import {FC, PropsWithChildren} from "react";

import {MoviesListCard} from "../MoviesListCard";
import {IPaginatedMoviesList} from "../../../types";
import css from './MoviesList.module.css'

interface IProps extends PropsWithChildren {
    moviesData: IPaginatedMoviesList
}

const MoviesList: FC<IProps> = ({moviesData: {results}}) => {

    return (
        <div className={css.moviesListWrapper}>
            {results && results.map(movie => {
                if (movie.backdrop_path && movie.poster_path) {
                    return <MoviesListCard key={movie.id} movie={movie}/>
                }
            })}
        </div>
    );
};

export {MoviesList};