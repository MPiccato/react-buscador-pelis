const API_KEY = '4287ad07'
export const searchMovies = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${APY_KEY}&s=${search}`)
        const json = response.json()

        const movies = json.Search;

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie: Poster
        }))
    } catch (e) {
        throw new Error('Error searching movies')

    }

}