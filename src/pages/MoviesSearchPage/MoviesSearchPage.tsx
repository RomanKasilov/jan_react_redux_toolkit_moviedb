import {MoviesList} from "../../components/MovieContainer/MoviesList/MoviesList";
import {Pagination} from "../../components/Pagination/Pagination";
import css from './MoviesSearchPage.module.css'

const MoviesSearchPage = () => {
    return (
        <div  className={css.movieSearchBox}>
            <MoviesList/>
            <Pagination/>
        </div>
    );
};

export {MoviesSearchPage};