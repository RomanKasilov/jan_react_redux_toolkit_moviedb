const baseURL = 'https://api.themoviedb.org/3'

const movie = '/movie';
const search = '/search'
const genre = '/genre'
const urls = {
    movies: {
        discoverAll: 'discover' + movie,
        byId: (movieId: string) => movie+'/'+movieId,
        searchByString: search + movie

    },
    genres: {
        getAll: genre + movie + '/list'
    }
}
export {baseURL, urls}