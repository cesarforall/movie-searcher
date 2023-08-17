export default function SearchBar ({ searchText, onSearchTextChange, onSearchClick }) {
  return (
    <form className='search-bar' onSubmit={e => e.preventDefault()}>
      <input
        type='text' placeholder='avengers, transformers, ...' value={searchText} onChange={(e) => {
          e.preventDefault()
          onSearchTextChange(e.target.value)
        }}
      />
      <input
        type='button' value='Search' onClick={onSearchClick}
      />
    </form>
  )
}
