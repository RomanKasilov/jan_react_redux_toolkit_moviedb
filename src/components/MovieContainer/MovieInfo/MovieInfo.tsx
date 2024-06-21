import {useAppSelector} from "../../../pages/hooks/redux.hooks";

const MovieInfo = () => {
    const {movieInfo} = useAppSelector(state => state.movies);
    console.log(movieInfo)
    return (movieInfo &&
<div>
    <div>{movieInfo.title}</div>
    <img src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`} alt="movieInfo.title"/>
</div>
    );
};

export {MovieInfo};