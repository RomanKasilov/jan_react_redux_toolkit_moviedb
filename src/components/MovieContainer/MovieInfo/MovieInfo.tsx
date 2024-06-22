import {useAppSelector} from "../../../hooks/redux.hooks";
import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {StarsRating} from "../../StarsRating/StarsRating";
import css from './MovieInfo.module.css'
import {GenreBadge} from "../../ GenreBadge/GenreBadge";

const MovieInfo = () => {
    const {movieInfo} = useAppSelector(state => state.movies);
    const year = movieInfo?.release_date.split('-', 1)
    console.log(movieInfo)
    console.log(year)

    return (movieInfo &&
        <div className={css.movieInfoBox}>
            <div className={css.moviePoster}>
                <PosterPreview image={movieInfo.poster_path} title={movieInfo.title}/>
                <StarsRating rating={movieInfo.vote_average}/>
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
            </div>
        </div>
    );
};

export {MovieInfo};