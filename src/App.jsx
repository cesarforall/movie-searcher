import './App.css'

import { useEffect, useState } from 'react'

import SearchBar from './components/SearchBar'
import { Movies } from './components/Movies'

// const API_URL = 'http://www.omdbapi.com/?apikey=4aea3be1&s=batman'

export default function App () {
  const [searchText, setSerchText] = useState('transformers')
  const [movies, setMovies] = useState([])

  function searchMovies () {
    fetch(`https://www.omdbapi.com/?apikey=4aea3be1&s=${searchText}`)
      .then((res) => res.json())
      .then(responseMovies => {
        const movies = responseMovies.Search
        setMovies(movies)
      })
  }

  useEffect(() => {
    searchMovies()
  }, [])

  return (
    <>
      <header>
        <h1>Movie Searcher</h1>
        <SearchBar searchText={searchText} onSearchTextChange={setSerchText} onSearchClick={searchMovies} />
      </header>
      <main>
        <Movies movies={movies} />
      </main>
      <footer>Made with ♥️ by @cesarforall</footer>
    </>
  )
}
