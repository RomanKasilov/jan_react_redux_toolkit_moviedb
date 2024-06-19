import {IMoviesListCard} from "../../../types/IMoviesListCard";
import {FC} from "react";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

interface IProps {
movies:IMoviesListCard[]
}

const MoviesList:FC<IProps> = ({movies}) => {
    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};