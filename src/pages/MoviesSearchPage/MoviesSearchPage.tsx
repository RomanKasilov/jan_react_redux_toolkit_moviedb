import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {MoviesList, PaginationComponent} from "../../components";
import css from './MoviesSearchPage.module.css'

const MoviesSearchPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const {moviesSearchResult} = useAppSelector(state => state.movies);
    const querystring = localStorage.getItem("searchString")
    useEffect(() => {
        querystring && dispatch(movieActions.getByString({query: querystring, page: searchParams.get('page') || '1'}))
    }, [querystring, searchParams]);

    const navigate = useNavigate();
    const error = useAppSelector(state => state.movies.moviesError);
    if (error) {
        navigate('/errorPage', {state: error})
    }

    return (moviesSearchResult &&
        <div className={css.movieSearchBox}>
            <MoviesList moviesData={moviesSearchResult}/>
            <PaginationComponent movies={moviesSearchResult}/>
        </div>
    );
};

export {MoviesSearchPage};
