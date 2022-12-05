import React from 'react'
import Card from '../productCard/ProductCard'
import './list.css'


const List = ({ list }) => {

  return (
    <div className='l-cards'>
      {list.map((product) => (
        <Card product={product} />
      ))}
    </div>
  )
}

export default List
