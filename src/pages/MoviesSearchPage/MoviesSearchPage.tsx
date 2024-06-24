import {MoviesList} from "../../components/MovieContainer/MoviesList/MoviesList";
import {PaginationComponent} from "../../components/Pagination/PaginationComponent";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";

import css from './MoviesSearchPage.module.css'
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice";
import {useNavigate, useSearchParams} from "react-router-dom";

const MoviesSearchPage = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();
    const {moviesSearchResult} = useAppSelector(state => state.movies);
    const querystring = localStorage.getItem("searchString")
    useEffect(() => {
      querystring &&  dispatch(movieActions.getByString({query: querystring, page: searchParams.get('page') || '1'}))
    }, [querystring, searchParams]);
    const navigate = useNavigate();
    const error = useAppSelector(state => state.movies.moviesError);
    if (error) {
        navigate('/errorPage',{state:error})
    }
    return (moviesSearchResult &&
        <div className={css.movieSearchBox}>
            <MoviesList moviesData={moviesSearchResult}/>
            <PaginationComponent movies={moviesSearchResult}/>
        </div>
    );
};

export {MoviesSearchPage};
