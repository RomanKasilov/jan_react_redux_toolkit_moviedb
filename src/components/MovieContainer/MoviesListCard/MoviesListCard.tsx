import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IMoviesListCard} from "../../../types";
import {StarsRating} from "../../StarsRating";
import css from './MoviesListCard.module.css'

interface IProps {
    movie: IMoviesListCard
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const imageURL = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    const styles = {backgroundImage: `url(${imageURL})`}
    const navigate = useNavigate();
    return (
        <div className={css.movieCardBox} style={styles}
             onClick={() => navigate(`/movie/${movie.id}`)}>
            <h2>{movie.title}</h2>
            <StarsRating rating={movie.vote_average}/>
        </div>
    );
};

export {MoviesListCard};