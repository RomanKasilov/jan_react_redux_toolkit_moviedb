import {FC} from "react";
import {IGenre} from "../../types/IGenre";
import css from './GenreBadge.module.css'

interface IProps {
genres:IGenre[]
}
const  GenreBadge:FC<IProps> = ({genres}) => {

    return (
        <div className={css.genresBox}>
            {genres && genres.map(genre => <div className={css.badge}>
                {genre.name}
            </div>)}
        </div>
    );
};

export { GenreBadge};