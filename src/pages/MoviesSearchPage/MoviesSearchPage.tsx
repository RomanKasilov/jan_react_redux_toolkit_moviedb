import {MoviesList} from "../../components/MovieContainer/MoviesList/MoviesList";
import {Pagination} from "../../components/Pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";

import css from './MoviesSearchPage.module.css'
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice";
import {useSearchParams} from "react-router-dom";

const MoviesSearchPage = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();
    const {moviesSearchResult} = useAppSelector(state => state.movies);
    const querystring = localStorage.getItem("searchString")
    useEffect(() => {
      querystring &&  dispatch(movieActions.getByString({query: querystring, page: searchParams.get('page') || '1'}))
    }, [querystring, searchParams]);


    return (moviesSearchResult &&
        <div className={css.movieSearchBox}>
            <MoviesList moviesData={moviesSearchResult}/>
            <Pagination movies={moviesSearchResult}/>
        </div>
    );
};

export {MoviesSearchPage};
