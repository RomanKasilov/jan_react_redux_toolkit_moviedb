import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../types";
import css from './GenreBadge.module.css'

interface IProps {
    genres: IGenre[]
}

const GenreBadge: FC<IProps> = ({genres}) => {
    const navigate = useNavigate();

    return (
        <div className={css.genresBox}>
            {genres && genres.map(genre => <div key={genre.id} className={css.badge} onClick={() => {
                localStorage.setItem('genre', `${genre.id}`)
                navigate(`/movies/${genre.name}`)
            }}>
                {genre.name}
            </div>)}
        </div>
    );
};

export {GenreBadge};