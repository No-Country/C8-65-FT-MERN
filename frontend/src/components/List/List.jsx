import React from 'react'
import Card from '../productCard/ProductCard'
import './list.css'


const List = ({ list }) => {

  return (
    <div className='l-cards'>
      {list.map((product) => (
        <div key={product.slug}>
          <Card product={product} />
        </div>
      ))}
    </div>
  )
}

export default List
