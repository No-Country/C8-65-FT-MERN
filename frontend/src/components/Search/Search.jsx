import React from 'react'
import './search.css'


const Search = ({ value, changeInput }) => {
  return (
    <div className='s-container'>

      <input type="text" placeholder='Search...' value={value} onChange={changeInput} />
    </div>
  )
}

export default Search
