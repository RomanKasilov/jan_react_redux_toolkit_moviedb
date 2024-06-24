import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/slices/movieSlice";
import {PaginationComponent} from "../../components/Pagination/PaginationComponent";
import {MoviesList} from "../../components/MovieContainer/MoviesList/MoviesList";

import css from './MoviesPage.module.css'
import {router} from "../../router/router";
import {ErrorPage} from "../ErrorPage/ErrorPage";

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
        navigate('/errorPage',{state:error})
    }
    return (movies?
        <div className={css.moviePageBox}>
            <MoviesList moviesData={movies}/>
            <PaginationComponent movies={movies}/>
        </div>
            :
      <ErrorPage/>
    )



}

export {MoviesPage};