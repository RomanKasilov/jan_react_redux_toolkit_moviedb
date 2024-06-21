import {FC} from "react";
import {Rating} from "@mui/material";
interface IProps{
rating : number
}
const StarsRating:FC<IProps> = ({rating}) => {
    
    return (
<div>
    <Rating name="read-only" value ={rating} precision={0.5} max={5} readOnly />
</div>
    );
};

export {StarsRating};