import './App.css';
import withOutResults from './mocks/no-results.json';
import responseMovies from './mocks/with-results.json';

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;
  return (
    <div className='page'>

      <header>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {/* Peliculas */}
        {hasMovies ? (
          <ul>
            {
              movies.map(movie => (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              ))
            }
          </ul>
        )
          : (
            <p>No se encontraron resultados para esta peli</p>
          )
        }
      </main>
    </div>
  )
}

export default App
