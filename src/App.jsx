import './App.css';
import withOutResults from './mocks/no-results.json';
import responseMovies from './mocks/with-results.json';
import { Movies } from './components/Movies';
function App() {
  const movies = responseMovies.Search;


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
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App
