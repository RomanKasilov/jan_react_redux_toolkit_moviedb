import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../redux/slices";
import {MoviesList} from "../MoviesList";
import {PaginationComponent} from "../../Pagination";
import css from './MoviesByGenre.module.css'

const MoviesByGenre = () => {
    const {moviesByGenre} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const genreId = localStorage.getItem('genre')
    const [searchParams] = useSearchParams();
    useEffect(() => {
        genreId && dispatch(movieActions.getByGenre({with_genres: genreId, page: searchParams.get('page') || '1'}))
    }, [genreId, searchParams]);
    const navigate = useNavigate();
    const error = useAppSelector(state => state.genres.genresError);
    if (error) {
        navigate('/errorPage', {state: error})
    }

    return (moviesByGenre &&
        <div className={css.movieByGenreBox}>
            <MoviesList moviesData={moviesByGenre}/>
            <PaginationComponent movies={moviesByGenre}/>
        </div>
    );
};

export {MoviesByGenre};