import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux.hooks";
import {movieActions} from "../../redux/slices/movieSlice";
import {MoviesList} from "../../components/MovieContainer/MoviesList/MoviesList";
import {Pagination} from "../../components/Pagination/Pagination";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(movieActions.getAll({page: searchParams.get('page') || '1'}))
    }, [searchParams]);
    return (
        <div>
             <MoviesList/>
            <Pagination/>
        </div>
    );
};

export {MoviesPage};