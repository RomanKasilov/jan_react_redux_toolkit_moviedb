import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices";
import {MoviesList, PaginationComponent} from "../../components";
import css from './MoviesPage.module.css'

const MoviesPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies);
    useEffect(() => {
            dispatch(movieActions.getAll(searchParams.get('page') || '1'));
        }, [searchParams]
    );

    const navigate = useNavigate();
    const error = useAppSelector(state => state.movies.moviesError);
    if (error) {
        navigate('/errorPage', {state: error})
    }
    return (movies &&
        <div className={css.moviePageBox}>
            <MoviesList moviesData={movies}/>
            <PaginationComponent movies={movies}/>
        </div>
    )
}

export {MoviesPage};