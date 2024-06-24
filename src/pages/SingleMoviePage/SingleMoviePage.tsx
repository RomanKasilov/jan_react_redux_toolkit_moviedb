import {MovieInfo} from "../../components/MovieContainer/MovieInfo/MovieInfo";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice";
import {useNavigate, useParams} from "react-router-dom";

const SingleMoviePage = () => {
    const {movieId} = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        movieId && dispatch(movieActions.getById(movieId))
    }, [movieId]);
    const navigate = useNavigate();
    const error = useAppSelector(state => state.movies.moviesError);
    if (error) {
        navigate('/errorPage',{state:error})
    }
    return (
        <div>
            <MovieInfo/>
        </div>
    );
};

export {SingleMoviePage};