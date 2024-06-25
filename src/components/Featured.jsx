import React from 'react'

import Card from './Card';

const Featured = ({data}) => {
    const fProduct = data?.slice(0,12)
   
  return (
    <div className='container mt-5'>
        <div className="row">
            <h4>Featured Products</h4>
            {fProduct?.map((item) => (
               <Card item={item} key={item.id}/>
            ))}
        </div>
      
    </div>
  )
}

export default Featured
