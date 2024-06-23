import {useAppSelector} from "../../../hooks/redux.hooks";
import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {StarsRating} from "../../StarsRating/StarsRating";
import css from './MovieInfo.module.css'
import {GenreBadge} from "../../GenreBadge/GenreBadge";
import {Button} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useNavigate} from "react-router-dom";
import YouTube from "react-youtube";
import {useEffect, useState} from "react";
import {movieService} from "../../../services/movieService";

const MovieInfo = () => {
    const {movieInfo} = useAppSelector(state => state.movies);
    const year = movieInfo?.release_date.split('-', 1)
    const navigate = useNavigate();
    const [key, setKey] = useState<string>('')
    useEffect(() => {
        if (movieInfo) {
            movieService.getVideo(movieInfo.id)
                .then(value => setKey(value.results[0].key))
        }
    }, [movieInfo]);
    console.log(key)
    return (movieInfo &&
        <div className={css.movieInfoBox}>
            <div className={css.moviePoster}>
                <PosterPreview image={movieInfo.poster_path} title={movieInfo.title}/>
                <StarsRating rating={movieInfo.vote_average}/>
                <Button style={{marginTop:'20px'}} onClick={() => navigate(-1)}
                        variant="outlined" startIcon={<ArrowBackIosIcon/>}>
                    Back
                </Button>
            </div>
            <GenreBadge genres={movieInfo.genres}/>
            <div className={css.movieDetails}>
                <div className={css.movieTitle}>
                    <h1>{movieInfo.title}</h1>
                    <div>release_date: {year}</div>
                    <div> runtime: {movieInfo.runtime} min</div>
                </div>
                <div className={css.movieOverview}>
                    <h3>Overview: </h3>
                    <div>{movieInfo.overview}</div>
                </div>
                {key && <YouTube style={{height:'10vh'}} videoId={key}/>}
            </div>
        </div>
    );
};

export {MovieInfo};