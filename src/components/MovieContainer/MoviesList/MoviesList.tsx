import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useAppSelector} from "../../../hooks/redux.hooks";
import css from './MoviesList.module.css'
const MoviesList = () => {
    const {movies} = useAppSelector(state => state.movies);
    return (
        <div className={css.moviesListWrapper}>
            {movies && movies.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {MoviesList};