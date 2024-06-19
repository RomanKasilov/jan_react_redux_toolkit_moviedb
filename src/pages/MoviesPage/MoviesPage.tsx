import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux.hooks";
import {movieActions} from "../../redux/slices/movieSlice";
import {MoviesList} from "../../components/MovieContainer/MoviesList/MoviesList";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch(movieActions.getAll({page: searchParams.get('page') || '1'}))
    }, []);
    return (
        <div>
             <MoviesList/>
        </div>
    );
};

export {MoviesPage};