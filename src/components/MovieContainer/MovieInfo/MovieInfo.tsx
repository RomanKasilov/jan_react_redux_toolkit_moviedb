import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import YouTube from "react-youtube";
import {Button} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import {useAppSelector} from "../../../hooks";
import {PosterPreview} from "../../PosterPreview";
import {StarsRating} from "../../StarsRating";
import {GenreBadge} from "../../GenreBadge";
import {movieService} from "../../../services";
import css from './MovieInfo.module.css'
import {IVideo} from "../../../types";

const MovieInfo = () => {
    const {movieInfo} = useAppSelector(state => state.movies);
    const year = movieInfo?.release_date.split('-', 1)
    const navigate = useNavigate();
    const [videos, setVideos] = useState<IVideo[] | null>(null)
    useEffect(() => {
        if (movieInfo) {
            movieService.getVideos(movieInfo.id)
                .then(value => setVideos(value.results))
        }
    }, [movieInfo]);
    let key
    if (videos) {
        key = videos[0].key
    }
    return (movieInfo &&
        <div className={css.movieInfoBox}>
            <div>
                <PosterPreview image={movieInfo.poster_path} title={movieInfo.title}/>
                <StarsRating rating={movieInfo.vote_average}/>
                <Button style={{marginTop: '20px'}} onClick={() => navigate(-1)}
                        variant="outlined" startIcon={<ArrowBackIosIcon/>}>
                    Back
                </Button>
            </div>
            <GenreBadge genres={movieInfo.genres}/>
            <div>
                <div>
                    <h1>{movieInfo.title}</h1>
                    <div>release_date: {year}</div>
                    <div> runtime: {movieInfo.runtime} min</div>
                </div>
                <div className={css.movieOverview}>
                    <h3>Overview: </h3>
                    <div>{movieInfo.overview}</div>
                </div>
                {key && <YouTube style={{height: '10vh'}} videoId={key}/>}
            </div>
        </div>
    );
};

export {MovieInfo};