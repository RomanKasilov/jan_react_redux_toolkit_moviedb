import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Box} from "@mui/material";

import {movieActions} from "../../redux/slices";
import {MovieInfo} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks";

const SingleMoviePage = () => {
    const {movieId} = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        movieId && dispatch(movieActions.getById(movieId))
    }, [movieId]);
    const navigate = useNavigate();
    const error = useAppSelector(state => state.movies.moviesError);
    if (error) {
        navigate('/errorPage', {state: error})
    }
    return (
        <Box>
            <MovieInfo/>
        </Box>
    );
};

export {SingleMoviePage};