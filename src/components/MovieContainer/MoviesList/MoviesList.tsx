import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'
import {FC, PropsWithChildren} from "react";
import {IPaginatedMoviesList} from "../../../types/IPaginatedMoviesList";

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
            })
            }
        </div>
    );
};

export {MoviesList};