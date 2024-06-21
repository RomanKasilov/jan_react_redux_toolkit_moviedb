import {MovieInfo} from "../../components/MovieContainer/MovieInfo/MovieInfo";
import {useAppDispatch} from "../hooks/redux.hooks";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice";
import {useParams} from "react-router-dom";

const SingleMoviePage = () => {
    const {movieId} = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        movieId && dispatch(movieActions.getById(movieId))
    }, [movieId]);
    return (
        <div>
            <MovieInfo/>
        </div>
    );
};

export {SingleMoviePage};