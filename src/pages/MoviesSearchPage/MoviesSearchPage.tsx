import {MoviesList} from "../../components/MovieContainer/MoviesList/MoviesList";
import {Pagination} from "../../components/Pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";

import css from './MoviesSearchPage.module.css'
import {useAppLocation} from "../../hooks/useAppLocation";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice";
import {useSearchParams} from "react-router-dom";

const MoviesSearchPage = () => {
    const dispatch = useAppDispatch();
    const {state} = useAppLocation<string>();
    const [searchParams] = useSearchParams();
    const {moviesSearchResult} = useAppSelector(state => state.movies);
    const querystring = localStorage.getItem("searchString")
    useEffect(() => {
      querystring &&  dispatch(movieActions.getByString({query: querystring, page: searchParams.get('page') || '1'}))
    }, [state, searchParams]);
    console.log(moviesSearchResult)
    console.log(state)
    console.log(searchParams.get('page'))

    return (moviesSearchResult &&
        <div className={css.movieSearchBox}>
            <MoviesList moviesData={moviesSearchResult}/>
            <Pagination movies={moviesSearchResult}/>
        </div>
    );
};

export {MoviesSearchPage};
