import './App.css';
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';


function App() {

  const { movies: mappedMovies } = useMovies()



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
        <Movies movies={mappedMovies} />
      </main>
    </div >
  )
}

export default App
