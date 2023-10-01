import './App.css';

import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';
import { useEffect, useState, useRef } from 'react';


//Custom Hooks buscar

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true)

  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }


    if (search === '') {
      setError('no se pueden buscar pelis sin nombre')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una peli con un número')
      return
    }
    if (search.length < 3) {
      setError('La búsqueda debe tener al menos tres caracteres')
      return
    }

    setError(null)

  }, [search])

  return { search, updateSearch, error }

}

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search });




  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {


    updateSearch(event.target.value)

  }




  return (
    <div className='page'>

      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{ border: '1px solid blue', borderColor: error ? 'red' : 'blue' }}
            onChange={handleChange} value={search} name='query'
            placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {/* Peliculas */}
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App
