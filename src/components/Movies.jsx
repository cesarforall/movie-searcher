export function Movie ({ title, year, imdbID, type, posterURL }) {
  return (
    <div className='movie-card'>
      <img src={posterURL} alt={`${title} poster`} />
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <p>imdbID: {imdbID}</p>
      <p><span>{type}</span></p>
    </div>
  )
}

function ListOfMovies ({ movies }) {
  return (
    <ul className='movies-container'>
      {
         movies.map((movie) =>
           <Movie
             key={movie.imdbID}
             title={movie.Title}
             posterURL={movie.Poster}
             year={movie.Year}
             imdbID={movie.imdbID}
             type={movie.Type}
           />)
        }
    </ul>
  )
}

function NoMoviesResults () {
  return <p>There are not movies to show</p>
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}
