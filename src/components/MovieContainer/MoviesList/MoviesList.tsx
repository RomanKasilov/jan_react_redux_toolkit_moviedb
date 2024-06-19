import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useAppSelector} from "../../../pages/hooks/redux.hooks";

const MoviesList = () => {
    const {movies} = useAppSelector(state => state.movies);
    return (
        <div>
            {movies && movies.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};