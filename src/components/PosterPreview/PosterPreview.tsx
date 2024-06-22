import {FC} from "react";

interface IProps {
    image: string,
    title:string
}

const PosterPreview: FC<IProps> = ({image,title}) => {
    return (
        <img src={`https://image.tmdb.org/t/p/w300${image}`} alt={title}/>
    );
};

export {
    PosterPreview
};