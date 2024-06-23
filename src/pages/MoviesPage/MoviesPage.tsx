import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/slices/movieSlice";
import {Pagination} from "../../components/Pagination/Pagination";
import {MoviesList} from "../../components/MovieContainer/MoviesList/MoviesList";

import css from './MoviesPage.module.css'

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const {movies} = useAppSelector(state => state.movies);
    useEffect(() => {
            dispatch(movieActions.getAll({page: searchParams.get('page') || '1'}))
        }, [searchParams]
    );

    return ( movies &&
        <div className={css.moviePageBox}>
            <MoviesList moviesData={movies}/>
            <Pagination movies={movies}/>
        </div>
    )
};

export {MoviesPage};