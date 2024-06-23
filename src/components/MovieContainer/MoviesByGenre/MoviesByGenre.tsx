import css from './MoviesByGenre.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux.hooks";
import {useEffect} from "react";
import {movieActions} from "../../../redux/slices/movieSlice";
import {useSearchParams} from "react-router-dom";
import {MoviesList} from "../MoviesList/MoviesList";
import {Pagination} from "../../Pagination/Pagination";

const MoviesByGenre = () => {
    const {moviesByGenre} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const genreId = localStorage.getItem('genre')
    const [searchParams] = useSearchParams();
    useEffect(() => {
        genreId && dispatch(movieActions.getByGenre({with_genres: genreId, page: searchParams.get('page') || '1'}))
    }, [genreId, searchParams]);

    return (moviesByGenre &&
        <div className={css.movieByGenreBox}>
            <MoviesList moviesData={moviesByGenre}/>
            <Pagination movies={moviesByGenre}/>
        </div>
    );
};

export {MoviesByGenre};