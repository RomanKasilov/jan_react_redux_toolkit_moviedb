import {IMoviesListCard} from "../../../types/IMoviesListCard";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

import css from './MoviesListCard.module.css'

interface IProps {
    movie: IMoviesListCard
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const imageURL = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    const styles = {backgroundImage: `url(${imageURL})`}

    const navigate = useNavigate();
    return (
        <div className={css.movieCard} style={styles}
             onClick={() => navigate(`/movie/${movie.id}`)}>

            {movie.title}
        </div>
    );
};

export {MoviesListCard};