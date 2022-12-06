import React from 'react'



const Search = ({ value, changeInput }) => {
  return (
    <div className=' flex items-center justify-center h-[60px] py-0 px-[15px]'>
      <input type="text" placeholder='Buscar...' value={value} onChange={changeInput} className='p-[5px] tracking-tight w-[40%] border rounded-xl' />
    </div>
  )
}

export default Search
