import {FC} from "react";
import {Rating} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import css from './StarsRating.module.css'

interface IProps {
    rating: number
}

const StarsRating: FC<IProps> = ({rating}) => {

    return (
        <div className={css.starRatingBox}>
            <Rating value={(rating / 2)}
                    precision={0.25}
                    max={5}
                    emptyIcon={<StarBorderIcon style={{color:'yellow', opacity: 0.8}} fontSize="inherit" />}
                    readOnly/>
            <div className={css.ratingVote}>{rating.toPrecision(2)}</div>
        </div>
    );
};

export {StarsRating};