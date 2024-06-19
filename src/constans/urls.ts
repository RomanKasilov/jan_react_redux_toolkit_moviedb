const baseURL = 'https://api.themoviedb.org/3'

const movie = 'movie';
const urls = {
    movies:{
        discoverAll: `discover/${movie}`,
        byId:(movieId:number)=>`${movie}/${movieId}`
    }
}
export{baseURL,urls}