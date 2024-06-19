import {useEffect} from "react";
import {movieService} from "../../services/movieService";
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../hooks/redux.hooks";
import {movieActions} from "../../redux/slices/movieSlice";
import {MoviesList} from "../../components/MovieContainer/MoviesList/MoviesList";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies);
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        dispatch(movieActions.getAll({page: searchParams.get('page') || '1'}))
    }, []);
    return (
        <div>
            {movies && <MoviesList movies = {movies.results}/> }
        </div>
    );
};

export {MoviesPage};