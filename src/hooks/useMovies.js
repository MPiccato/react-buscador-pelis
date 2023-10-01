import withOutResults from '../mocks/no-results.json';
import responseMovies from '../mocks/with-results.json';

//Custom hooks
export function useMovies() {
    const movies = responseMovies.Search;

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    return { movies: mappedMovies }

}
