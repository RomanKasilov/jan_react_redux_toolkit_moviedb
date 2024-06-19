import {IMoviesListCard} from "../../../types/IMoviesListCard";
import {FC} from "react";

interface IProps{
movie:IMoviesListCard
}
const MoviesListCard:FC<IProps> = ({movie}) => {
    return (
        <div>
            {movie.title}
        </div>
    );
};

export {MoviesListCard};